import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import FirebaseView from '../views/FirebaseView.vue'
import SocialView from '../views/SocialView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path:'/firebase',
    name: 'firebase',
    component: FirebaseView
  },
  {
    path:'/social',
    name: 'social',
    component: SocialView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
