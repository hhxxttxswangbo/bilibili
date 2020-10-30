import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import UserInfo from '@/views/UserInfo.vue'
import Edit from '@/views/Edit.vue'
import Home from '@/views/Home.vue'
import Article from '@/views/Article.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      keepalive: true
    }
  }
  ,
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userinfo',
    component: UserInfo,
    //权限验证
    meta: {
      istoken: 'true'
    }
  },
  {
    path: '/edit',
    component: Edit,
    meta: {
      istoken: 'true'
    }
  },
  {
    path: '/article/:id',
    component: Article
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if ((!localStorage.getItem('token') || !localStorage.getItem('id')) && to.meta.istoken == true) {
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})
export default router
