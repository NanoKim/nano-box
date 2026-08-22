import { Plugin } from 'vue';
import { default as MenuComponent } from './src/Menu.vue';
import { default as MenuItemComponent } from './src/MenuItem.vue';
import { default as SubMenuComponent } from './src/SubMenu.vue';
export declare const NanoMenu: typeof MenuComponent & Plugin;
export declare const NanoMenuItem: typeof MenuItemComponent & Plugin;
export declare const NanoSubMenu: typeof SubMenuComponent & Plugin;
export declare const NanoNavigationPlugin: Plugin;
export default NanoNavigationPlugin;
