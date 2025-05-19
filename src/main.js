import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from './routers'
import AutoRem from './utils/AutoRem'

const app = createApp(App)
app.use(route)
app.mount('#app')


AutoRem()