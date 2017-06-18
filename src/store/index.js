import Vue from 'vue'
import Vuex from 'vuex'

import recentlies from './modules/recentlies'
import experiences from './modules/experiences'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    recentlies,
    experiences
  }
})
