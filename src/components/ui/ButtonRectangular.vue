<template>
	<div data-vue-component="ButtonRectangular">
		<div class="button_rectangular" :class="{ active: isActive(activePath) }" >
			<img class="icon" :src="src" :alt="alt">
			<div class="text">{{ text }}</div>
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
                default: './icons/add.png'
            },
            alt: {
                type: String,
                default: 'icon'
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
	.button_rectangular {
		display: flex;
		cursor: pointer;
		align-items: center;
		padding: 0 7px;
		height: 55px;
		border: 4px solid #ffffff;
		transition: all .15s ease;
		/*height: 60px;*/
	}

	.button_rectangular:hover,
	.active {
		border-bottom: 4px solid #3CB46E;
		transition: all .15s ease;
	}

	/*.button_rectangular:hover {*/
	/*	background: rgba(50,53,55,.06);*/
	/*	border-radius: 6px;*/
	/*	transition: all .15s ease;*/
	/*}*/

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
	}

	.text:hover {
		color: #42484E;
	}
</style>

