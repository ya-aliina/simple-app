<template>
    <div data-vue-component="MyEvents">
        <cover>Мои события</cover>
        <div class="container add_event_icon_wrapper">
            <img v-if="editFormCalendar === 'false'" @click="openEditFormCalendar" class="add_event_icon" src="../assets/add_icon.png" alt="">
            <img v-if="editFormCalendar === 'true'" @click="closeEditFormCalendar" class="add_event_icon" src="../assets/done.png" alt="">
        </div>
        <div v-if="editFormCalendar === 'false'" class="container  calendar_wrapper ">
            <div class="row">
                <div class="col">
                    <div class="calendar">
                        <date-picker
                            is-expanded
                            :attributes='attributes'
                            color="green"
                            v-model='todayActive'/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div v-if="editFormCalendar === 'true'" class="calendar_form_wrapper">
                        <div class="calendar_editor_title">Добавить событие</div>
                        <div class="calendar">
                            <date-picker
                                mode="dateTime"
                                v-model="newDate"
                                is-expanded
                                :attributes='attributes'
                                color="green"/>
                        </div>
                        <div class="calendar_form">
                            <my-input placeholder="Название события" v-model="newEvent"/>
                            <my-input placeholder="Добавьте описание" v-model="newEventDescription"/>
                            <my-button v-if="this.editorBtnVisible === 'true'" @click="doUpdateEvent(this.eventId)" class="btn-primary">Обновить</my-button>
                            <my-button v-if="this.editorBtnVisible === 'false'" @click="addNewEvent" class="btn-primary">Добавить</my-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--========================Перечень событий=============================-->
        <div class="container calendar_wrapper">
            <div v-for="todo in todos" :key="todo.id">
                <div class="event_items_wrapper">
                    <div class="event_item">
                        <div class="event_item_title">Дата</div>
                        <div>{{ getEventDate(todo.date) }}</div>

                        <!--                        =========================Редактор===================================-->
                        <div class="event_actions_nav">
                            <img @click="openEditEvent(todo.id, todo.date, todo.description, todo.fullDescription )"
                                 src="../assets/edit.png" alt=""
                                 class="event_action_img">
                            <img v-if="editFormCalendar === 'true'" @click="openDeleteEvent(todo.id)"
                                 src="../assets/delete.png" alt=""
                                 class="event_action_img">
                        </div>
                    </div>
                    <div class="event_item">
                        <div class="event_item_title">Время</div>
                        <div>{{ getEventTime(todo.date) }}</div>
                    </div>
                    <div class="event_item">
                        <div class="event_item_title">Событие</div>
                        <div>{{ todo.description }}</div>
                    </div>
                    <div class="event_item">
                        <div class="event_item_title">Описание</div>
                        <div>{{ todo.fullDescription }}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!--    ====================Модалка удаления===========================-->
    <my-dialog v-model:show="dialogVisible" v-model:class="animation">
        <div class="modal_content_wrapper">
            <div>Вы действительно хотите удалить событие?</div>
            <div class="modal_btns_wrap">
                <my-button class="btn-primary add_lesson_form_btn" @click="doDelete(this.eventId)">
                    Удалить
                </my-button>
                <my-button class="btn-primary add_lesson_form_btn" @click="hideDialog">
                    Отмена
                </my-button>
            </div>
        </div>
    </my-dialog>


</template>

<script>
import Cover from "../components/Cover";
// import MyDatePicker from "../components/ui/MyDatePicker";
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
            user: this.$store.getters['user/userEmail'],
            todayActive: new Date(),
            date: new Date(),
            incId: todos.length,
            eventId: '',
            newEvent: '',
            newDate: new Date(),
            eventArray: todos,
            newEventDescription: '',
            editorBtnVisible: 'false',
            editFormCalendar: 'false'
        };
    },
    methods: {
        getEvents() {
            this.todos = this.$store.getters["calendar/calendarByUser"](this.user);
            console.log(this.todos)
        },
        getEventDate(date) {
            date = new Date(date)
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate()
            if (month < 10) {
                month = `0${month}`
            }
            if (day < 10) {
                day = `0${day}`
            }
            return `${day}.${month}.${year}г`
        },
        getEventTime(date) {
            date = new Date(date)
            let hours = date.getHours();
            let minutes = date.getMinutes();
            if (hours < 10) {
                hours = `0${hours}`
            }
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            return `${hours}:${minutes}`
        },
        addNewEvent() {
            let date = this.newDate
            this.$store.dispatch("calendar/createEvent", {
                color: 'red',
                user: this.user,
                date: Date.parse(date),
                description: this.newEvent,
                fullDescription: this.newEventDescription,
                isComplete: false,
            });
            this.doClearFields()
            this.getEvents();
        },
        doUpdateEvent(id) {
            let date = this.newDate
            this.$store.dispatch("calendar/updateEvent", {
                id: id,
                color: 'red',
                user: this.user,
                date: Date.parse(date),
                description: this.newEvent,
                fullDescription: this.newEventDescription,
                isComplete: false,
            });
            this.doClearFields()
            this.editorBtnVisible = 'false'
        },
        doClearFields() {
            this.newDate = new Date();
            this.newEvent = '';
            this.newEventDescription = ''
        },
        doDelete(id) {
            console.log(id)
            this.$store.dispatch('calendar/deleteEvent', id);

            this.hideDialog();
        },
        openEditEvent(id, date, event, description) {
            this.editorBtnVisible = 'true'
            this.eventId = id;
            this.newDate = date;
            this.newEvent = event;
            this.newEventDescription = description;
            this.editFormCalendar = 'true'
        },
        openEditFormCalendar() {
            this.editFormCalendar = 'true'
        },
        closeEditFormCalendar() {
            this.editFormCalendar = 'false'
        },
        openDeleteEvent(id) {
            this.eventId = id;
            console.log(id)
            this.showDialog();
        },
    },
    computed: {
        attributes() {
            this.todos = this.$store.getters["calendar/calendarByUser"](this.user)
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
.calendar_editor_title{
    margin: 0 auto;
}
.add_event_icon {
    margin-right: 200px;
    cursor: pointer;
}
.add_event_icon_wrapper {
    display: flex;
    justify-content: end;
}
.add_event_icon {
    width: 45px
}
.modal_btns_wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.modal_content_wrapper {
    max-width: 250px;
}

.event_action_img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    cursor: pointer;
}

.event_actions_nav {
    display: flex;
    justify-content: end;
    width: 100%;
}

.event_item {
    display: flex;
    margin: 2px 0;
}

.event_items_wrapper {
    /*max-width: 450px;*/
    color: #1a202c;
    background-color: #ffffff;;
    border: 1px solid #cbd5e0;
    border-radius: .5rem;
    height: 100%;
    padding: 20px;
    margin-top: 10px;
}

.event_item_title {
    color: #38a169;
    font-weight: 600;
    margin-right: 20px;
    min-width: 80px;
}

.calendar_wrapper {
    margin-top: 30px;
}

.calendar {
    max-width: 450px;
    margin: 0 auto;
}
.calendar_form_wrapper {}
.calendar_form {
    max-width: 450px;
    margin: 0 auto;
    /*color: #1a202c;*/
    /*background-color: #ffffff;;*/
    /*border: 1px solid #cbd5e0;*/
    /*border-radius: .5rem;*/
    height: 100%;
}
/deep/ .vc-weeks {
    position: unset;
}

/*/deep/ .vc-day {*/
/*    position: unset;*/
/*    z-index: auto;*/
/*}*/
/deep/ .vc-weekday {
    text-align: center;
    position: unset;
}
/deep/ .vc-pane-container {
    position: unset;
}
/deep/ .vc-day-content {
    position: unset;
}




</style>


