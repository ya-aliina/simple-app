<template>
	<div data-vue-component="Header">
		<div class="header_wrapper">
			<div class="row">
				<div class="col-2 left_side">
					<div class="left_wrapper" >
						<img class="logo" src="../assets/logo.png" alt="logo" @click="goTo('/')">
					</div>
				</div>
				<div class="col-8 center">
					<div class="button_wrapper" v-if="$store.getters['user/isAuth']">
						<button-rectangular path="/" src="./icons/main.png" alt="home" text="Мои курсы" @click="goTo('/')"/>
						<button-rectangular path="/add_lesson" src="./icons/add.png" alt="add_lesson" text="Добавить урок" @click="goTo('/add_lesson')"/>
						<button-rectangular path="/knowledge_base" src="./icons/files.png" alt="files" text="База знаний" @click="goTo('/knowledge_base')"/>
						<button-rectangular path="/my_events" src="./icons/calendar.png" alt="files" text="Мои события" @click="goTo('/my_events')"/>
					</div>
				</div>
				<div class="col-2 right_side">
					<div class="right_wrapper">
						<button-round src="./icons/message.png" alt="message" @click="goTo('/messages')"/>
						<button-round src="./icons/notification.png" alt="notification" @click="goTo('/notifications')"/>
						<img class="avatar" src="../assets/avatar.svg" alt="avatar" @click="goTo('/profile_settings')">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonRectangular from "./ui/ButtonRectangular";
import ButtonRound from "./ui/ButtonRound";
import toggleMixin from "@/mixins/toggleMixin";

export default {
	name: "Header",
    mixins: [toggleMixin],
    data () {
	    // return {
        //     dialogVisible: false,
        // }
    },
	components: {
		ButtonRectangular,
		ButtonRound
	},
	methods: {
		goTo(link) {
			this.$router.push(link)
		},
	}
}
</script>

<style scoped>

	.header_wrapper {
		height: 64px;
		box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .12);
		/*background: #FFFFFF;*/
		background: rgba(245, 245, 245),0.75);
		backdrop-filter: blur(12px);
		padding: 0 12px;
	}

	.row {
		height: 64px;
		display: flex;
		align-items: center;
	}

	.left_side {
		display: flex;
		justify-content: start;
		padding-left: 25px;
	}

	.center {
	}

	.right_side {
		display: flex;
		justify-content: end;
		padding-right: 25px;
	}

	.button_wrapper {
		display: flex;
		justify-content: space-between;
		max-width: 650px;
		margin: 0 auto;
	}

	.logo {
		cursor: pointer;
		box-sizing: border-box;
		width: auto;
		height: auto;
		max-height: 50px;
	}
	.avatar {
		cursor: pointer;
	}

	.left_wrapper {
		display: flex;
	}

	.right_wrapper {
		display: flex;
		width: 145px;
		justify-content: space-between;
	}

	.avatar {
		width: 36px;
		height: 36px;
	}

	.active {
		border-bottom: 4px solid #3CB46E;
	}
</style>
