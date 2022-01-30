<template>
	<div>
		<div class="form-check">
			<div
				v-for="item in options"
				:key="item"
			>
				<input class="form-check-input" type="radio" name="flexRadioDefault" :id="item" :value="item" v-model="picked">
				<label class="form-check-label" :for="item">
					{{ item }}
				</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "my-radio",
	data () {
		return {
			picked: '',
		}

	},
	props: {
		options: {
			type: Array,
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

