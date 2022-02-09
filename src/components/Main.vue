<template>
	<div data-vue-component="Main" class="wrapper">
		<router-view/>
	</div>
</template>

<script>
import Cover from "./Cover";
import toggleMixin from "@/mixins/toggleMixin";

export default {
	name: "Main",
    mixins: [toggleMixin],
	components: {
		Cover
	},
}
</script>

<style scoped>
.wrapper {
	background: #f1f4f6;
    min-height: 81vh;
}

</style>
