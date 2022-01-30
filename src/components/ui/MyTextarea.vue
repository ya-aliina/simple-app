<template>
<div class="row">
	<label class="col-4" for="exampleFormControlTextarea1">{{label}}</label>
	<textarea class="form-control col-8" id="exampleFormControlTextarea1" :rows="rows" v-model="inputValue"></textarea>
</div>

</template>

<script>

export default {
	name: "my-textarea",
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
		rows: {
			type: String,
			default: '6',
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



