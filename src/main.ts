import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CardComponent from './components/CardComponent.vue';

const app = createApp(App)

app.use(router)
app.component('CardComponent', CardComponent);

app.mount('#app')
