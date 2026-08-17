import { App } from 'vue';
import { NanoInput } from './component/form';
import { NanoScrollbar, NanoIcon } from './component/general';
import { NanoContainer, NanoHeader, NanoAside, NanoMain, NanoFooter } from './component/layout';
import { NanoMenu, NanoMenuItem, NanoSubMenu } from './component/navigation';
import { NanoTooltip } from './component/overlay';
declare module 'nano-box/nano-box.css';
export { NanoInput };
export { NanoScrollbar, NanoIcon };
export { NanoContainer, NanoHeader, NanoAside, NanoMain, NanoFooter };
export { NanoMenu, NanoMenuItem, NanoSubMenu };
export { NanoTooltip };
export { default as NanoLayout } from './component/layout';
export { useThemeTransition } from './composable/theme';
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        NanoInput: typeof NanoInput;
        NanoScrollbar: typeof NanoScrollbar;
        NanoIcon: typeof NanoIcon;
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
