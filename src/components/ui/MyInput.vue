<template>
	<div class="row">
		<div class="col-4">
			<label for="my_input">{{ label }}</label>
		</div>
		<div class="col-8">
			<input class="form-control" type="text" id="my_input" v-model="inputValue">
		</div>
	</div>
</template>

<script>
export default {
	name: "my-input",
	data () {
		return {
			inputValue: '',
		}
	},
	props: {
		// placeholder: {
		// 	type: String,
		// 	default: '',
		// },
		modelValue: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: 'Мое поле ввода'
		}
	},
	watch: {
		modelValue: {
			handler () {
				this.inputValue = this.modelValue
			},
			immediate: true,
		},
		inputValue: {
			handler () {
				this.$emit('update:modelValue', this.inputValue)
			},
		}
	},
	created() {
	},
}
</script>

<style scoped>
.row {
	padding-top: 20px;
}
</style>
