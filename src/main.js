import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MyRadio from "@/components/ui/MyRadio"
import MyButton from "@/components/ui/MyButton"
import MyCheckbox from "@/components/ui/MyCheckbox"
import MyDialog from "@/components/ui/MyDialog"
import MyInput from "@/components/ui/MyInput"
import MySelect from "@/components/ui/MySelect"
import MyTextarea from "@/components/ui/MyTextarea"

createApp(App)
	.use(router)
	.use(store)
	.component('MyRadio', MyRadio)
	.component('MyButton', MyButton)
	.component('MyCheckBox', MyCheckbox)
	.component('MyDialog', MyDialog)
	.component('MyInput', MyInput)
	.component('MySelect', MySelect)
	.component('MyTextarea', MyTextarea)
	.mount('#app');



