import type { App, Plugin } from 'vue'
import ContainerComponent from './src/container.vue'
import HeaderComponent from './src/header.vue'
import AsideComponent from './src/aside.vue'
import MainComponent from './src/main.vue'
import FooterComponent from './src/footer.vue'

export const NanoContainer = ContainerComponent as typeof ContainerComponent & Plugin
export const NanoHeader = HeaderComponent as typeof HeaderComponent & Plugin
export const NanoAside = AsideComponent as typeof AsideComponent & Plugin
export const NanoMain = MainComponent as typeof MainComponent & Plugin
export const NanoFooter = FooterComponent as typeof FooterComponent & Plugin

const components = [
  NanoContainer,
  NanoHeader,
  NanoAside,
  NanoMain,
  NanoFooter,
]

export const NanoLayoutPlugin: Plugin = {
  install(app: App) {
    components.forEach(component => {
      if (component.name) {
        app.component(component.name, component)
      }
    })
  }
}

components.forEach(comp => {
  comp.install = (app: App) => {
    if (comp.name) {
      app.component(comp.name, comp)
    }
  }
})

export default NanoLayoutPlugin