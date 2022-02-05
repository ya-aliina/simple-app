export default {
    count (state) {
        return state.comments.length;
    },
    all (state) {
      return state.comments;
    },


    //TODO перенести в стор с уроками
    // courseBusinessEnglish (state) {
    //     return state.courses.filter(course => course.name === 'business_english');
    // },
    // lessonsByCourseId (state) {
    //     return (id) => state.lessons.filter(lesson => lesson.courseId === id)
    // }
}