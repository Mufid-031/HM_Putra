/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'
import 'primeicons/primeicons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()

AOS.init()

app.use(pinia)
app.use(router)

app.mount('#app')
