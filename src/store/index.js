import { createStore } from 'vuex'
import userStore from './user';
import coursesStore from './courses';
import lessonsStore from './lessons';
import postsStore from './posts';

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
		posts: postsStore,
	},
})


