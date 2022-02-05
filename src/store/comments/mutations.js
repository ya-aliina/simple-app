export default {
    addCourse(state, data) {
        state.comments.push(data);
    },
    clear(state) {
        state.comments = [];
    }
}