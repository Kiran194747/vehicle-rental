import './assets/main.css'

import { createApp } from 'vue'
import router from "@/router";
import { createPinia } from 'pinia';
import app from "@/App.vue";
const pinia = createPinia(); // Initialize Pinia

createApp(app).use(router).use(pinia).mount('#app'); // Use the router and Pinia
