import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Todos from '../views/Todos.vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: defaultLayout
      },
      component: Home
    },
    {
      path: '/todos',
      name: 'todos',
      meta: {
        layout: defaultLayout
      },
      component: Todos
    }
  ]
})

export default router
