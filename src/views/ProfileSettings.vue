<template>
    <div data-vue-component="ProfileSettings">
        <cover/>
        <div class="avatar_wrapper">
            <img :src="getUserPhoto()" class="avatar" alt="">
<!--            <img src="@/assets/avatar.svg" alt="user_avatar" class="avatar">-->
            <div class="user_login">{{$store.getters['user/userEmail']}}</div>
        </div>
        <div @click="debug ()">click</div>
        <div class="container">
            <div class="form ">
                <div class="title">Настройки аккаунта</div>
                <my-input-for-settings type="text" id="name" v-model="name" >
                    Имя:
                </my-input-for-settings>
                <my-input-for-settings type="text" id="surname" v-model="surname">
                    Фамилия:
                </my-input-for-settings>
                <my-input-for-settings type="text" id="patronymic" v-model="patronymic">
                    Отчество:
                </my-input-for-settings>
                <my-input-for-settings type="text" id="city" v-model="city">
                    Город:
                </my-input-for-settings>
                <my-input-for-settings type="text" id="about" v-model="about">
                    О себе:
                </my-input-for-settings>
                <div class="title">Изменить пароль</div>
<!--                <div login_wrapper>-->
<!--                    <div class="login_title"></div>-->
<!--                    -->
<!--                </div>-->
                <my-input-for-settings type="password" id="currentPassword" v-model="currentPassword">
                    Введите текущий пароль:
                </my-input-for-settings>
                <my-input-for-settings type="password" id="newPassword" v-model="newPassword">
                    Введите новый пароль:
                </my-input-for-settings>
                <my-input-for-settings type="password" id="newPasswordCopy" v-model="newPasswordCopy">
                    Повторите пароль:
                </my-input-for-settings>
                <my-checkbox v-model="mailNotifications" label="Получать уведомления на почту"/>
                <div class="button_wrapper even_level">
                    <my-button class="btn-primary" @click="checkCurrentPassword">Сохранить</my-button>
                    <button @click="showDialog" type="button" class="btn btn-outline-primary" >Выйти</button>
                </div>
                <my-dialog v-model:show="dialogVisible" v-model:class="animation">
                    <div class="message_confirmation">Вы действительно хотите выйти?</div>
                    <div class="button_wrapper">
                        <my-button class="btn-danger" @click="doLogout">
                            Выйти
                        </my-button>
                        <my-button class="close_modal btn-primary" @click="hideDialog">
                            Отмена
                        </my-button>
                    </div>
                </my-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import Cover from "../components/Cover";
import toggleMixin from "@/mixins/toggleMixin";
import {getAuth} from "firebase/auth";

export default {
    name: "ProfileSettings",
    components: {
        Cover,
    },

    mixins: [toggleMixin],
    data() {
        return {
            name: '',
            surname: '',
            patronymic: '',
            city: '',
            about: '',
            currentPassword: '',
            newPassword: '',
            newPasswordCopy: '',
            mailNotifications: false,

        }
    },
    methods: {
        doLogout() {
            this.$store.dispatch('user/logout')
        },
        debug () {
            console.log(this.$store.getters['user/userPhoto'])
        },
        getUserPhoto () {
            if (this.$store.getters['user/userPhoto'] == null) {
                return require('../assets/avatar.svg')
            } else {
                return this.$store.getters['user/userPhoto']
            }
        },
        checkCurrentPassword() {

        },
        checkNewPassword() {

        },
        changePassword () {
            const auth = getAuth();
            const user = auth.currentUser;
            const newPassword = this.newPassword;

            updatePassword(user, newPassword).then((status) => {
                // Update successful.
            }).catch((error) => {
                // An error ocurred
                // ...
            });

        }

    }
}
</script>

<style scoped>
/deep/ .cover {
    background-image: url("../assets/cover/profile_settings_dark.jpg");
}

.avatar_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -75px;
}
.user_login {
    font-size: 22px;
    font-weight: 600;
    color: #575a60;
    margin-top: 20px;
}

.avatar {
    border-radius: 50%;
    display: flex;
    width: 150px;
    height: 150px;
    justify-content: center;
}

.title {
    font-family: Roboto, sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin: 50px 0 30px;
    color: #42484e;
}

.container {
    max-width: 550px !important;
    display: flex;
   justify-content: center;
}

.form {
    width: 100%;
}
.close_modal {
    margin-left: 30px;

}

.button_wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
}

.even_level {
    margin-right: 15px;
}

.btn {
    /*margin-right: 15px !important;*/
}

.message_confirmation {
    margin-top: 30px;
    padding-left: 27px;
    font-size: 22px;
    width: 226px;
}
</style>
