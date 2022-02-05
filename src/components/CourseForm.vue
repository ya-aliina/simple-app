<template>
    <div data-vue-component="CourseForm">
        <cover text=""></cover>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div v-for="lesson in lessonsById" :key="lesson.courseId" class="col-12">
                        <router-link :to="`/${lesson.courseId}/${lesson.id}`" class="router">
                            <div class="course_item_wrapper">
                                <div class="course_item">
                                    <img :src="getImgUrl(lesson.img)" alt="course_cover" class="course_cover">
                                    <div>{{ lesson.title }}</div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <!--                    <div class="col-12"-->
                    <!--                         v-for="lesson in lessonsArray"-->
                    <!--                         :key="lesson.id"-->
                    <!--                    >-->
                    <!--                        <router-link :to="`/${lesson.courseName}/${lesson.courseId}/${lesson.id}`" class="router">-->
                    <!--                                <div v-if="lesson.courseId == $route.params.id" class="course_item_wrapper">-->
                    <!--                                    <div class="course_item">-->
                    <!--                                        <img :src="getImgUrl(lesson.img)" alt="course_cover" class="course_cover">-->
                    <!--                                        <div>{{ lesson.title }}</div>-->
                    <!--                                    </div>-->
                    <!--                                </div>-->
                    <!--                        </router-link>-->
                    <!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cover from "@/components/Cover";

export default {
    name: "course-form",
    components: {
        Cover
    },
    data() {
        return {
            courseId: '',
            lessonsById: [],
            // lessonsArray: [
            //     {
            //         courseId: 1,
            //         courseName: 'business_english',
            //         id: 1,
            //         title: "Урок 1",
            //         img: '',
            //     },
            //     {
            //         courseId: 1,
            //         courseName: 'business_english',
            //         id: 2,
            //         title: "Урок 2",
            //         img: '',
            //     },
            //     {
            //         courseId: 1,
            //         courseName: 'business_english',
            //         id: 3,
            //         title: "Урок 3",
            //         img: '',
            //     },
            //     {
            //         courseId: 2,
            //         courseName: 'excel_basic_course',
            //         id: 4,
            //         title: "Урок 1",
            //         img: '',
            //     },
            //     {
            //         courseId: 3,
            //         courseName: 'power_point_basic_course',
            //         id: 5,
            //         title: "Урок 1",
            //         img: '',
            //     },
            // ]
        }
    },
    methods: {
        getImgUrl(picName) {
            // if (picName !== '') {
            //     return require('../assets/' + picName);
            // }
            return require('../assets/courses.png');
        },
    },
    created () {
        this.courseId = this.$route.params.id;

        this.lessonsById = this.$store.getters["lessons/lessonsByCourseId"](this.courseId);
        console.log(this.lessonsById);
        // const editPost = postById(id);
        // this.postText = editPost.title;
        // this.postBody = editPost.body;

        // const courseById = this.$store.getters["news/newsById"];
        // lessonsArray() {
        //     return this.$store.getters["courses/all"]
        //     // console.log(this.$store.getters['lessons/lessonsByCourseId'](this.$route.params.id))
        //     // return this.$store.getters['lessons/lessonsByCourseId'](this.$route.params.id);
        // },
    }
}

</script>

<style scoped>
/deep/ .cover {
    background-image: url("../assets/cover/courses_dark.jpg");
}

.wrapper {
    background: #f1f4f6;
    padding-bottom: 30px;
}

.course_item_wrapper {
    margin-top: 30px;
}

.course_item {
    cursor: pointer;
    display: flex;
    padding: 28px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(66, 72, 78, .12);
    text-decoration: none;
    transition: all 0.5s 0s ease;
}

.course_item:hover {
    transition: all 0.5s 0s ease;
    transform: scale(1.04)
    /*transform: translate(0px, -10px);*/
}

.course_item div {
    padding-left: 20px;
    font-size: 20px;
    font-weight: 500;
    color: #42484e;
    text-decoration: none;
}

.course_cover {
    border-radius: 4px;
    width: 17%;
    height: auto;
}

.router {
    text-decoration: none;
}

.router:hover {
    transition: all 0.5s 0s ease;
    transform: translate(0px, -23px);
}

</style>