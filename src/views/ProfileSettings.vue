<template>
    <div data-vue-component="ProfileSettings">
        <cover text="Настройки профиля"/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="title">
                        Настройки аккаунта
                    </div>
                </div>
            </div>
            <div class="form-group">
                <my-input label="Имя" v-model="name"/>
                <my-input label="Фамилия" v-model="surname"/>
                <my-input label="Логин" v-model="login"/>
                <my-input label="Пароль" v-model="password"/>
                <my-input label="email" v-model="email"/>
                <my-checkbox v-model="checkbox1" label="Получать уведомления на почту"/>
                <div class=" wrapper-radio d-flex px-10 ">
                    <div class="col-2">Категория</div>
                    <div class=" col-8 radio">
                        <my-radio :options="radioOptions" v-model:selected="answer"/>
                    </div>
                    <div>{{ answer }}</div>
                </div>
                <div class=" wrapper-radio d-flex px-10 ">
                    <div class="col-2">Категория2</div>
                    <div class=" col-8 radio">
                        <my-radio :options="radioOptions2" v-model:selected="answer2"/>
                    </div>
                    <div>{{ answer2 }}</div>
                </div>
                                <my-dialog v-model:show="dialogVisible">
                                    <div>Сохранить изменения?</div>
                                    <my-button @click="hideDialog">Сохранить</my-button>
                                </my-dialog>

                <my-button @click="showDialog">Сохранить</my-button>


            </div>
        </div>
    </div>
</template>

<script>
import Cover from "../components/Cover";
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "ProfileSettings",
    components: {
        Cover,
    },
    mixins: [toggleMixin],
    data() {
        return {
            surname: '',
            name: '',
            password: '',
            login: '',
            checkbox1: false,
            picked: null,
            about: '',
            email: '',
            answer: '',
            answer2: '',
            selectAnswer: '',
            radioOptions2: [
                'Ученик',
                'Преподаватель',
            ],
            radioOptions: [
                'Ученик',
                'Преподаватель',
            ],
            selectOptions: [
                'Да',
                'Нет',
                'Не знаю',
            ],
        }
    },
}
</script>

<style scoped>
/deep/ .cover {
    background-image: url("../assets/cover/profile_settings.jpg");
}

.title {
    font-family: Roboto, sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin: 50px 0 30px;
    color: #42484e;
}

.wrapper-radio {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
