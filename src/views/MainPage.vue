<template>
    <div data-vue-component="MainPage">
        <cover>Мои курсы</cover>
        <div class="control_panel_wrapper">
            <div class="container control_panel">
                <div class="courses_available">
                    Доступно {{ this.$store.getters['courses/count'] }}
                </div>
                <button class="add_course_btn">
                    <img src="../assets/add.png" alt="" class="add_course_icon">
                    <div @click="openAddCourse">Добавить курс</div>
                </button>
                <my-dialog v-model:show="dialogVisible" v-model:class="animation">
                    <div v-if="addCourseModal==='true'" class="add_course_form">
                        <img src="../assets/add_course.jpg" alt="" class="add_course_img">
                        <my-input type="text" id="name" v-model="courseTitle">
                            Название курса:
                        </my-input>
                        <my-button class="btn-primary add_course_form_btn" @click="onAdd">
                            Добавить
                        </my-button>
                    </div>
                    <div v-if="editCourseModal==='true'" class="add_course_form">
                        <div>Редактировать</div>
                        <my-input type="text" id="name" v-model="courseTitleNew">
                            Название курса:
                        </my-input>
                        <my-button class="btn-primary add_course_form_btn" @click="onUpdate(id)">
                            Сохранить
                        </my-button>

                    </div>
                    <div v-if="deleteCourseModal==='true'" class="add_course_form">
                        <div>Вы действительно хотите удалить курс?</div>
                        <my-button class="btn-primary add_course_form_btn" @click="doDelete(id)">
                            Удалить
                        </my-button>
                        <my-button class="btn-primary add_course_form_btn" @click="hideDialog">
                            Отмена
                        </my-button>
                    </div>
                </my-dialog>
            </div>

        </div>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <div v-for="course in coursesArray" :key="course.id" class="col-6 course_item_wrapper">
                        <router-link :to="`/${course.id}`" class="router">
                            <div class="course_item">
                                <img :src="getImgUrl()" alt="course_cover" class="course_cover">
                                <div>{{ course.title }}</div>
                            </div>
                        </router-link>
                        <div class="content-btn">
                            <img @click="openEditCourse(course.id, course.title)" src="../assets/edit.png" alt="" class="content_icon">
                            <img @click="openDeleteCourse(course.id)" src="../assets/delete.png" alt="" class="content_icon">
                        </div>
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
import store from "@/store";
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "MainPage",
    components: {
        Cover
    },
    mixins: [toggleMixin],
    data() {
        return {
            id: '',
            courseTitle: '',
            courseTitleNew: '',
            addCourseModal: 'false',
            editCourseModal: 'false',
            deleteCourseModal: 'false',

            // array: [],
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
            // const id = this.id;
            // const courseById = this.$store.getters["posts/courseById"];
            // const editPost = courseById(id);
            // this.courseTitleNew = editPost.title;

            // for (const [key, value] of Object.entries(this.$store.getters['courses/all'])) {
            //
            //     this.array.push(value)
            // }
            // console.log(this.$store.getters['courses/all'])
            // return this.array
            return this.$store.getters["courses/all"]
        },
    },
    created() {

        // this.$store.dispatch('posts/loadPosts')
    },
    methods: {
        getImgUrl(picName) {
            // if (picName !== '') {
            //     return require('../assets/' + picName);
            // }
            return require('../assets/courses.png');
        },
        onAdd() {
            this.$store.dispatch("courses/createCourse", {title: this.courseTitle});
            this.hideDialog();
            this.courseTitle = '';
        },
        onUpdate(id) {
            this.courseTitleNew = this.courseTitle;
            this.$store.dispatch("courses/updateCourse", {title: this.courseTitleNew, id})
            this.hideDialog()
        },
        doDelete (id) {
           this.$store.dispatch('courses/deleteCourse', id);
           this.hideDialog();

        },
        openAddCourse() {
            this.addCourseModal = 'true';
            this.editCourseModal = 'false';
            this.deleteCourseModal ='false';
            this.showDialog();
        },
        openEditCourse(id, title) {
            this.id = id;
            this.courseTitleNew = title;
            this.addCourseModal = 'false';
            this.editCourseModal = 'true';
            this.deleteCourseModal ='false';
            this.showDialog();
        },
        openDeleteCourse(id) {
            this.id = id;
            this.addCourseModal = 'false';
            this.editCourseModal = 'false';
            this.deleteCourseModal ='true';
            this.showDialog();
        }


    },

}
</script>

<style scoped>
/deep/ .cover {
    background-image: url("../assets/cover/courses_dark.jpg");
}

.content_icon {
    width: 35px;
    margin-left: 15px;
    bottom: 0;
    right: 0;
}

.content_wrap {
    display: flex;
    flex-direction: column;
}

.control_panel_wrapper {
    background: #fff;
    height: 68px;
    display: flex;
    align-items: center;
}

.control_panel {
    display: flex;
}

.courses_available {
    color: #42484e;
    border-radius: 18px;
    background-color: #efeff0;
    width: 150px;
    height: 36px;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-right: 20px;

    /*color: #8d98a2;*/
    /*background-color: #fff;*/
}

.add_course_btn {
    background: none;
    border-radius: 18px;
    border: 2px solid #898e956b;
    height: 36px;
    color: #42484e;
    font-weight: 500;
    font-size: 18px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add_course_icon {
    width: 22px;
    height: 22px;
    margin-right: 15px;
}

.add_course_form {
    margin: auto;
    min-height: 58px;
    width: 544px;
    padding: 10px 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.add_course_img {
    width: 300px;
    height: auto;
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
