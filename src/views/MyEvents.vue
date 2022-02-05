<template>
    <div data-vue-component="MyEvents">
        <cover>Мои события</cover>
        <div class="container calendar_wrapper">
            <Calendar/>
        </div>
    </div>
</template>

<script>
import Cover from "../components/Cover";
import 'v-calendar/dist/style.css';
import {Calendar, DatePicker} from 'v-calendar';
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "MyEvents",
    mixins: [toggleMixin],
    components: {
        Cover,
        Calendar,
        DatePicker,
    }
}
</script>

<style scoped>
/deep/ .cover {
    background-image: url("../assets/cover/calendar_dark.jpg");
}

/deep/ .vc-weeks {
    width: 600px;
    height: 500px;
    position: unset;
}

/deep/ .vc-day {
    position: unset;
    z-index: auto;
}

/deep/ .vc-title {
    font-size: 26px;
}

/deep/ .vc-weekday {
    text-align: center;
    font-size: 21px;
    font-weight: var(--font-bold);
    line-height: 14px;
    padding-top: 20px;
    padding-bottom: 8px;
    position: unset;
}

/deep/ .vc-pane-container {
    position: unset;

}

/deep/ .vc-day-content {
    /*display: flex;*/
    /*justify-content: center;*/
    font-size: 19px;
    width: 60px;
    height: 60px;
    line-height: 28px;
    cursor: pointer;
    position: unset;
}

/deep/ .vc-svg-icon {
    stroke-width: 3px;
}

.calendar_wrapper {
    padding: 20px;
    display: flex;
    justify-content: center;
}

</style>
