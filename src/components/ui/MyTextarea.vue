<template>
	<div class="col-8">
		<label for="exampleFormControlTextarea1">{{label}}</label>
		<textarea class="form-control" id="exampleFormControlTextarea1" :rows="rows" v-model="inputValue"></textarea>
	</div>
</template>

<script>

export default {
	name: "MyTextarea",
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
			type: Number,
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



