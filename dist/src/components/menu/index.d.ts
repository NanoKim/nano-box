import { Plugin } from 'vue';
import { default as MenuComponent } from './src/menu.vue';
import { default as MenuItemComponent } from './src/menu-item.vue';
import { default as SubMenuComponent } from './src/sub-menu.vue';
export declare const NanoMenu: typeof MenuComponent & Plugin;
export declare const NanoMenuItem: typeof MenuItemComponent & Plugin;
export declare const NanoSubMenu: typeof SubMenuComponent & Plugin;
export declare const NanoMenuPlugin: Plugin;
export default NanoMenuPlugin;
