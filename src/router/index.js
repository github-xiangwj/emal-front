import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from '@/components/user/user'
import userinfo from '@/components/user/userinfo'
import usertask from '@/components/user/usertask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld', component: HelloWorld
    }
  ]
})
