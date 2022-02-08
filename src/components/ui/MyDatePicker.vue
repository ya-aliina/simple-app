<template v-slot="{ inputValue, inputEvents }">
    <input
        class="bg-white border px-2 py-1 rounded"
        :value="inputValue"
        v-on="inputEvents"
    />
</template>

<script>
export default {
    name: "my-date-picker",
    data() {
        return {
            date: new Date(),
        };
    }
}
</script>

<style scoped>

</style>