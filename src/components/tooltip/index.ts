import type { App, Plugin } from 'vue'
import ToolTipComponent from './src/tooltip.vue'

export const NanoTooltip = ToolTipComponent as typeof ToolTipComponent & Plugin

const components = [NanoTooltip]

export const NanoMenuPlugin: Plugin = {
  install(app: App) {
    components.forEach(comp => {
      if (comp.name) {
        app.component(comp.name, comp)
      }
    })
  }
}

export default NanoMenuPlugin