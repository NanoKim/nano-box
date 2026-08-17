import type { App, Plugin } from 'vue'
import NanoInputComponent from './src/input.vue'

export const NanoInput = NanoInputComponent as typeof NanoInputComponent & Plugin

const components = [NanoInput]

export const NanoFormPlugin: Plugin = {
  install(app: App) {
    components.forEach(comp => {
      if (comp.name) {
        app.component(comp.name, comp)
      }
    })
  }
}

export default NanoFormPlugin