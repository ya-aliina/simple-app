export default {
	count(state) {
		return state.calendar.length
	},
	all(state) {
		return state.calendar;
	},
	calendarByUser(state) {
		return (user) => state.calendar.filter((event) => {
			return event.user == user;
		})
	},
}