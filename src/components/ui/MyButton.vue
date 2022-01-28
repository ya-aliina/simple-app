<template>
	<button type="submit" class="btn btn-primary mb-2">{{label}}</button>
</template>

<script>
export default {
	name: 'MyButton',
	props: {
		label: {
			type: String,
			default: 'Наименование',
		},
		type: {
			type: String,
			default: 'submit',
		},
	},
};
</script>

<style scoped>

</style>


