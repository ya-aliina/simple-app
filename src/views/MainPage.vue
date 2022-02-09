<template>
    <div data-vue-component="MainPage">
        <cover>Мои курсы</cover>

        <!--============Верхняя панель=============-->
        <div class="control_panel_wrapper">
            <div class="container control_panel">
                <div class="courses_available">
                    Доступно {{ this.$store.getters['courses/count'] }}
                </div>

                <button class="add_course_btn">
<!--                    <img src="../assets/add.png" alt="" class="add_course_icon">-->
                    <div v-if="editPage === 'false'" @click="openEditPage">Редактировать</div>
                    <div v-if="editPage === 'true'" @click="closeEditPage">Перейти к курсам</div>
                </button>

                <my-dialog v-model:show="dialogVisible" v-model:class="animation">

                    <!--============Модалка добавления курса start=============-->
                    <div v-if="addCourseModal==='true'" class="add_lesson_form">
                        <img src="../assets/add_course.jpg" alt="" class="add_course_img">
                        <my-input type="text" id="name" v-model="courseTitle">
                            Название курса:
                        </my-input>
                        <my-button class="btn-primary add_course_form_btn" @click="doAdd">
                            Добавить
                        </my-button>
                    </div>
                    <!--============Модалка добавления курса end=============-->

                    <!--============Модалка редактирования start=============-->
                    <div v-if="editCourseModal==='true'" class="add_lesson_form">
                        <div>Редактировать</div>
                        <my-input type="text" id="name" v-model="courseTitleNew">
                            Название курса:
                        </my-input>
                        <my-button class="btn-primary add_course_form_btn" @click="doUpdate(id)">
                            Сохранить
                        </my-button>
                    </div>
                    <!--============Модалка редактирования end=============-->

                    <!--============Модалка удаления start=============-->
                    <div v-if="deleteCourseModal==='true'" class="add_lesson_form">
                        <div>Вы действительно хотите удалить курс?</div>
                        <my-button class="btn-primary add_course_form_btn" @click="doDelete(id)">
                            Удалить
                        </my-button>
                        <my-button class="btn-primary add_course_form_btn" @click="hideDialog">
                            Отмена
                        </my-button>
                    </div>
                    <!--============Модалка удаления end=============-->
                </my-dialog>
            </div>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <!--===================Курс start=======================-->
                    <div v-if="editPage === 'true'" @click="openAddCourse" class="col-6 course_item_wrapper new_course_creator_wrapper">
                        <div class="new_course_creator">
                            <div class="course_creator_img_wrap">
                                <img src="../assets/add_icon_l.png" alt="" class="new_course_creator_img">
                                <div>Добавить новый курс</div>
                            </div>
                        </div>
                    </div>
                    <div v-for="course in coursesArray" :key="course.id" class="col-6 course_item_wrapper">
                        <router-link :to="`/${course.id}`" class="router">
                            <div class="course_item">
                                <div class="course_img_wrapper">
                                    <img :src="getImgUrl()" alt="course_cover" class="course_cover">
                                </div>
                                <div class="course_text_wrapper">
                                    <div>{{ course.title }}</div>
                                    <div class="lessons_available">
                                        {{  getTheAmountOfLessons(course.id) }}
                                    </div>
                                </div>
                            </div>
                        </router-link>
                        <div v-if="editPage === 'true'" class="content_btn">
                            <img @click="openEditCourse(course.id, course.title)" src="../assets/edit.png" alt=""
                                 class="content_icon">
                            <img @click.stop @click="openDeleteCourse(course.id)" src="../assets/delete.png" alt=""
                                 class="content_icon">
                        </div>
                    </div>
                    <!--===================Курс end=======================-->
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
            editPage: 'false',
            addCourseModal: 'false',
            editCourseModal: 'false',
            deleteCourseModal: 'false',
        }
    },
    computed: {
        coursesArray() {
            return this.$store.getters["courses/all"]
        },
    },
    created() {
    },
    methods: {
        getImgUrl(picName) {
            // if (picName !== '') {
            //     return require('../assets/' + picName);
            // }
            return require('../assets/courses.png');
        },
        getTheAmountOfLessons (id) {
            let amountOfLessons = this.$store.getters["lessons/lessonsByCourseId"](id).length;
            let lessonsWord = '';
            if ((amountOfLessons % 100 >=0) && (amountOfLessons % 100 <= 19)) {
                if (amountOfLessons === 0) {
                    return 'Уроков еще нет'
                } else if (amountOfLessons % 100 === 0 ) {
                    lessonsWord = 'уроков';
                } else if (amountOfLessons % 100 === 1 ) {
                    lessonsWord = 'урок';
                } else if ((amountOfLessons % 100 >= 2) && (amountOfLessons % 100 <= 4)) {
                    lessonsWord = 'урока';
                } else {
                    lessonsWord = 'уроков';
                }
            }
            //от 20 до 99 в каждой сотне
            else if (amountOfLessons % 10 === 0) {
                lessonsWord = 'уроков';
            } else if (amountOfLessons % 10 === 1) {
                lessonsWord = 'урок';
            } else if ((amountOfLessons % 10 >= 2) && (amountOfLessons % 10 <= 4)) {
                lessonsWord = 'урока';
            } else {
                lessonsWord = 'уроков';
            }
            return `${amountOfLessons} ${lessonsWord}`
        },
        openEditPage () {
            this.editPage = 'true';
        },
        closeEditPage () {
            this.editPage = 'false';
        },
        doAdd() {
            this.$store.dispatch("courses/createCourse", {title: this.courseTitle});
            this.hideDialog();
            this.courseTitle = '';
        },
        doUpdate(id) {
            this.$store.dispatch("courses/updateCourse", {title: this.courseTitleNew, id})
            this.hideDialog()
        },
        doDelete(id) {
            this.$store.dispatch('courses/deleteCourse', id);
            this.hideDialog();
        },
        openAddCourse() {
            this.addCourseModal = 'true';
            this.editCourseModal = 'false';
            this.deleteCourseModal = 'false';
            this.showDialog();
        },
        openEditCourse(id, title) {
            this.id = id;
            this.addCourseModal = 'false';
            this.editCourseModal = 'true';
            this.deleteCourseModal = 'false';
            this.showDialog();
            this.courseTitleNew = title;
        },
        openDeleteCourse(id) {
            this.id = id;
            this.addCourseModal = 'false';
            this.editCourseModal = 'false';
            this.deleteCourseModal = 'true';
            this.showDialog();
        }
    },
}

</script>

<style scoped>

/deep/ .cover {
    background-image: url("../assets/cover/courses_dark.jpg");
}
.course_text_wrapper {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.course_img_wrapper {
    width: 40%;
    height: auto;
    padding: 0;
}
.lessons_available {
    font-size: 15px !important;
    color: #8d98a2 !important;
    font-weight: 400 !important;
}
.course_creator_img_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d936;
    padding: 30px;
    border-radius: 20px;
    height: 100%;
    width: 100%;
    cursor: pointer;
}
.course_creator_img_wrap:hover {
    background-color: #d9d9d978;
}
.new_course_creator {
    /*height: 146px;*/
    height: 100%;
    /*background-color: #d9d9d936;*/
    /*border-radius: 9px;*/
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    color: #a3a5a9;
    text-decoration: none;
    padding-bottom: 46px;
}
.new_course_creator_img {
    height: 44px;
    margin-right: 12px;
}
.content_btn {
    display: flex;
    justify-content: right;
    margin-top: 9px;
}
.content_icon {
    width: 30px;
    margin-left: 15px;
    bottom: 0;
    right: 0;
    background-color: #fcfcff;
    border-radius: 15px;
    box-shadow: 0 1px 4px rgb(66 72 78 / 12%);
    cursor: pointer;
}
.control_panel_wrapper {
    background: #fff;
    height: 55px;
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
    height: 30px;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-right: 20px;
}
.add_course_btn {
    background: none;
    border-radius: 18px;
    border: 2px solid #898e956b;
    height: 30px;
    color: #42484e;
    font-weight: 500;
    font-size: 15px;
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
.add_lesson_form {
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
    padding: 23px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(66, 72, 78, .12);
    text-decoration: none;
    transition: all 0.5s 0s ease;
}
.course_item:hover {
    transition: all 0.5s 0s ease;
    transform: scale(1.04)
}
.course_item div {
    font-size: 17px;
    font-weight: 500;
    color: #42484e;
    text-decoration: none;
}
.course_cover {
    border-radius: 4px;
    width: 100%;
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
