import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
// import MyLayout from './MyLayout.vue'
import './custom.css';
import './blockly-base.css';
import './blockly-theme.css';


import MyComp from './MyComp.vue';
import MyIcon from './MyIcon.vue';

export default {
    extends: DefaultTheme,

    // override the Layout with a wrapper component that
    // injects the slots
    enhanceApp({ app }) {
        // register your custom global components
        app.component('MyComp', MyComp);
        app.component('MyIcon', MyIcon);
    },
} as Theme;
