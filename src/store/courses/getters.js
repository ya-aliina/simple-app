export default {
    count (state) {
        return state.courses.length;
    },
    all (state) {
        return state.courses;
    },
    coursesById (state) {
        return (id) => state.courses.filter((course) => {
            return  course.id == id;
        })
    }

}