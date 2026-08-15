import './style/main.css'

import type { App, Component } from 'vue'
import { NanoInput } from './components/input'
import { NanoContainer, NanoHeader, NanoAside, NanoMain, NanoFooter } from './components/layout'
import { NanoMenu, NanoMenuItem, NanoSubMenu } from './components/menu'
import { NanoTooltip } from './components/tooltip'

export { NanoInput }
export { NanoContainer, NanoHeader, NanoAside, NanoMain, NanoFooter } from './components/layout'
export { NanoMenu, NanoMenuItem, NanoSubMenu }
export { NanoTooltip }
export { default as NanoLayout } from './components/layout'

export { useThemeTransition } from './composables/theme'

const components: Component[] = [
  NanoInput,
  NanoContainer,
  NanoHeader,
  NanoAside,
  NanoMain,
  NanoFooter,
  NanoMenu,
  NanoMenuItem,
  NanoSubMenu,
  NanoTooltip,
]

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    NanoContainer: typeof NanoContainer
    NanoHeader: typeof NanoHeader
    NanoAside: typeof NanoAside
    NanoMain: typeof NanoMain
    NanoFooter: typeof NanoFooter
    NanoMenu: typeof NanoMenu
    NanoMenuItem: typeof NanoMenuItem
    NanoSubMenu: typeof NanoSubMenu
    NanoInput: typeof NanoInput
    NanoTooltip: typeof NanoTooltip
  }
}

export default {
  install(app: App) {
    components.forEach(component => {
      if (component.name) {
        app.component(component.name, component)
      }
    })
  }
}