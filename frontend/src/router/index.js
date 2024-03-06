import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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
      component: () => import('@/views/Todos.vue')
    }
  ]
})

export default router
