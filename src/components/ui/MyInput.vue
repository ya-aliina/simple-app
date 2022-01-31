<template>
	<div class="row">

<!--			<label for="my_input">{{ label }}</label>-->

			<input class="form-control"
                   :class="class"
                   :type="type"
                   :placeholder="placeholder"
                   :id="id"
                   v-model="inputValue">
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
		},
        type: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        class: {
            type: String,
        },
        id: {
            type: String,
        },
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
