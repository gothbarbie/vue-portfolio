import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'
import store from './store'
import router from './router'

Vue.use(VueResource)

VUe.http.options.root = ''

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
