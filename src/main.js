import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyRadio from "@/components/ui/MyRadio"


createApp(App)
	.use(router)
	.use(store)
	.component('MyRadio', MyRadio)
	.mount('#app');



