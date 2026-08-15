import type { App, Plugin } from 'vue'
import ScrollbarComponent from './src/scrollbar.vue'

export const NanoScrollbar = ScrollbarComponent as typeof ScrollbarComponent & Plugin

export const NanoScrollbarPlugin: Plugin = {
  install(app: App) {
    app.component(NanoScrollbar.name!, NanoScrollbar)
  }
}

export default NanoScrollbarPlugin