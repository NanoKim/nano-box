import { createApp } from 'vue'
import App from './App.vue'

import NanoBox from '../../src/index'
import '../../src/style/main.css'

const app = createApp(App)

app.use(NanoBox)

app.mount('#app')