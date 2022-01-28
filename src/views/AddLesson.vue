<template>
	<div data-vue-component="AddLesson">
		<Cover text="Добавить урок"/>
	</div>
</template>

<script>
import Cover from "../components/Cover";

export default {
	name: "AddLesson",
	components: {
		Cover
	}
}
</script>

<style scoped>
/deep/ .cover {
	background-image: url("../assets/cover/add_lesson.jpg");
}
</style>
