<template>
	<button type="submit" class="btn" :class="class">
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
button {
    margin-top: 20px;
    margin-left: 0 !important;
    margin-right: 0 !important;
}

</style>


