<template>
    <div data-vue-component="ListOfLessons">
        <cover text="">
            <div @click="goTo('/')" class="back_btn">
                Назад к моим курсам
            </div>
            <div>{{ getCourseName(courseId) }}</div>
        </cover>

        <!--============Верхняя панель start=============-->
        <div class="control_panel_wrapper">
            <div class="container control_panel">
                <div class="courses_available">
                    Всего {{ getNumberOfLessons(courseId) }}
                </div>
                <button class="add_lesson_btn">
                    <!--                    <img src="../assets/add.png" alt="" class="add_course_icon">-->
                    <div v-if="editPage === 'false'" @click="openEditPage">Редактировать</div>
                    <div v-if="editPage === 'true'" @click="closeEditPage">Перейти к урокам</div>
                </button>

            </div>
        </div>
        <!--============Верхняя панель end=============-->
        <div class="wrapper">
            <div class="container">
                <div class="row">
                    <!--=================Уроки start=================-->
                    <div v-if="editPage === 'true'" @click="openAddLesson"
                         class="col new_lesson_creator_wrapper">
                        <div class="new_lesson_creator">
                            <div class="lesson_creator_img_wrap">
                                <img src="../assets/add_icon_l.png" alt="" class="new_lesson_creator_img">
                                <div>Добавить новый урок</div>
                            </div>
                        </div>
                    </div>
                    <div v-if="this.emptyPage === 'true'" class="empty_page_wrapper">
                        <div class="empty_page">Здесь еще ничего нет</div>
                    </div>
                    <div v-if="this.emptyPage === 'false'">
                        <div v-for="lesson in lessonsById" :key="lesson.courseId" class="col-12 lesson_wrapper">
                                <router-link :to="`/${lesson.courseId}/${lesson.id}`" class="router">
                                    <div class="lesson_item_wrapper">
                                        <div class="lesson_item">
                                            <img :src="getImgUrl(lesson.img)" alt="lesson_cover" class="lesson_cover">
                                            <div>{{ lesson.title }}</div>
                                        </div>
                                    </div>
                                </router-link>
                            <div v-if="editPage === 'true'" class="content_btn">
                                <img @click="openEditLesson(lesson.id, lesson.title)" src="../assets/edit.png" alt=""
                                     class="content_icon">
                                <img @click.stop @click="openDeleteLesson(lesson.id)" src="../assets/delete.png" alt=""
                                     class="content_icon">
                            </div>
                        </div>
                    </div>
                    <!--=================Уроки end=================-->

                    <!--===============Модальное окно start================-->
                    <my-dialog v-model:show="dialogVisible" v-model:class="animation">

                        <!--============Модалка добавления курса start=============-->
                        <div v-if="addLessonModal==='true'" class="add_lesson_form">
                            <my-input type="text" id="name" v-model="lessonTitle">
                                Название урока:
                            </my-input>
                            <my-button class="btn-primary add_lesson_form_btn" @click="doAdd">
                                Добавить
                            </my-button>
                        </div>
                        <!--============Модалка добавления курса end=============-->

                        <!--============Модалка редактирования start=============-->
                        <div v-if="editLessonModal==='true'" class="add_lesson_form">
                            <div>Редактировать</div>
                            <my-input type="text" id="name" v-model="lessonTitleNew">
                                Название/ тема урока:
                            </my-input>
                            <my-button class="btn-primary add_lesson_form_btn" @click="doUpdate(id)">
                                Сохранить
                            </my-button>
                        </div>
                        <!--============Модалка редактирования end=============-->

                        <!--============Модалка удаления start=============-->
                        <div v-if="deleteLessonModal==='true'" class="add_lesson_form">
                            <div>Вы действительно хотите удалить урок?</div>
                            <my-button class="btn-primary add_lesson_form_btn" @click="doDelete(id)">
                                Удалить
                            </my-button>
                            <my-button class="btn-primary add_lesson_form_btn" @click="hideDialog">
                                Отмена
                            </my-button>
                        </div>
                        <!--============Модалка удаления end=============-->

                    </my-dialog>
                    <!--===============Модальное окно end================-->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cover from "@/components/Cover";
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "list-of-lessons",
    mixins: [toggleMixin],
    components: {
        Cover
    },
    data() {
        return {
            courseId: '',
            lessonsById: [],
            editPage: 'false',
            emptyPage: '',
            addLessonModal: 'false',
            editLessonModal: 'false',
            deleteLessonModal: 'false',
            lessonTitle: '',
            lessonTitleNew: '',
            lessonContent: [],
        }
    },
    created() {
        this.getLessons ()
    },
    methods: {
        getImgUrl(picName) {
            // if (picName !== '') {
            //     return require('../assets/' + picName);
            // }
            return require('../assets/courses.png');
        },
        getCourseName(id) {
            let course = this.$store.getters["courses/coursesById"](id)[0];
            return course.title
        },
        getNumberOfLessons(id) {
            let numberOfLessons = this.$store.getters["lessons/lessonsByCourseId"](id).length;
            if (numberOfLessons === 0) {
                this.emptyPage = "true";
            } else {
                this.emptyPage = "false";
            }
            return numberOfLessons;
        },
        getLessons () {
            this.courseId = this.$route.params.id;
            console.log(this.courseId)
            this.lessonsById = this.$store.getters["lessons/lessonsByCourseId"](this.courseId);
            return this.lessonsById
        },
        openEditPage() {
            this.editPage = 'true';
        },
        closeEditPage() {
            this.editPage = 'false';
        },
        openAddLesson() {
            this.addLessonModal = 'true';
            this.editLessonModal = 'false';
            this.deleteLessonModal = 'false';
            this.showDialog();
        },
        openEditLesson(id, title) {
            this.id = id;
            this.lessonTitleNew = title;
            this.addLessonModal = 'false';
            this.editLessonModal = 'true';
            this.deleteLessonModal = 'false';
            this.showDialog();
        },
        openDeleteLesson(id) {
            this.id = id;
            this.addLessonModal = 'false';
            this.editLessonModal = 'false';
            this.deleteLessonModal = 'true';
            this.showDialog();
        },
        doAdd() {
            this.$store.dispatch("lessons/createLesson", {
                title: this.lessonTitle,
                courseId: this.courseId
            });
            this.courseId = this.$route.params.id;
            this.hideDialog();
            this.lessonTitle = '';
            this. getLessons();
        },
        doUpdate(id) {
            this.$store.dispatch("lessons/updateLesson", {
                id,
                title: this.lessonTitleNew,
                courseId: this.courseId,
            })
            this.hideDialog();
            this. getLessons ();
        },
        doDelete(id) {
            this.$store.dispatch('lessons/deleteLesson', id);
            this.hideDialog();
            this. getLessons();
        },
    },
}

</script>

<style scoped>
/deep/ .cover {
    background-image: url("../assets/cover/lesson_page_dark.jpg");
    height: 330px;
}
/deep/ .text {
    display: flex;
    flex-direction: column;
    height: 330px;
    justify-content: space-around;
}
/deep/ .text_wrapper {
    height: 330px;
}
/deep/ .my_input_wrapper {
    display: flex;
    flex-direction: column;
}
.add_lesson_form_btn {
    margin-top: 20px;
}
.add_lesson_form {
    display: flex;
    flex-direction: column;
    min-width: 360px;
}
.lesson_wrapper {
    display: flex;
}
.back_btn {
    ont-family: Roboto,sans-serif;
    font-size: 13px;
    display: flex;
    /*align-items: center;*/
    max-width: 720px;
    cursor: pointer;
    opacity: .8;
    color: #fff;
}
.back_btn:hover {
    opacity: 1;
}
.back_btn:before {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    content: "";
    background: url('../assets/arrow_back.svg');
}
.wrapper {
    background: #f1f4f6;
    padding-bottom: 30px;
    min-height: 56vh;
}

.empty_page_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 52vh;
}

.empty_page {
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #42484EB8;
}

.lesson_item_wrapper {
    margin-top: 30px;
}

.lesson_item {
    display: flex;
    width: 100%;
    cursor: pointer;
    padding: 28px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(66, 72, 78, .12);
    text-decoration: none;
    transition: all 0.5s 0s ease;
}

.lesson_item:hover {
    transition: all 0.5s 0s ease;
    transform: translate(0px, -12px);
}

.lesson_item div {
    padding-left: 20px;
    font-size: 20px;
    font-weight: 500;
    color: #42484e;
    text-decoration: none;
}

.lesson_cover {
    border-radius: 4px;
    width: 17%;
    height: auto;
}

.router {
    text-decoration: none;
    width: 100%;
    transition: all 0.5s 0s ease;
    transform: translate(0px, -12px);
}

.router:hover {
    transition: all 0.5s 0s ease;
    transform: translate(0px, -12px);
}


/*==============Стили с mainPage==================*/

.lesson_creator_img_wrap {
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

.lesson_creator_img_wrap:hover {
    background-color: #d9d9d978;
}

.new_lesson_creator {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    color: #a3a5a9;
    text-decoration: none;
    padding-top: 35px;
    padding-bottom: 10px;

}

.new_lesson_creator_img {
    height: 44px;
    margin-right: 12px;
}

.content_btn {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 9px;
    margin-left: 10px;
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

.add_lesson_btn {
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


</style>