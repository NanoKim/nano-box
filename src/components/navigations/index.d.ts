import type { Plugin } from 'vue';
import MenuComponent from './src/menu.vue';
import MenuItemComponent from './src/menu-item.vue';
import SubMenuComponent from './src/sub-menu.vue';
export declare const NanoMenu: typeof MenuComponent & Plugin;
export declare const NanoMenuItem: typeof MenuItemComponent & Plugin;
export declare const NanoSubMenu: typeof SubMenuComponent & Plugin;
export declare const NanoMenuPlugin: Plugin;
export default NanoMenuPlugin;
