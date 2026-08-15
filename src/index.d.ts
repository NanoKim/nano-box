import type { App } from 'vue';
import { NanoInput } from './components/input';
import { NanoMenu, NanoMenuItem, NanoSubMenu } from './components/menu';
import { NanoTooltip } from './components/tooltip';
export { NanoInput };
export { NanoContainer, NanoHeader, NanoAside, NanoMain, NanoFooter } from './components/layout';
export { NanoMenu, NanoMenuItem, NanoSubMenu };
export { NanoTooltip };
export { default as NanoLayout } from './components/layout';
export { useThemeTransition } from './composables/theme';
declare const _default: {
    install(app: App): void;
};
export default _default;
