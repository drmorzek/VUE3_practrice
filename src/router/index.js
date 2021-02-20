import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import('../views/Help.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      layout: 'auth',
      auth: false
    },
    component: () => import('../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const required = to.meta.auth
  const isAuthenticated = store.getters['auth/isAuthenticated']


  if (required && isAuthenticated) {
    next()
  } else if (required && !isAuthenticated) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
