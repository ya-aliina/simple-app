<template>
    <div class="wrapper">
        <Header/>
        <Main/>
<!--        <Main v-if="$store.getters['user/isAuth']"/>-->
<!--        <MainAuth v-else />-->
        <Footer/>
    </div>
<!--    <div v-else>-->
<!--        <MainAuth/>-->
<!--    </div>-->
</template>

<script>

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import MainAuth from "@/views/MainAuth";

export default {
	components: {
	    Header,
        Main,
        Footer,
        MainAuth,
    },
}
</script>

<style>
Header {

}
Main {

}
Footer{

}
</style>
