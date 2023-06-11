import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app.vue'
import router from './core/router'
import bootstrap from './bootstrap'

// import './assets/styles/main.scss'

const app = createApp(App)
bootstrap.install(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
