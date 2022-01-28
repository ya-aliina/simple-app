<template>
	<div data-vue-component="CourseForm">
		<Cover/>
		<div class="container">
			<div class="row">
				<div class="col">
					<div>
						Курс {{$route.params.id}}
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
import Cover from "../components/Cover";

export default {
	name: 'CourseForm',
	components: {
		Cover,
	},
}
</script>

<style scoped>
/deep/ .cover {
	background-image: url("../assets/cover/the_course.jpg");
}
</style>
