<template>
    <div class="wrapper1">
        <div class="container">
           <div class="row align-items-center">
               <div class="col-6">
                   <div class="main-title">Simple помогает эффективно обучать и обучаться.</div>
                   <div class="text">
                       Учитесь дистанционно, создавайте курсы и выводите знания на новый уровень
                       собственным уникальным способом вместе с Simple.
                   </div>
                   <div class="text">
                      Simple - учиться просто!
                   </div>
                   <div class="notification">
                        Для продолжения авторизуйтесь.
                   </div>
                   <div class="auth_btn_wrapper">
                       <my-button-auth @click="showDialog" >
                           Авторизоваться
                       </my-button-auth>
                   </div>
                   <my-dialog v-model:show="dialogVisible" v-model:class="animation">
                       <div class="registration-form">
                           <div class="login" v-if="showLogin">
                               <img src="../assets/login-cover.jpg" alt="" class="img_login" >
                               <div class="title">Добро пожаловать!</div>
                               <my-input placeholder="Укажите логин" v-model="login" id="login" type="text" class="form-control input"/>
                               <my-input placeholder="Введите пароль" v-model="password" id="password" type="password" class="form-control input"/>
                               <my-button class="button btn-primary" @click="onAuthClick">Войти</my-button>
                               <div class="auth">
                                   <div>Впервые на Simple?</div>
                                   <div class="link-auth" @click="signInWithGoogle">Зарегистрируйтесь</div>
                               </div>
                           </div>
                           <div class="registration" v-if="showRegistration">
                               <img src="../assets/avatar.svg" alt="" class="img_register" >
                               <my-input placeholder="Ваше имя" v-model="name" id="name" type="text" class="form-control input"/>
                               <my-input placeholder="Фамилия" v-model="surname" id="surname" type="text" class="form-control input"/>
                               <my-input placeholder="Логин" v-model="newLogin" id="newLogin" type="text" class="form-control input"/>
                               <my-input placeholder="Пароль" v-model="newPassword" id="newPassword" type="password" class="form-control input"/>
                               <my-input placeholder="Повторите пароль" v-model="newPasswordCopy" id="newPasswordCopy" type="password" class="form-control input"/>
                               <my-input placeholder="Адресс электронной почты" v-model="newEmail" id="newEmail" type="email" class="form-control input"/>
                               <my-checkbox
                                   v-model="agreement" label="Регистрируясь, я соглашаюсь с
                                   Условиями использования продуктов Simple и принимаю Политику конфиденциальности."
                               />
                               <my-button class="button btn-primary" @click="doRegisterClick">Зарегистрироваться</my-button>
                               <div class="auth">
                                   <div>Уже есть аккаунт?</div>
                                   <div class="link-auth" @click="doLogin">Войдите</div>
                               </div>
                           </div>
                       </div>
                   </my-dialog>
               </div>
               <div class="offset-1 col-5">
                   <img src="@/assets/hero.png" alt="" class="bkg-auth">
               </div>
           </div>
        </div>

    </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
// import {GoogleAuthProvider} from "firebase/auth";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

export default {
    name: "MainAuth",
    mixins: [toggleMixin],
    data () {
        return {
            login: '',
            password: '',
            name: '',
            surname: '',
            newLogin: '',
            newPassword: '',
            newPasswordCopy: '',
            newEmail: '',
            agreement: true,
            loginVisible: true,
            showLogin: true,
            showRegistration: false,
        }
    },
    methods: {
        onAuthClick() {
            this.$store.dispatch('user/doAuth',{
                login: this.login,
                password: this.password,
            }).then((status) => {
                if(status === 'OK') {
                    this.$router.push('/');
                } else if (status !== 'OK') {
                    alert ('Ошибка авторизации');
                    console.warn(status)
                }
            });
        },
        doRegisterClick() {
            this.$store.dispatch('user/doCreate',{
                login: this.newLogin,
                password: this.newPassword,
            }).then((status) => {
                if(status === 'OK') {
                    this.$router.push('/');
                } else if (status !== 'OK') {
                    alert ('Ошибка регистрации');
                    console.warn(status)
                }
            });
        },
        signInWithGoogle () {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
                .then((status) => {
                    if (status) {
                        this.$router.push('/')
                    }
                })
        },
        doRegister () {
            this.showLogin = false;
            this.showRegistration = true;
        },
        doLogin () {
            this.showLogin = true;
            this.showRegistration = false;
        }
    },
}
</script>

<style scoped>
    .wrapper1 {
        background: #eae6ff;
        background: -webkit-gradient(linear, left bottom, left top, from(#fff), to(#eae6ff));
        background: linear-gradient(0deg, #fff, #eae6ff 100%);
        display: flex;
        min-height: 84vh;
        align-items: center;
    }
    img {
        width: 90%;
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .main-title {
        font-size: 30px;
        font-weight: 600;
    }
    .text {
        margin-top: 0;
        margin-bottom: 1.5rem;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        color: #091e42;
    }

    .notification {
        margin-top: 43px;
        color: #056efd;
        /*color: #305ea3;*/
        font-size: 22px;
        font-weight: 700;
    }

    .auth_btn_wrapper {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        max-width: 420px;
        align-self: end;
    }

    .registration-form {
        margin: auto;
        min-height: 58px;
        width: 450px;
        padding: 10px 65px;
        display: flex;

        flex-direction: column;
    }
    .img_login {
        width: 100%;
        height: auto;
        align-content: center;
        margin-bottom: 10px;
        justify-content: center;
    }

    .title {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-bottom: 25px;
        font-family: Roboto, sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 1.18;
        color: #2f3337;
    }
    .button {
        width: 100% !important;
        height: 37px;
        margin-top: 20px;
        font-size: 17px;
        font-weight: 600;
    }

    .input {
        width: 80% !important;
        box-sizing: border-box;
    }

    .auth {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        font-size: 13px;
    }

    .link-auth {
        cursor: pointer;
        color: #056efd;
        text-decoration: underline;
    }

    .img_register {
        max-width: 130px;
        max-height: 130px;
        align-self: center;
        margin-left: 147px;

    }
</style>