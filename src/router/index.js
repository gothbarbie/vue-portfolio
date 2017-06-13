import Vue from 'vue'
import Router from 'vue-router'

import Experience from '@/views/Experience'
import Recently from '@/views/Recently'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/recently',
      name: 'Recently',
      component: Recently
    }
  ]
})
