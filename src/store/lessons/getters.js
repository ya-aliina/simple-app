export default {
    count(state) {
        return state.lessons.length
    },
    all(state) {
        return state.lessons;
    },
    lessonsByCourseId(state) {
        return (id) => state.lessons.filter(lesson => lesson.courseId == id)
    }
}