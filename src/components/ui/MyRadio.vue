<template>
	<div class="form-check">
		<input class="form-check-input" type="radio" name="exampleRadios" id="my_radio" :value="value" v-model="inputValue" />
		<label class="form-check-label" for="my_radio">
			{{label}}
		</label>
	</div>
</template>

<script>
export default {
	name: "MyRadio",
	data () {
		return {
			inputValue: '',
		};
	},
	props: {
		modelValue: {
			type: String,
			default: null,
		},
		label: {
			type: String,
			default: null,
		},
		value: {
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

</style>

