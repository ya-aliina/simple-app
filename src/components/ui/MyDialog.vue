<template>
    <div class="dialog"  v-if="show"  @click.stop="hideDialogWithoutBtn">
        <div  @click.stop class="dialog_content" :class="class">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "my-dialog",
    mixins: [toggleMixin],
    data () {
        return {

        }
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
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    display: flex;
    overflow: hidden;
}

.dialog_content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 58px;
    padding: 20px;
    min-width: 200px;
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



/*!* start state *!*/
/*.mfp-with-anim {*/
/*    opacity: 0;*/
/*    transition: all 0.2s ease-in-out;*/
/*    transform: scale(0.8);*/
/*}*/

/*&.mfp-bg {*/
/*     opacity: 0;*/
/*     transition: all 0.3s ease-out;*/
/* }*/

/*!* animate in *!*/
/*&.mfp-ready {*/
/*.mfp-with-anim {*/
/*    opacity: 1;*/
/*    transform: scale(1);*/
/*}*/
/*&.mfp-bg {*/
/*     opacity: 0.8;*/
/* }*/
/*}*/

/*!* animate out *!*/
/*&.mfp-removing {*/

/*.mfp-with-anim {*/
/*    transform: scale(0.8);*/
/*    opacity: 0;*/
/*}*/
/*&.mfp-bg {*/
/*     opacity: 0;*/
/* }*/

/*}*/

/*}*/


</style>
