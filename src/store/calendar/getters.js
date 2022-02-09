export default {
    count(state) {
        return state.calendar.length
    },
    all(state) {
        return state.calendar;
    },
    calendarByUser(state) {
        return (user) => state.calendar.filter((event) => {
            return  event.user == user;
        })
    },
    // lessonsByCourseId(state) {
    //     return (courseId) => state.lessons.filter((lesson) => {
    //         return  lesson.courseId == courseId;
    //     })
    // },
    // lessonsById(state) {
    //     return (id) => state.lessons.filter((lesson) => {
    //         return  lesson.id == id;
    //     })
    // }
}