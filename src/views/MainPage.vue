<template>
    <div data-vue-component="MainPage">
        <cover>Мои курсы</cover>
        <div class="wrapper">
            <div class="container">
                <div class=" number_of_courses_wrapper">
                    <div class="number_of_courses">Количество доступных курсов: {{ $store.getters['courses/count'] }}</div>
                </div>
                <div class="row">
                        <div v-for="course in coursesArray" :key="course.id" class="col-6 course_item_wrapper">
                            <router-link :to="`/${course.name}/${course.id}`" class="router">
                                <div class="course_item">
                                    <img :src="getImgUrl(course.img)" alt="course_cover" class="course_cover">
                                    <div>{{course.title}}</div>
                                </div>
                            </router-link>
                        </div>
<!--                    &lt;!&ndash;					<div class="col-6 course_item_wrapper"&ndash;&gt;-->
<!--                    &lt;!&ndash;						 v-for = "course in courseArray"&ndash;&gt;-->
<!--                    &lt;!&ndash;						 :key = "course.id"&ndash;&gt;-->
<!--                    &lt;!&ndash;					>&ndash;&gt;-->
<!--                    &lt;!&ndash;						<router-link :to="`/${course.name}/${course.id}`" class="router">&ndash;&gt;-->
<!--                    &lt;!&ndash;							<div class="course_item">&ndash;&gt;-->
<!--                    &lt;!&ndash;								<img :src="getImgUrl(course.img)" alt="course_cover" class="course_cover">&ndash;&gt;-->
<!--                    &lt;!&ndash;								<div>{{course.title}}</div>&ndash;&gt;-->
<!--                    &lt;!&ndash;							</div>&ndash;&gt;-->
<!--                    &lt;!&ndash;						</router-link>&ndash;&gt;-->
<!--                    &lt;!&ndash;					</div>&ndash;&gt;-->
                </div>
            </div>
        </div>
<!--        <div class="wrapper">-->
<!--            <div class="container">-->
<!--                <div class=" number_of_courses_wrapper">-->
<!--                    {{$store.getters['posts/count']}}-->
<!--                </div>-->
<!--                <div v-for="post in postArray"-->
<!--                     :key="post.id">-->

<!--                    {{post.id}}: {{post.title}}-->

<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
import Cover from "../components/Cover";

export default {
    name: "MainPage",
    components: {
        Cover
    },
    data() {
        return {
            // courseArray: [
            // 	{
            // 		id: 1,
            //         name:'business_english',
            // 		title: 'Business English',
            // 		img: '',
            // 	},
            // 	{
            // 		id: 2,
            //         name:'excel_basic_course',
            // 		title: 'Excel. Базовый курс',
            // 		img: '',
            // 	},
            // 	{
            // 		id: 3,
            //         name:'power_point_basic_course',
            // 		title: 'PowerPoint. Базовый курс',
            // 		img: '',
            // 	},
            // ]
        }
    },

    computed: {
        coursesArray() {
            return this.$store.getters['courses/all'];
        },
        postArray() {
            return this.$store.getters['posts/all'];
        },
    },
    // created() {
    //     this.$store.dispatch('posts/loadPosts')
    // },
    methods: {
        getImgUrl(picName) {
            if (picName !== '') {
                return require('../assets/' + picName);
            }
            return require('../assets/courses.png');
        },

    },

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

.number_of_courses_wrapper {
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(66, 72, 78, .12);
}

.number_of_courses {
    font-family: Roboto, sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin: 50px 0 30px;
    padding: 20px;
    color: #42484e;
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
    width: 40%;
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
