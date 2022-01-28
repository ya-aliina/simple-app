<template>
	<Header/>
	<Main/>
	<Footer/>

</template>

<script>

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
	components: {Header, Main, Footer},
}
</script>

<style>
Main {
	min-height: 100vh;
}

Header {
	position: fixed;
}

</style>
