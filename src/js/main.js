import '../assets/main.css'
import { createApp} from '../../node_modules/vue'
import App from '../App.vue'
import router from './router'
import { createPinia } from '../../node_modules/pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
