<template>
	<div v-if="shown" >
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper" @click="shown = false">
					<div class="modal-container" @click.stop>

						<div class="modal-header">
							<slot name="header">
								{{dialogHeader}}
							</slot>
						</div>

						<div class="modal-body">
							<slot name="body">
								Сохранить изменения?
							</slot>
						</div>

						<div class="modal-footer">
							<slot name="footer">

								<MyButton label="Сохранить" type="submit" @click="shown = false"/>
<!--								<button class="modal-default-button" @click="shown = false">-->
<!--									OK-->
<!--								</button>-->
							</slot>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>

</template>

<script>
import MyButton from "./MyButton";

export default {
	name: "MyDialog",
	data () {
		return {
			shown: false,
		}
	},
	props: {
		dialogHeader: {
			type: String,
			default: ''
		}
	},
	methods: {
		show () {
			this.shown = true;
		}
	},
	components: {
		MyButton
	}
}
</script>

<style scoped>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 2s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 300px;
	margin: 0 auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 2s ease;
	font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

</style>
