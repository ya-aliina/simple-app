<template>
    <div data-vue-component="Header">
        <div class="header_wrapper">
            <div class="row">
                <div class="col-2 left_side">
                    <div class="left_wrapper">
                        <img class="logo" src="../assets/logo.png" alt="logo" @click="goTo('/')">
                    </div>
                </div>

                <div class="col-8 center" v-if="$store.getters['user/isAuth']">
                    <div class="button_wrapper">
                        <button-rectangular path="/" src="./icons/main.png" alt="home" text="Мои курсы"
                                            @click="goTo('/')"/>
                        <button-rectangular path="/add_lesson" src="./icons/add.png" alt="add_lesson"
                                            text="Добавить урок" @click="goTo('/add_lesson')"/>
                        <button-rectangular path="/knowledge_base" src="./icons/files.png" alt="files"
                                            text="База знаний" @click="goTo('/knowledge_base')"/>
                        <button-rectangular path="/my_events" src="./icons/calendar.png" alt="files" text="Мои события"
                                            @click="goTo('/my_events')"/>
                    </div>
                </div>
                <div class="col-2 right_side" v-if="$store.getters['user/isAuth']">
                    <div class="right_wrapper">
                        <button-round src="./icons/message.png" alt="message" @click="doLogout"/>
                        <button-round src="./icons/notification.png" alt="notification" @click="showDialog"/>
                        <!--                        <img class="avatar" src="../assets/avatar.svg" alt="avatar" @click="goTo('/profile_settings')"/>-->
                        <!--TODO делаем меню-->
                        <div class="auth_btn_wrapper">
                            <my-button-auth @click="showDialog" >Авторизоваться</my-button-auth>
                        </div>
                        <my-dialog v-model:show="dialogVisible" v-model:class="animation">

                                <div>Сохранить изменения?</div>
                                <my-button @click="hideDialog">Сохранить</my-button>

                        </my-dialog>



                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonRectangular from "./ui/ButtonRectangular";
import ButtonRound from "./ui/ButtonRound";
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "Header",
    mixins: [toggleMixin],
    data() {
        return {
            userMenu: true,
        }
    },
    components: {
        ButtonRectangular,
        ButtonRound
    },
    methods: {
        goTo(link) {
            this.$router.push(link)
        },
        doLogout() {
            this.$store.dispatch('user/logout')
        },
        showUserMenu () {
            this.userMenu = true;
        },
        hideUserMenu () {
            this.userMenu = false;
        }
    },

}
</script>

<style scoped>

.header_wrapper {
    height: 64px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .12);
    /*background: #FFFFFF;*/
    background: rgba(245, 245, 245), 0.75;
    backdrop-filter: blur(12px);
    padding: 0 12px;
}

.row {
    height: 64px;
    display: flex;
    align-items: center;
}

.left_side {
    display: flex;
    justify-content: start;
    padding-left: 25px;
}

.center {
}

.right_side {
    display: flex;
    justify-content: end;
    padding-right: 25px;
}

.button_wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 650px;
    margin: 0 auto;
}

.auth_btn_wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 325px;
    align-self: end;
}

.logo {
    cursor: pointer;
    box-sizing: border-box;
    width: auto;
    height: auto;
    max-height: 50px;
}

.avatar {
    cursor: pointer;
}

.left_wrapper {
    display: flex;
}

.right_wrapper {
    display: flex;
    width: 145px;
    justify-content: space-between;
}

.avatar {
    width: 36px;
    height: 36px;
}

.active {
    border-bottom: 4px solid #3CB46E;
}

.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1;}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover .dropbtn {background-color: #3e8e41;}

</style>
