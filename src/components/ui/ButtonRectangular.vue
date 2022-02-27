<template>
	<div data-vue-component="ButtonRectangular" class="button_rectangular_wrapper" :class="{active: isActive(activePath)}">
		<div class="button_rectangular" >
<!--			<slot class="icon"></slot>-->
			<!-- <img class="icon" :src="src" :alt="alt"> -->
			<div class="text" :class="icon"> {{text}} </div>
		</div>
	</div>
</template>

<script>
export default {
	name: "button-rectangular",
	data () {
		return {
			activePath: '/',
		}
	},
	props: {
		src: {
			type: String,
		},
		alt: {
			type: String,
			default: 'icon'
		},
		icon: {
			type: String,
		},
		text: {
			type: String,
			default: 'Новая кнопка'
		},
		path: {
			type: String,
		}
	},
	methods: {
		isActive(activePath) {
			if (activePath === this.path) {
				return true
			} return false
		},
	},
	watch: {
		$route () {
			this.activePath = this.$route.path;
		}
	},
}
</script>

<style scoped>
.button_rectangular_wrapper {
	display: flex;
	flex-direction: column;
	height: 55px;
}
.button_rectangular {
	display: flex;
	cursor: pointer;
	align-items: center;
	padding: 0 7px;
	height: 55px;
	transition: all .15s ease;
}
.button_rectangular:hover,
.active {
	color: #42484E;
	transition: all .15s ease;
}
.button_rectangular_wrapper::after {
	content: " ";
	width: 100%;
	height: 4px;
	background-color: transparent;
	border-radius: 100px 100px 0 0;
}
.button_rectangular_wrapper:hover::after {
	content: " ";
	width: 100%;
	height: 4px;
	background-color: #3CB46E;
	border-radius: 100px 100px 0 0;
}
.active::after {
	content: " ";
	width: 100%;
	height: 4px;
	background-color: #3CB46E;
	border-radius: 100px 100px 0 0;
}
/*.button_rectangular:hover {*/
/*	background: rgba(50,53,55,.06);*/
/*	border-radius: 6px;*/
/*	transition: all .15s ease;*/

.icon {
	width: 20px;
	height: 20px;
	margin-right: 8px;
}
.text {
	font-family: Roboto,sans-serif;
	font-size: 15px;
	font-weight: 500;
	color: #42484EB8;
	display: flex;
	margin-bottom: -4px;
}
.button_rectangular_wrapper:hover>.button_rectangular>.text,
.active>.button_rectangular>.text {
	color: #42484E;
}
</style>
