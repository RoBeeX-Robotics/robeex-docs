import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import MyLayout from './MyLayout.vue';
import './custom.css';
import './blockly-base.css';
import './blockly-theme.css';

import ImageViewerP from '@miletorix/vitepress-image-viewer'; //[!code ++]
import '@miletorix/vitepress-image-viewer/style.css'; //[!code ++]

import MyComp from './MyComp.vue';
import MyIcon from './MyIcon.vue';

export default {
    extends: DefaultTheme,
    Layout: MyLayout,

    // override the Layout with a wrapper component that
    // injects the slots
    enhanceApp({ app }) {
        // register your custom global components
        app.component('MyComp', MyComp);
        app.component('MyIcon', MyIcon);
        ImageViewerP(app);
    },
} as Theme;
