import { createStore } from 'vuex'
import userStore from './user';
import coursesStore from './courses';
import lessonsStore from './lessons';
import calendarStore from './calendar';

export default createStore({
	state: {
		isMyCourseBtnActive: false,
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		user: userStore,
		courses: coursesStore,
		lessons: lessonsStore,
		calendar: calendarStore,
	},
})


