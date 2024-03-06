import './assets/main.css'
import scrollAnimation from './directives/scrollAnimation'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.directive('scroll', scrollAnimation)
app.use(router)
app.mount('#app')
