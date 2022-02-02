<template>
    <div class=" cover">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="text_wrapper">
                        <div class="text">{{ text }}</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cover",
    props: {
        text: {
            type: String,
            default: 'Заголовок'
        }
    }

}
</script>

<style scoped>
.cover {
    height: 160px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    /*filter: brightness(50%);*/
}

/*.cover:before {*/
/*	!*position: absolute;*!*/
/*	width: 100%;*/
/*	height: 100%;*/
/*	content: "";*/
/*	background-image: linear-gradient(270deg, rgba(0, 0, 0, .5) 100%, rgba(0, 0, 0, .9) 0, #000 0);*/
/*    z-index: 2000;*/
/*}*/

.text_wrapper {
    display: flex;
    align-items: flex-end;
    height: 160px;
    top: 0;
    z-index: 2500;

}

.text {
    font-family: Roboto, sans-serif;
    font-size: 36px;
    font-weight: 500;
    padding: 0 30px 46px;
    color: #fff;
    text-shadow: 0 0 3px rgb(0 0 0/30%);
}
</style>
