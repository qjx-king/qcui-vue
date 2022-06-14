import { createApp } from 'vue'
import { qcui } from '../src/main'
import App from App.vue'


const app = createApp(App)
app.use(qcui)
app.mount('#app')