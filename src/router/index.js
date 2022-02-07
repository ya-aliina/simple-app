import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage";
import AddLesson from "@/views/AddLesson";
import KnowledgeBase from "@/views/KnowledgeBase";
import MyEvents from "@/views/MyEvents";
import Messages from "@/views/Messages";
import Notifications from "@/views/Notifications";
import ProfileSettings from "@/views/ProfileSettings";
import CourseForm from "@/views/ListOfLessons";
import LessonForm from "@/views/Lesson";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/:id',
    name: 'CourseForm',
    component: CourseForm,
  },
  {
    path: '/:id/:idLesson',
    name: 'lessonForm',
    component: LessonForm,
  },
  {
    path: '/add_lesson',
    name: 'AddLesson',
    component: AddLesson
  },
  {
    path: '/knowledge_base',
    name: 'KnowledgeBase',
    component: KnowledgeBase
  },
  {
    path: '/my_events',
    name: 'MyEvents',
    component: MyEvents
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications
  },

  {
    path: '/profile_settings',
    name: 'ProfileSettings',
    component: ProfileSettings
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
