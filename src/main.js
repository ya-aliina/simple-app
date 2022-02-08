import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/ui';

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDVxMI_zm4zbl0YbRDLgG6FaciEBTle8OE",
	authDomain: "simple-a39bb.firebaseapp.com",
	databaseURL: "https://simple-a39bb-default-rtdb.firebaseio.com/",
	projectId: "simple-a39bb",
	storageBucket: "simple-a39bb.appspot.com",

	messagingSenderId: "752393134792",
	appId: "1:752393134792:web:cc9787e6964ea6f7977bfd"
};
const provider = new GoogleAuthProvider();
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(store);

components.forEach(component => {
	app.component(component.name, component)
});

const auth = getAuth();

const db = getDatabase();

function getData(path, stringClear, stringAdd) {
	onValue(ref(db, path), (snapshot) => {
		store.commit(stringClear);
		const object = snapshot.val();
		console.log(object)
		for (const [key, value] of Object.entries(object)) {
			store.commit(stringAdd, value);
		}
	});
}
getData('/courses', 'courses/clear', 'courses/addCourse');
getData('/lessons', 'lessons/clear', 'lessons/addLesson');
getData('/calendar', 'calendar/clear', 'calendar/addEvent');

let mounted = false;
onAuthStateChanged(auth, (user) => {
	store.commit('user/setAuthUser', user);
	// console.log('onAuthStateChanged', user);
	if (!mounted) {
		app.use(router);
		app.mount('#app');
		mounted = true;
	}
});