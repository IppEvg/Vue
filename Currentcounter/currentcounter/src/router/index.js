import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/MainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:transport/:value?',// после ввода в путь браузера .../transport/2- страница home стерает все строки, которые были внесены, т.е. costList снова пустой.
    name: 'TransportView',
    component: () => import('../views/TransportView.vue')
  },
  {
    path: '/:entertainment/:value?',
    name: 'EntertainmentView',
    component: () => import('../views/EntertainmentView.vue')
  },
  {
    path: '/:health/:value?',
    name: 'HealthView',
    component: () => import('../views/HealthView.vue')
  },
  {
    path: '/:food/:value?',
    name: 'FoodView',
    component: () => import('../views/FoodView.vue')
  },
  {
    path: '*',
    name: 'ErrView',
    component: () => import('../views/ErrView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
