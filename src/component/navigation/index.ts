import type { App, Plugin } from 'vue'
import MenuComponent from './src/Menu.vue'
import MenuItemComponent from './src/MenuItem.vue'
import SubMenuComponent from './src/SubMenu.vue'

export const NanoMenu = MenuComponent as typeof MenuComponent & Plugin
export const NanoMenuItem = MenuItemComponent as typeof MenuItemComponent & Plugin
export const NanoSubMenu = SubMenuComponent as typeof SubMenuComponent & Plugin

const components = [NanoMenu, NanoMenuItem, NanoSubMenu]

export const NanoNavigationPlugin: Plugin = {
  install(app: App) {
    components.forEach(comp => {
      if (comp.name) {
        app.component(comp.name, comp)
      }
    })
  }
}

export default NanoNavigationPlugin