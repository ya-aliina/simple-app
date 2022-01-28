<template>
	<div data-vue-component="KnowledgeBase">
		<Cover text="База знаний"/>
	</div>
</template>

<script>
import Cover from "../components/Cover";

export default {
	name: "KnowledgeBase",
	components: {
		Cover
	}
}
</script>

<style scoped>
/deep/ .cover {
	background-image: url("../assets/cover/knowledge_base.jpg");
}
</style>
