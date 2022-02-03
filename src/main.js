import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/ui';


import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDVxMI_zm4zbl0YbRDLgG6FaciEBTle8OE",
	authDomain: "simple-a39bb.firebaseapp.com",
	projectId: "simple-a39bb",
	storageBucket: "simple-a39bb.appspot.com",
	messagingSenderId: "752393134792",
	appId: "1:752393134792:web:cc9787e6964ea6f7977bfd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(store);

components.forEach(component => {
	app.component(component.name, component)
});


const auth = getAuth();
let mounted =false;
onAuthStateChanged(auth, (user) => {

	store.commit('user/setAuthUser', user);
	// console.log('onAuthStateChanged', user);
	if (!mounted) {
		app.mount('#app');
		mounted = true;
	}

});




