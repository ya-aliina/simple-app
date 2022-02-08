<template>
    <div>
        <div class="container wrapper editBtnWrapper">
            <img v-if="lessonFormVisible === 'false'" @click="openEditor" src="../assets/edit.png" alt=""
                 class="editBtn">
            <img v-if="lessonFormVisible === 'true'" @click="doUpdate" src="../assets/done.png" alt=""
                 class="editBtn done_img">
        </div>
        <!--========================Блок с уроком start===========================-->
        <div v-if="lessonFormVisible === 'false'" class="container wrapper content_wrapper">
            <div class="row">
                <div class="offset-2 col-8">
                    <div class="title">
                        {{ this.lesson.title }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="offset-2 col-8">
                    <div class="content">
                        {{ this.lesson.content }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="offset-2 col-8">
                    <img src="../assets/courseimg.jpg" alt="" class="img">
                </div>
            </div>
        </div>

        <!--========================Блок с уроком end===========================-->

        <!--========================Блок с формой start===========================-->
        <div v-else class="container wrapper form_wrapper">
            <div class="row">
                <div class="offset-2 col-8">
                    <div class="title">
                        <my-input
                            placeholder="Заголовок (тема) урока"
                            v-model="lessonTitle"
                        ></my-input>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="offset-2 col-8">
                    <my-textarea
                        rows="20"
                        placeholder="Контент"
                        v-model="lessonContent"
                    >
                    </my-textarea>
                </div>
            </div>
            <div class="row">
                <div class="offset-2 col-8">
                    <img src="../assets/courseimg.jpg" alt="" class="img">
                </div>
            </div>
        </div>
        <!--========================Блок с формой end===========================-->
    </div>
</template>

<script>

export default {
    name: "Lesson1",
    data() {
        return {
            id: '',
            courseId: '',
            lesson: [],
            lessonFormVisible: 'false',
            lessonTitle: '',
            lessonContent: '',
        }
    },
    methods: {
        getLesson() {
            this.courseId = this.$route.params.id;
            this.id = this.$route.params.idLesson;
            const lessonById = this.$store.getters["lessons/lessonsById"];
            this.lesson = lessonById(this.id)[0]
        },
        openEditor() {
            this.courseId = this.$route.params.id;
            this.lessonTitle = this.lesson.content;
            this.lessonContent = this.lesson.content;
            this.lessonFormVisible = 'true'
            console.log(this.lessonContent)
        },
        doUpdate() {
            this.$store.dispatch("lessons/updateLesson", {
                courseId: this.courseId,
                id: this.id,
                title: this.lessonTitle,
                content: this.lessonContent,
            });
            this.lessonFormVisible = 'false'
            this.getLesson()
        },
    },
    created() {
        this.id = this.$route.params.idLesson;
        const lessonById = this.$store.getters["lessons/lessonsById"];
        this.lesson = lessonById(this.id)[0]
        this.courseId = this.$route.params.id
    }
}

</script>

<style scoped>

.wrapper {
    padding-top: 20px;
    background: #fff;
}

.title {
    font: 30px Roboto, sans-serif;
    font-weight: 500;
    color: #42484e;
    border-bottom: 1px solid #eee;
    margin: 20px 0;
}

.img {
    width: 100%;
    height: auto;
    margin: 20px 0;
}

.editBtnWrapper {
    display: flex;
    width: 100%;
    justify-content: right;
}

.editBtn {
    width: 30px;
    margin: 0 15px;
    bottom: 0;
    right: 0;
    background-color: #fcfcff;
    border-radius: 15px;
    box-shadow: 0 1px 4px rgb(66 72 78 / 12%);
    cursor: pointer;
}

.content_wrapper,
.form_wrapper {
    margin-top: -50px;
}

.done_img {
    width: 25px;
}

.borders {
    border: none;
}

</style>
