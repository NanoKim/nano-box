import type { App, Plugin } from 'vue'
import IconComponent from './src/icon.vue'
import ScrollbarComponent from './src/scrollbar.vue'

export const NanoIcon = IconComponent as typeof IconComponent & Plugin
export const NanoScrollbar = ScrollbarComponent as typeof ScrollbarComponent & Plugin

const components = [NanoIcon, NanoScrollbar]

export const NanoGeneralPlugin: Plugin = {
  install(app: App) {
    components.forEach(comp => {
      if (comp.name) {
        app.component(comp.name, comp)
      }
    })
  }
}

export default NanoGeneralPlugin