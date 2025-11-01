import { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
// import MyLayout from './MyLayout.vue'
import './custom.css';

export default {
    extends: DefaultTheme,

    // override the Layout with a wrapper component that
    // injects the slots
    enhanceApp({ app }) {
        // register your custom global components
        app.component('MyComp', () => import('./MyComp.vue'));
    },
} as Theme;
