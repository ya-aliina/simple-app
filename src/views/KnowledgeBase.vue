<template>
	<div data-vue-component="KnowledgeBase">
        <cover>База знаний</cover>
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
	background-image: url("../assets/cover/knowledge_base_dark.jpg");
}
</style>
