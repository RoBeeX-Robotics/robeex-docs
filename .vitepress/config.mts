import { defineConfig } from "vitepress";
import Def from "vitepress/theme";
import baseConfig from "./theme";
import VitePluginVitePressAutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import { sidebar } from "./scan-sidebar";
// import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        plugins: [
            // add plugin
            // VitePluginVitePressAutoSidebar({
            //     // path: "src",
            //     deletePrefix: '.',
            //     scanRootMdFiles: true,
            //     createIndex: false,
            //     path: '/src',
            //     ignoreList: ['assets'],
            //     // ignoreIndexItem: true,
            //     sideBarResolved: (d) => {
            //         setTimeout(() => {
            //             console.log("side bar resolve", JSON.stringify(d, null, 4))
            //         }, 400)
            //         return d;
            //     },
            //     // scanRootMdFiles: true,
            //     // createIndex: true
            //     // You can also set options to adjust sidebar data
            //     // see option document below
            // }),
        ],
    },

    title: "RoBeeX Docs",
    description: "RoBeeX Documentation Site",
    srcDir: "src",
    appearance: 'force-dark',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        search: {
            provider: "local",
        },
        nav: [
            { text: "Home", link: "/" },
            { text: "Get started", link: "/manuals/get-started" },
        ],
        // sidebar: { text: 'Hello', items: [sidebar] },
        // sidebar: [sidebar],
        sidebar: sidebar,
        socialLinks: [
            // { icon: "github", link: "https://github.com/vuejs/vitepress" },
            {
                icon: "instagram",
                link: "https://www.instagram.com/robeex.robotics",
            },
            {
                icon: "youtube",
                link: "https://www.youtube.com/@RoBeeXRobotics",
            },
        ],
    },
});
