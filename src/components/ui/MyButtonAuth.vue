<template>
<button class="butn" :class="class"><slot class="text"></slot></button>
</template>

<script>
export default {
    name: "my-button-auth",
    props: {
        class: {
            type: String
        }
    }
}
</script>

<style scoped>
.butn {
    /*background: #fff;*/
    /*border: 2px solid #555;*/
    background: #056efd;
    border: 2px solid #056efd;
    border-radius: 30px;
    box-sizing: border-box;
    /*color: #555;*/
    color: #ffffff;
    display: inline-block;
    font: 600 20px Roboto,tahoma,arial;
    line-height: 1.286;
    padding: 16px 37px;
    position: relative;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    transition: all .15s ease

}

.butn:hover, .active {
    /*background: #056efd;*/
    /*border: 2px solid #056efd;*/
    /*color: #ffffff;*/
    transition: all .15s ease;
    box-shadow: 0px 0px 25px 0px #056efd;
}


</style>