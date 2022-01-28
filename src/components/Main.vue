<template>
	<div data-vue-component="Main" class="wrapper">
		<router-view/>
	</div>
</template>

<script>
import Cover from "./Cover";

export default {
	name: "Main",
	components: {
		Cover
	}
}
</script>

<style scoped>
.wrapper {
	background: #f1f4f6;
	padding-bottom: 30px;

}



</style>
