import type { App, Plugin } from 'vue'
import NanoInputComponent from './src/input.vue'

export const NanoInput = NanoInputComponent as typeof NanoInputComponent & Plugin

NanoInput.install = (app: App) => {
  app.component('NanoInput', NanoInput)
}

export default NanoInput