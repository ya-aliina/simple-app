<template>
	<div data-vue-component="Header">
		<div class="header_wrapper">
			<div class="row">
				<div class="col-2 left_side">
					<div class="left_wrapper">
						<img
							class="logo"
							src="../assets/logo.png"
							alt="logo"
							@click="goTo('/')"
						>
					</div>
				</div>
				<div class="col-8 center" v-if="$store.getters['user/isAuth']">
					<div class="button_wrapper">
						<button-rectangular
							path="/"
							alt="home"
							text="Мои курсы"
							@click="goTo('/')"
							icon="icon-main"
						>
							<div class="icon"></div>
						</button-rectangular>
						<button-rectangular
							path="/knowledge_base"
							alt="files"
							text="База знаний"
							@click="goTo('/knowledge_base')"
							icon="icon-knowledge_base"
						>
						</button-rectangular>
						<button-rectangular
							path="/my_events"
							alt="events"
							text="Мои события"
							@click="goTo('/my_events')"
							icon="icon-calendar"
						>
						</button-rectangular>
					</div>
				</div>
				<div class="col-2 right_side" v-if="$store.getters['user/isAuth']">
					<div class="right_wrapper">
						<button-round
							src="./icons/message.png"
							alt="message"
						/>
						<button-round
							src="./icons/notification.png"
							alt="notification"
							@click="showDialog"
						/>
						<img
							class="avatar"
							:src="getUserPhoto()"
							alt="avatar"
							@click="goTo('/profile_settings')"
						/>
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
	data() {
		return {
			userMenu: true,
		}
	},
	components: {
		ButtonRectangular,
		ButtonRound
	},
	methods: {
		doLogout() {
			this.$store.dispatch('user/logout')
		},
		getUserPhoto () {
			if (this.$store.getters['user/userPhoto'] == null) {
				return require('../assets/avatar.svg')
			} else {
				return this.$store.getters['user/userPhoto']
			}
		}
	},
}
</script>

<style scoped>

.icon {
	height: 24px;
	width: 24px;
	background-repeat: no-repeat;
	mask-image: url('../assets/main.svg');
	background-color: red;
}
.icon:hover {
	background-color: green;
}

.active {
	transition: all .15s ease;
}

.header_wrapper {
	height: 55px;
	box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .12);
	/*background: #FFFFFF;*/
	background: rgba(245, 245, 245) 0.75;
	backdrop-filter: blur(12px);
	padding: 0 12px;
}

.row {
	height: 55px;
	display: flex;
	align-items: center;
}

.left_side {
	display: flex;
	justify-content: start;
	padding-left: 25px;
}

.right_side {
	display: flex;
	justify-content: end;
	padding-right: 25px;
}

.button_wrapper {
	display: flex;
	justify-content: space-between;
	max-width: 480px;
	margin: 0 auto;
}

.auth_btn_wrapper {
	display: flex;
	justify-content: space-between;
	max-width: 325px;
	align-self: end;
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
	border-radius: 50%;
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
	width: 34px;
	height: 34px;
}

</style>