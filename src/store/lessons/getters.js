export default {
    count(state) {
        return state.lessons.length
    },
    all(state) {
        return state.lessons;
    },
    lessonsByCourseId(state) {
        // return (courseId) => state.lessons.find(item => item.courseId == courseId);
        return (courseId) => state.lessons.filter((lesson) => {
            // lesson.courseId == courseId;
            console.log(lesson, courseId)
            return  lesson.courseId == courseId;
        })
    }
}