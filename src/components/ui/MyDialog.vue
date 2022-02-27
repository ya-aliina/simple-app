<template>
    <div class="dialog" v-if="show" @click.stop="hideDialogWithoutBtn">
        <div class="dialog_body">
            <div @click.stop class="dialog_content" :class="class">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "my-dialog",
    mixins: [toggleMixin],
    data() {
        return {}
    },
    props: {
        class: {
            type: String,
        }
    }
}
</script>

<style scoped>
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background: rgba(0, 0, 0, 0.39);
    backdrop-filter: blur(1px);
}

.dialog_content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 58px;
    padding: 20px;
    min-width: 200px;
}

.dialog_body {
    min-height: 100%;
    display: flex;
    align-items: center;
}

.animate_in {
    -webkit-animation: animatezoom_in 0.6s;
    animation: animatezoom_in 0.6s
}

@-webkit-keyframes animatezoom_in {
	from {-webkit-transform: scale(0)}
	to {-webkit-transform: scale(1)}
}
@keyframes animatezoom_in {
	from {transform: scale(0)}
	to {transform: scale(1)}
}
.animate_out {
	-webkit-animation: animatezoom_out 0.6s;
	animation: animatezoom_out 0.6s
}
@-webkit-keyframes animatezoom_out {
	from {-webkit-transform: scale(1)}
	to {-webkit-transform: scale(0)}
}
@keyframes animatezoom_out {
	from {transform: scale(1)}
	to {transform: scale(0)}
}
</style>
