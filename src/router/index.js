import Vue from 'vue'
import Router from 'vue-router'
import container from '@/components/container'
import home from '@/components/pages/home'
import element from '@/components/pages/element'
import user from '@/components/user/user'
import userinfo from '@/components/user/userinfo'
import usertask from '@/components/user/usertask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: container
    },
    {
      path: '/container', component: container,children:[
        {
          path: 'home',
          name: 'home',
          component: home
        }]
    },
    {
      path: '/element', component: element
    }
  ]
})
