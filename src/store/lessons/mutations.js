export default {
    addLesson (state, data) {
        state.lessons.push(data);
    },
    clear(state) {
        state.courses = [];
    }
}