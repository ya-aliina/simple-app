<template>
	<div data-vue-component="MainPage">
		<cover text="Мои курсы"/>
		<div class="wrapper">
			<div class="container">
				<div class="row">
					<div class="col-6 course_item_wrapper"
						 v-for = "course in courseArray"
						 :key = "course.id"
					>
						<router-link :to="`/${course.name}/${course.id}`" class="router">
							<div class="course_item">
								<img :src="getImgUrl(course.img)" alt="course_cover" class="course_cover">
								<div>{{course.title}}</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Cover from "../components/Cover";

export default {
	name: "MainPage",
	components: {
		Cover
	},
	methods: {
		getImgUrl(picName) {
			if (picName !== '') {
				return require('../assets/' + picName);
			}
 			return require('../assets/courses.png');
		},
	},
	data () {
		return {
			courseArray: [
				{
					id: 1,
                    name:'business_english',
					title: 'Business English',
					img: '',
				},
				{
					id: 2,
                    name:'excel_basic_course',
					title: 'Excel. Базовый курс',
					img: '',
				},
				{
					id: 3,
                    name:'power_point_basic_course',
					title: 'PowerPoint. Базовый курс',
					img: '',
				},
			]
		}
	}
}
</script>

<style scoped>
/deep/ .cover {
	 background-image: url("../assets/cover/courses_dark.jpg");
}

.wrapper {
	background: #f1f4f6;
	padding-bottom: 30px;
}

.course_item_wrapper {
	margin-top: 30px;
}

.course_item {
	cursor: pointer;
	display: flex;
	padding: 28px;
	border-radius: 6px;
	background: #fff;
	box-shadow: 0 1px 4px rgba(66,72,78,.12);
	text-decoration: none;
	transition: all 0.5s 0s ease;
}

.course_item:hover {
	transition: all 0.5s 0s ease;
	transform: scale(1.04)
	/*transform: translate(0px, -10px);*/
}

.course_item div {
	padding-left: 20px;
	font-size: 20px;
	font-weight: 500;
	color: #42484e;
	text-decoration: none;
}


.course_cover {
	border-radius: 4px;
	width: 40%;
	height: auto;
}

.router {
	text-decoration: none;
}

.router:hover {
	transition: all 0.5s 0s ease;
	transform: translate(0px, -23px);
}

</style>
