import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/register'
import Login from '../components/login'
import DetailCard from '../components/detailCard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Login,
    children: [
      {
        path: 'dashboard',
        name: 'DetailCard',
        component: DetailCard
      },
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
