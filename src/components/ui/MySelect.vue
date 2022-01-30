<template>

		<select  class="form-select" aria-label="item" v-model="picked">

				<option v-for="item in options"
						:key="item" :value="item" >{{ item }}</option>

		</select>


</template>

<script>
export default {
	name: "MySelect",
	data () {
		return {
			picked: '',
		}

	},
	props: {
		options: {
			type: Array
		},
		selected: {
			type: String,
		}
	},
	watch: {
		picked () {
			this.$emit('update:selected', this.picked)
		},
		selected () {
			this.picked = this.selected;
		}
	},
}
</script>

<style scoped>

</style>
