export default {
    count (state) {
        return state.posts.length;
    },
    all (state) {
      return state.posts;
    },
}