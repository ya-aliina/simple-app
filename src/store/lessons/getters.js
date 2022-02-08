export default {
    count(state) {
        return state.lessons.length
    },
    all(state) {
        return state.lessons;
    },
    lessonsByCourseId(state) {
        return (courseId) => state.lessons.filter((lesson) => {
            return  lesson.courseId == courseId;
        })
    },
    lessonsById(state) {
        return (id) => state.lessons.filter((lesson) => {
            return  lesson.id == id;
        })
    }
}