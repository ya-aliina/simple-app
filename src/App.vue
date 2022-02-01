<template>
    <div class="wrapper">
        <Header/>
        <Main v-if="$store.getters['user/isAuth']"/>
        <MainAuth v-else />
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
import MainAuth from "@/components/MainAuth";

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

/*Main, MainAuth {*/
/*	min-height: 100vh;*/
/*}*/

Header {
	position: fixed;
}

</style>
