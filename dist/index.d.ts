import { App } from 'vue';
import { NanoInput } from './components/forms';
import { NanoScrollbar } from './components/generals';
import { NanoContainer, NanoHeader, NanoAside, NanoMain, NanoFooter } from './components/layouts';
import { NanoMenu, NanoMenuItem, NanoSubMenu } from './components/navigations';
import { NanoTooltip } from './components/overlays';
export { NanoInput };
export { NanoScrollbar };
export { NanoContainer, NanoHeader, NanoAside, NanoMain, NanoFooter };
export { NanoMenu, NanoMenuItem, NanoSubMenu };
export { NanoTooltip };
export { default as NanoLayout } from './components/layouts';
export { useThemeTransition } from './composables/theme';
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        NanoInput: typeof NanoInput;
        NanoScrollbar: typeof NanoScrollbar;
        NanoContainer: typeof NanoContainer;
        NanoHeader: typeof NanoHeader;
        NanoAside: typeof NanoAside;
        NanoMain: typeof NanoMain;
        NanoFooter: typeof NanoFooter;
        NanoMenu: typeof NanoMenu;
        NanoMenuItem: typeof NanoMenuItem;
        NanoSubMenu: typeof NanoSubMenu;
        NanoTooltip: typeof NanoTooltip;
    }
}
declare const _default: {
    install(app: App): void;
};
export default _default;
