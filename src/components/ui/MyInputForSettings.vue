<template>
	<div class="wrapper">
			<label for="id">
                <slot class="text"></slot>
            </label>
			<input class="form-control"
                   :class="class"
                   :type="type"
                   :placeholder="placeholder"
                   :id="id"
                   v-model="inputValue"
            >
	</div>
</template>

<script>
export default {
	name: "my-input-for-settings",
	data () {
		return {
			inputValue: '',
		}
	},
	props: {
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
.wrapper {
	padding-top: 20px;
    display: flex;
}

label {
    display: flex;
    align-items: center;
    font-size: 15px;
    width: 150px;
}

input {
    max-width: 360px;
}

</style>
