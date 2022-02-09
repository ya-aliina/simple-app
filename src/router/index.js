import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage";
import KnowledgeBase from "@/views/KnowledgeBase";
import MyEvents from "@/views/MyEvents";
import Messages from "@/views/Messages";
import Notifications from "@/views/Notifications";
import ProfileSettings from "@/views/ProfileSettings";
import ListOfLessons from "@/views/ListOfLessons";
import LessonForm from "@/views/Lesson";
import MainAuth from "@/views/MainAuth";
import store from '@/store'

const routes = [
  {
    path: '/authorization',
    name: 'MainAuth',
    component: MainAuth
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    }
  },
  {
    path: '/:id',
    name: 'ListOfLessons',
    component: ListOfLessons,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    }
  },
  {
    path: '/:id/:idLesson',
    name: 'lessonForm',
    component: LessonForm,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    }
  },
  {
    path: '/knowledge_base',
    name: 'KnowledgeBase',
    component: KnowledgeBase,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    }
  },
  {
    path: '/my_events',
    name: 'MyEvents',
    component: MyEvents,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    }
  },

  {
    path: '/profile_settings',
    name: 'ProfileSettings',
    component: ProfileSettings,
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
