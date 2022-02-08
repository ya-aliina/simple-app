<template>
    <div data-vue-component="MyEvents">
        <cover>Мои события</cover>
        <div class="container calendar_wrapper">
            <div class="row">
                <div class="col-6">
                    <div class="calendar">
                        <date-picker
                            is-expanded
                            :attributes='attributes'
                            color="green"
                            v-model='todayActive'/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="calendar_form">
                        <div>Добавить событие</div>
                        <div class="calendar">
                            <date-picker

                                mode="dateTime"
                                v-model="newDate"
                                is-expanded
                                :attributes='attributes'
                                color="green"/>
                        </div>
                        <div>Дата {{newDate}}</div>
                        <my-input placeholder="Название события" v-model="newEvent"/>
                        <my-input placeholder="Добавьте описание" v-model="newEventDescription"/>
                        <my-button  @click="addNewEvent"  class="btn-primary">Добавить</my-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container calendar_wrapper">
            <div v-for="todo in todos" :key="todo.id">
                <div>{{todo.description}}</div>
                <div>{{getEventDate(todo.date)}}</div>
            </div>

        </div>
    </div>
</template>

<script>
import Cover from "../components/Cover";
import MyDatePicker from "../components/ui/MyDatePicker";
import {Calendar, DatePicker} from 'v-calendar';
import 'v-calendar/dist/style.css';

import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "MyEvents",
    mixins: [toggleMixin],
    components: {
        Cover,
        Calendar,
        DatePicker,

    },
    data() {
        let todos = [];
        return {
            todayActive: new Date(),
            date: new Date(),
            incId: todos.length,
            newEvent: '',
            newDate: new Date(),
            eventArray: todos,
            newEventDescription: '',
        };

    },
    methods: {
        addNewEvent() {
            let date = this.newDate
            console.log(date)
            this.$store.dispatch("calendar/createEvent", {
                color: 'red',
                date: Date.parse(date),
                description: this.newEvent,
                fullDescription: this.newEventDescription,
                isComplete: false,
            });
            this. getEvents();
        },
        getEvents() {
            this.todos = this.$store.getters["calendar/all"]
            console.log(this.todos)
        },
        getEventDate(date) {
            date = new Date(date)
            let yy = date.getFullYear();
            let mm = date.getMonth();
            let dd = date.getDate()
            let hours = date.getHours();
            let minutes = date.getMinutes();
            if (mm < 10) {
                mm = `0${mm}`
            }
            if (dd < 10) {
                dd = `0${dd}`
            }
            if (hours < 10) {
                hours = `0${hours}`
            }
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            return `Время ${hours}:${minutes} Дата: ${dd}.${mm}.${yy}г `
        }
    },
    computed: {
        attributes() {
            this.todos = this.$store.getters["calendar/all"]
            return [
                ...this.todos.map(todo => ({
                    dates: todo.date,
                    dot: {
                        color: todo.color,
                        class: todo.isComplete ? 'opacity-75' : '',
                    },
                    popover: {
                        label: todo.description,
                    },
                    customData: todo,
                })),
            ];
        },
    },


}
</script>

<style scoped>
/deep/ .cover {
    background-image: url("../assets/cover/calendar_dark.jpg");
}
.calendar_wrapper {
    margin-top: 30px;
}
.calendar {
    max-width: 450px;
}
.calendar_form {
    /*max-width: 450px;*/
    color: #1a202c;
    background-color: #ffffff;;
    border: 1px solid #cbd5e0;
    border-radius: .5rem;
    height: 100%;
}


</style>


