import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import VueRouter from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(VueRouter)
app.mount('#app')