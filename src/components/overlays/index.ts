import type { App, Plugin } from 'vue'
import AlertComponent from './src/alert.vue'
import ConfirmComponent from './src/confirm.vue'
import DialogComponent from './src/dialog.vue'
import DrawerComponent from './src/drawer.vue'
import LoadingComponent from './src/loading.vue'
import ToastComponent from './src/toast.vue'
import TooltipComponent from './src/tooltip.vue'

export const NanoAlert = AlertComponent as typeof AlertComponent & Plugin
export const NanoConfirm = AlertComponent as typeof ConfirmComponent & Plugin
export const NanoDialog = AlertComponent as typeof DialogComponent & Plugin
export const NanoDrawer = AlertComponent as typeof DrawerComponent & Plugin
export const NanoLoading = AlertComponent as typeof LoadingComponent & Plugin
export const NanoToast = AlertComponent as typeof ToastComponent & Plugin
export const NanoTooltip = TooltipComponent as typeof TooltipComponent & Plugin

const components = [NanoAlert, NanoConfirm, NanoDialog, NanoDrawer, NanoLoading, NanoToast, NanoTooltip];

export const NanoOverlaysPlugin: Plugin = {
  install(app: App) {
    components.forEach(comp => {
      if (comp.name) {
        app.component(comp.name, comp)
      }
    })
  }
}

export default NanoOverlaysPlugin