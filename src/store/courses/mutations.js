export default {
    addCourse(state, data) {
        state.courses.push(data);
    },
    clear(state) {
        state.courses = [];
    }
}