import fs from 'fs';
import path from 'path';
import { DefaultTheme } from 'vitepress/theme';
import fm from 'front-matter';
import translations from './file-name-translations';

const INDEX_FILE = 'index.md';
let excludeList = ['assets', 'public'];
if (process.env['NODE_ENV'] == 'production') {
    excludeList.push('dev');
}

/**
 * Convert file or folder name into human-readable title
 * e.g., "get-started.md" -> "Get started"
 */
function toTitle(name: string, lang: string): string {
    const translation = translations[name]?.[lang];

    if (translation) return translation;

    const title = name
        .replace(/^\[[^\]]+\]-/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\.[^/.]+$/, '')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/\brobeex\b/gi, 'RoBeeX')
        .replace(/\bai\b/gi, 'AI')
        .replace(/\bapi\b/gi, 'API')
        .replace(/\bled\b/gi, 'LED')
        .replace(/\budp\b/gi, 'UDP')
        .replace(/\brc\b/gi, 'RC')
        .replace(/\bimu\b/gi, 'IMU')
        .replace(/\bfaq\b/gi, 'FAQ');

    return title;
}

/**
 * Recursively scan directory and build sidebar structure
 */
function scanDirectory(
    dir: string,
    lang: string = '',
    basePath = '',
    depth = 0
): DefaultTheme.SidebarItem[] {
    const isFirst = depth === 0;

    const entries = fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((dirent) => {
            if (excludeList.indexOf(dirent.name) != -1) return false;

            if (dirent.isFile() && dirent.name == INDEX_FILE) {
                const p = path.join(dir, dirent.name);

                // console.log(p);

                const doInclude =
                    fm<{ include: number }>(fs.readFileSync(p).toString())
                        .attributes.include || false;

                return doInclude;
            }

            return true;
        })
        .map((dirent) => {
            const { name } = dirent;

            const fullPath = path.join(dir, name);
            const isDir = dirent.isDirectory();

            let orderPriority = 0;
            const mdFile = isDir ? path.join(fullPath, INDEX_FILE) : fullPath;

            if (fs.existsSync(mdFile)) {
                orderPriority =
                    fm<{ orderPriority: number }>(
                        fs.readFileSync(mdFile).toString()
                    ).attributes.orderPriority || orderPriority;
            }

            return {
                name,
                fullPath,
                relativePath: path.join(basePath, name),
                orderPriority,
                isDir,
            };
        });

    entries.sort((a, b) => {
        if (a.name == INDEX_FILE) return -1;

        if (a.orderPriority !== b.orderPriority) {
            return b.orderPriority - a.orderPriority;
        }

        if (a.isDir == b.isDir) {
            return a.name.localeCompare(b.name);
        }

        if (a.isDir && !b.isDir) return -1;
        return 1;
    });

    const items: DefaultTheme.SidebarItem[] = entries
        .filter((x) => (x.isDir ? true : x.name.endsWith('.md')))
        .map((entry) => {
            if (entry.isDir) {
                const subItems = scanDirectory(
                    entry.fullPath,
                    lang,
                    entry.relativePath,
                    depth + 1
                );

                // const isLast =

                let link: string | undefined = undefined;
                const hasIndex =
                    subItems?.[0]?.text == toTitle(INDEX_FILE, lang);
                if (
                    hasIndex ||
                    subItems.findIndex((x) => x.items != undefined) == -1
                ) {
                    link = subItems?.[0]?.link?.replace('index', '');
                }

                return {
                    text: isFirst
                        ? toTitle(entry.name, lang).toUpperCase()
                        : toTitle(entry.name, lang),
                    collapsed: !isFirst,
                    link: link,
                    items: hasIndex ? subItems.slice(1) : subItems,
                };
            }

            const name = entry.name.replace(/\.md$/, '');
            const link = '/' + entry.relativePath.replace(/\.md$/, '');

            return {
                text: isFirst
                    ? name.split('-').join(' ').toUpperCase()
                    : toTitle(name, lang),
                // link, // make /index.md map to root
                link: '/' + lang + link,
            };
        });

    // if (depth == 3) console.log('after sort', items);

    return items;
}

/**
 * Main function
 *
 * @param langPrefix e.g., 'en', 'fa'
 */
export function generateSidebar(
    langPrefix: string
): DefaultTheme.SidebarItem[] {
    const srcPath = path.resolve('src/' + langPrefix + '/');
    const sidebarItems = scanDirectory(srcPath, langPrefix);

    console.log(sidebarItems[0].items?.[0]);
    // console.log(JSON.stringify(allNames, null, 4));
    //   const sidebar: SidebarItem = {
    //     text: 'User manuals',
    //     items: sidebarItems,
    //   };

    return sidebarItems;
}

// --- Run and output the result ---
// export const sidebar = generateSidebar();
// console.log(JSON.stringify(sidebar, null, 2));
// console.log(sidebar);
//
