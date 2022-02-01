<template>
    <div class="check_wrapper">
        <input class="form-check-input my_input" :class="input_class" type="checkbox" id="my_checkbox" value="" v-model="inputValue" />
        <label class="form-check-label" :class="label_class" for="my_checkbox">{{ label }}</label>
    </div>
<!--			<div class="form-check form-check-inline">-->

<!--			</div>-->
</template>

<script>
export default {
	name: "my-checkbox",
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
        input_class: {
            type: String,
        },
        label_class: {

        }

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
    .check_wrapper {
        padding-top: 20px;
        font-size: 15px;
        display: flex;
    }
    .my_input {
        margin-right: 20px;
        min-width: 15px;
        min-height: 15px;
    }
</style>
