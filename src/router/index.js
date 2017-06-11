import Vue from 'vue'
import Router from 'vue-router'

import Experience from '@/views/Experience'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Experience',
      component: Experience
    }
  ]
})
