import Vue from 'vue'
import Vuex from 'vuex'

import recentlies from './modules/recentlies'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    recentlies
  }
})
