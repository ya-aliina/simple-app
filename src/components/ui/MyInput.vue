<template>
    <div class="row">
        <div class="my_input_wrapper">
<!--            <label for="id">{{label}}</label>-->
            <input class="form-control"
                   :class="class"
                   :type="type"
                   :placeholder="placeholder"
                   :id="id"
                   v-model="inputValue"
            >
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
.my_input_wrapper {
    display: flex;
	padding-top: 20px;
    background: white;
}
</style>
