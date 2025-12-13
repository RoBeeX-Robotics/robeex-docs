import { defineConfig, UserConfig } from "vitepress";
import { DefaultTheme } from "vitepress/theme";
import { generateSidebar } from "./scan-sidebar";

const defaultConfigs = {
    outline: {
        level: [2, 3],
    } as DefaultTheme.Outline,
    search: {
        provider: "local",
    }
} as const;

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ignoreDeadLinks: false,
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
                type: "text/javascript",
            },
            `
            if (window.location.pathname === '/' || window.location.pathname.toLowerCase() === '/index.html') {
                window.location.replace('/en/');
            }
            `,
        ],
        ["link", { rel: "icon", href: "/favicon.ico" }],
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
            title: "مستندات RoBeeX",
            themeConfig: {
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
                            }
                        },
                    },
                },
            },
        },
    },
    title: "RoBeeX Docs",
    description: "RoBeeX Documentation Site",
    srcDir: "src",
    appearance: "force-dark",
    themeConfig: {
        search: defaultConfigs.search,
    },
});
