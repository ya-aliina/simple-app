export default {
    loadPosts () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => context.state.posts = json);
    },

    createPost () {

    },
}