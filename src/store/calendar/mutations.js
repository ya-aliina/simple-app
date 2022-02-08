export default {
    addEvent (state, data) {
        state.calendar.push(data);
    },
    clear(state) {
        state.calendar = [];
    }
}