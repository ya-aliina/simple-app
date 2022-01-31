<template>
	<button type="submit" class="btn btn-primary" :class="class">
        <slot></slot>
    </button>
</template>

<script>
export default {
	name: 'my-button',
	props: {
		label: {
			type: String,
			default: 'Наименование',
		},
		type: {
			type: String,
			default: 'submit',
		},
        class: {
            type: String,
            default: 'submit',
        },
	},
};
</script>

<style scoped>

</style>


