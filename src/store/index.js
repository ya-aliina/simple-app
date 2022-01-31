import { createStore } from 'vuex'
import userStore from './user';
import coursesStore from './courses';
import lessonsStore from './lessons';

export default createStore({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		user: userStore,
		courses: coursesStore,
		lessons: lessonsStore,
	},
})


