import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../views/HomeView.vue'
import addNewPlan from '../../components/addNewPlan.vue'
import App from '../../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../../views/HomeView.vue')
    },
    {
      path: '/scheduler/:id',
      name: 'scheduler',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../../components/Task.vue')
    },
    {
      path: '/add_new_plan/',
      name: 'addNewPlan',
      component: addNewPlan
    }
  ]
})

export default router
