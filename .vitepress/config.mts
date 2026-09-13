import { defineConfig, UserConfig } from "vitepress";
import { DefaultTheme } from "vitepress/theme";
import { generateSidebar } from "./scan-sidebar";
import { fileURLToPath } from "node:url";
import markdownItContainer from "markdown-it-container";

const docsModeStorageKey = "robeex-docs-view-mode";

const defaultConfigs = {
    outline: {
        level: [2, 3],
    } as DefaultTheme.Outline,
    search: {
        provider: "local",
    },
    lastUpdated: {
        text: "Last updated: ",
        formatOptions: {
            dateStyle: "full",
        },
    },
} as const;

const hostname = "https://docs.robeex.com";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        resolve: {
            alias: [
                {
                    find: /^.*\/VPNavBarTranslations\.vue$/,
                    replacement: fileURLToPath(
                        new URL(
                            "./theme/CustomNavBarTranslations.vue",
                            import.meta.url,
                        ),
                    ),
                },
            ],
        },
    },
    ignoreDeadLinks: false,
    sitemap: {
        hostname,
        lastmodDateOnly: false,
    },
    head: [
        [
            "script",
            {
                type: "text/javascript",
            },
            `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "uir0bpxaqd");
            `,
        ],
        [
            "script",
            {
                async: 'async',
                src: "//www.instagram.com/embed.js"
            }
        ],
        [
            "script",
            {},
            `
(function () {
    var mode = "student";

    try {
        if (localStorage.getItem("${docsModeStorageKey}") === "teacher") {
            mode = "teacher";
        }
    } catch {}

    document.documentElement.dataset.docsMode = mode;
})();
            `,
        ],
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["link", { rel: "alternate", hreflang: "en", href: hostname + "/en/" }],
        ["link", { rel: "alternate", hreflang: "fa", href: hostname + "/fa/" }],
        [
            "link",
            {
                rel: "alternate",
                hreflang: "x-default",
                href: hostname + "/en/",
            },
        ],
    ],
    locales: {
        root: {
            lang: "en",
            label: "English",
            link: "/en/",
            themeConfig: {
                sidebar: generateSidebar("en"),
                socialLinks: [
                    {
                        icon: "github",
                        link: "https://github.com/RoBeeX-Robotics",
                    },
                    {
                        icon: "youtube",
                        link: "https://www.youtube.com/@RoBeeXRobotics",
                    },
                    {
                        icon: "instagram",
                        link: "https://www.instagram.com/robeex.iran",
                    },
                ],
                outline: {
                    ...defaultConfigs.outline,
                    label: "Table of Contents",
                },
            },
        },
        fa: {
            lang: "fa",
            link: "/fa/",
            label: "Persian (فارسی)",
            dir: "rtl",
            title: "مستندات روبیکس",
            description: "با راهنماهای گام‌به‌گام، آموزش‌ها، مستندات API و مثال‌های کاربردی، مونتاژ، پرواز و برنامه‌نویسی ربات پرنده روبیکس را یاد بگیرید.",
            themeConfig: {
                langMenuLabel: 'تغییر زبان',
                lastUpdated: {
                    ...defaultConfigs.lastUpdated,
                    text: "اخرین تغییر: ",
                },
                nav: [
                    { text: "خانه", link: "/fa" },
                    {
                        text: "شروع ",
                        link: "/fa/user-manuals/robeex-ai-drone/specification",
                    },
                ],
                sidebar: generateSidebar("fa"),
                socialLinks: [
                    {
                        icon: "github",
                        link: "https://github.com/RoBeeX-Robotics",
                    },
                    {
                        icon: "youtube",
                        link: "https://www.youtube.com/@RoBeeXRobotics",
                    },
                    {
                        icon: "instagram",
                        link: "https://www.instagram.com/robeex.iran",
                    },
                ],
                outline: {
                    ...defaultConfigs.outline,
                    label: "فهرست مطالب",
                },
                notFound: {
                    title: "صفحه مورد نظر یافت نشد",
                    linkText: "بازگشت به خانه",
                    linkLabel: "بازگشت به خانه",
                    quote: "گشتم نبود، نگرد نیست",
                },
                search: {
                    ...defaultConfigs.search,
                    options: {
                        translations: {
                            button: {
                                buttonText: "جستجو",
                                buttonAriaLabel: "جستجو",
                            },
                            modal: {
                                backButtonTitle: "بازگشت",
                                displayDetails: "نمایش جزئیات",
                                resetButtonTitle: "بازنشانی جستجو",
                                noResultsText: "نتیجه‌ای یافت نشد",
                                footer: {
                                    selectText: "انتخاب",
                                    navigateText: "حرکت",
                                    closeText: "بستن",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    title: "RoBeeX Docs",
    description: "Learn how to assemble, fly, and program the RoBeeX AI Drone with step-by-step guides, tutorials, API references, and practical examples.",
    srcDir: "src",
    appearance: "force-dark",
    markdown: {
        config(md) {
            md.use(markdownItContainer, "teacher", {
                render(tokens, idx, _options, env) {
                    const token = tokens[idx];

                    if (token.nesting === 1) {
                        env.frontmatter ??= {};
                        env.frontmatter.hasTeacherNotes = true;

                        const customTitle = token.info
                            .trim()
                            .slice("teacher".length)
                            .trim();
                        const defaultTitle = env.relativePath?.startsWith("fa/")
                            ? "یادداشت مدرس"
                            : "Teacher note";
                        const title = md.renderInline(
                            customTitle || defaultTitle,
                            {
                                references: env.references,
                            },
                        );
                        const attrs = md.renderer.renderAttrs(token);

                        return `<aside class="teacher custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`;
                    }

                    return "</aside>\n";
                },
            });
        },
    },
    themeConfig: {
        search: defaultConfigs.search,
        lastUpdated: defaultConfigs.lastUpdated,
    },
});
