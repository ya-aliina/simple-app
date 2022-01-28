<template>
	<div data-vue-component="MyEvents">
		<Cover text="Мои события"/>
	</div>
</template>

<script>
import Cover from "../components/Cover";

export default {
	name: "MyEvents",
	components: {
		Cover
	}
}
</script>

<style scoped>
/deep/ .cover {
	background-image: url("../assets/cover/calendar.jpg");
}
</style>
