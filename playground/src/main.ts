import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import NanoBox from '../../src/index'
import '../../src/style/main.css'

const app = createApp(App)

app.use(router)
app.use(NanoBox)

app.mount('#app')