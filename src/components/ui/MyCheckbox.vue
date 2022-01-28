<template>
		<div class="col wrapper">
<!--			<div class="form-check form-check-inline">-->
				<input class="form-check-input" type="checkbox" id="my_checkbox" value="" v-model="inputValue" />
				<label class="form-check-label" for="my_checkbox">{{ label }}</label>
<!--			</div>-->
		</div>
</template>

<script>
export default {
	name: "MyCheckbox",
	data () {
		return {
			inputValue: '',
		};
	},
	props: {

		modelValue: {
			type: Boolean,
			default: null,
		},
		label: {
			type: String,
			default: null,
		},
	},
	watch: {
		modelValue () {
			this.inputValue = this.modelValue;
		},
		inputValue () {
			this.$emit('update:modelValue', this.inputValue);
		},
	},
}
</script>

<style scoped>
.wrapper {
	padding-top: 20px;
}
</style>
