<template>
	<label class="col-4" for="exampleFormControlTextarea1">
        <slot></slot>
    </label>
	<textarea
        class="form-control col-8"
        id="exampleFormControlTextarea1"
        :placeholder="placeholder"
        :rows="rows"
        v-model="inputValue"></textarea>
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
		},
		rows: {
			type: String,
		},
        placeholder: {
            type: String,
            default: null,
        },
	},
	watch: {
		modelValue: {
		    handler() {
                this.inputValue = this.modelValue;
            },
            immediate: true,
		},
		inputValue () {
			this.$emit('update:modelValue', this.inputValue);
		},
	},
}

</script>

<style scoped>

</style>



