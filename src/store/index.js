import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug =
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing'

export const initialQuery = {
  experiences: [],
  recentlies: []
}

const store = new Vuex.Store({
  state: {
    query: { ...initialQuery },
    experiences: [],
    recentlies: []
  },

  getters,
  actions,
  mutations,

  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
