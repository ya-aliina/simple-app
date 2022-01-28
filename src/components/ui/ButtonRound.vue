<template>
  <div data-vue-component="ButtonRound">
	  <div class="user_notification_item">
		  <img :src="src" :alt="alt">
	  </div>
  </div>
</template>

<script>
export default {
	name: "ButtonRound",
	props: {
		src: {
			type: String,
			default: './icons/add.png'
		},
		alt: {
			type: String,
			default: 'icon'
		},
	}
}
</script>

<style scoped>
.user_notification_item img {
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	justify-content: center;
}

.user_notification_item {
	cursor: pointer;
	display: flex;
	width: 36px;
	height: 36px;
	justify-content: center;
	align-items: center;
	background: rgba(66, 72, 78, 0.08);
	border-radius: 50%;
}

.user_notification_item:hover {
	background: rgba(66, 72, 78, 0.24);
	transition: all .15s ease
}

</style>
