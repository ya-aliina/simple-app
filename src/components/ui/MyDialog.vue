<template>
    <div class="dialog" v-if="show"  @click.stop="hideDialog1">
        <div  @click.stop class="dialog_content animate">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "my-dialog",
    mixins: [toggleMixin],
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog_content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 58px;
    win-width: 200px;
    padding: 20px;
}

.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
}

@keyframes animatezoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
}

</style>
