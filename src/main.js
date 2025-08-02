import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import HeaderComponent from './views/HeaderComponents/HeaderComponent.vue'
import FooterComponent from './views/FooterComponents/FooterComponent.vue'
import ThemeToggle from './views/HeaderComponents/ThemeToggle.vue'
import router from './router/index.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' 

library.add(fas)  

const app = createApp(App)

app.component('HeaderComponent', HeaderComponent)
app.component('FooterComponent', FooterComponent)
app.component('ThemeToggle', ThemeToggle)


app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')
