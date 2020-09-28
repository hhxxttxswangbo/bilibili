import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/register'
  }
  ,
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
