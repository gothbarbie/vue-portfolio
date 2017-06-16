import Vue from 'vue'
import Router from 'vue-router'

import Experience from '@/views/Experience'
import Recently from '@/views/Recently'
import Contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Experience
    },
    {
      path: '/recently',
      component: Recently
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
