import fs from 'fs';
import path from 'path';
import { DefaultTheme } from 'vitepress/theme';
import fm from 'front-matter';

let excludeList = ['assets', 'index.md'];
if (process.env['NODE_ENV'] == 'production') {
    excludeList.push('dev')
}

/**
 * Convert file or folder name into human-readable title
 * e.g., "get-started.md" -> "Get started"
 */
function toTitle(name: string): string {
    return name
        .replace(/^\[[^\]]+\]-/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\.[^/.]+$/, '')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/ai /i, 'AI ');
}

/**
 * Recursively scan directory and build sidebar structure
 */
function scanDirectory(
    dir: string,
    basePath = '',
    depth = 0
): DefaultTheme.SidebarItem[] {
    const isFirst = depth === 0;

    const entries = fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((dirent) => excludeList.indexOf(dirent.name) === -1)
        .map(({ name }) => {
            const fullPath = path.join(dir, name);
            const isDir = fs.statSync(fullPath).isDirectory();

            let orderPriority = 0;
            const mdFile = isDir ? path.join(fullPath, 'index.md') : fullPath;

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
        .filter((x) => x.isDir ? true : x.name.endsWith('.md'))
        .map((entry) => {
            if (entry.isDir) {
                const subItems = scanDirectory(
                    entry.fullPath,
                    entry.relativePath,
                    depth + 1
                );

                const isLast = subItems.findIndex((x) => x.items != undefined) == -1

                return {
                    text: isFirst
                        ? toTitle(entry.name).toUpperCase()
                        : toTitle(entry.name),
                    collapsed: !isFirst,
                    link: isLast ? subItems[0].link : undefined,
                    items: subItems,
                };
            }

            const name = entry.name.replace(/\.md$/, '');
            const link = '/' + entry.relativePath.replace(/\.md$/, '');

            return {
                text: isFirst
                    ? name.split('-').join(' ').toUpperCase()
                    : toTitle(name),
                link, // make /index.md map to root
            };
        });

    if (depth == 3) console.log('after sort', items);

    return items;
}

/**
 * Main function
 */
function generateSidebar(): DefaultTheme.SidebarItem[] {
    const srcPath = path.resolve('src');
    const sidebarItems = scanDirectory(srcPath);

    //   const sidebar: SidebarItem = {
    //     text: 'User manuals',
    //     items: sidebarItems,
    //   };

    return sidebarItems;
}

// --- Run and output the result ---
export const sidebar = generateSidebar();
// console.log(JSON.stringify(sidebar, null, 4));
console.log(sidebar);
