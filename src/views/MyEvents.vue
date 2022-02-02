<template>
	<div data-vue-component="MyEvents">
		<cover text="Мои события"/>
            <div class="container calendar_wrapper">
                <Calendar/>
            </div>

	</div>
</template>

<script>
import Cover from "../components/Cover";
import 'v-calendar/dist/style.css';
import { Calendar } from 'v-calendar';

export default {
	name: "MyEvents",
	components: {
		Cover,
        Calendar,
	}
}
</script>

<style scoped>
/deep/ .cover {
	background-image: url("../assets/cover/calendar_dark.jpg");
}

/deep/ .vc-container {
    position: unset;
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

/deep/.vc-weekday {
    text-align: center;
    font-size: 21px;
    font-weight: var(--font-bold);
    line-height: 14px;
    padding-top: 20px;
    padding-bottom: 8px;
    cursor: default;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    position: unset;
}

/deep/ .vc-pane-container {
    /*position: unset;*/

}

/deep/ .vc-day-content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    font-weight: var(--font-medium);
    width: 60px;
    height: 60px;
    line-height: 28px;
    border-radius: var(--rounded-full);
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
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
