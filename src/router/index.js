import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import user from '@/components/user/user'
import userinfo from '@/components/user/userinfo'
import usertask from '@/components/user/usertask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: home
    },
    {
      path: '/home', component: home
    }
  ]
})
