<template>
    <div class="container">
        <div class="registration-form">
            <img src="../assets/login.png" alt="" class="img">
            <div class="title">Добро пожаловать Simple!</div>
            <my-input placeholder="Укажите логин" v-model="login" id="login" type="text" class="form-control-lg input"/>
            <my-input placeholder="Введите пароль" v-model="password" id="password" type="password" class="form-control-lg input"/>
            <my-button class="button" @click="onAuthClick">Войти</my-button>
        </div>
    </div>
</template>

<script>

export default {
    name: "notifications",
    data () {
        return {
            login: '',
            password: '',
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
                } else if (status === 'error') {
                    alert ('Ошибка авторизации')
                }
            });
        },
    },
}
</script>

<style scoped>
.container {
    position: relative;
    height: 81vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
}

.registration-form {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 58px;
    width: 544px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(66, 72, 78, .16);
    padding: 56px 72px 45px;


}
.img {
    width: 60%;
    height: auto;
    align-content: center;
    margin-bottom: 40px;
    justify-content: center;
    margin-left: 78px;
}

.title {
    margin-left: 25px;
    margin-bottom: 25px;
    font-family: Roboto, sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.18;
    color: #2f3337;
}
.button {
    width: 100% !important;
    height: 60px;
    margin-top: 20px;
    font-size: 22px;
    /*font-weight: 700;*/
}

.input {
    width: 80% !important;
    box-sizing: border-box;
}
</style>