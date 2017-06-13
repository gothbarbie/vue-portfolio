import * as types from './mutation_types'
import { initialQuery } from './index'

export default {
  // QUERY
  [types.SET_EXPERIENCES](state, payload) {
    state.experiences = payload
  },
  [types.SET_RECENTLIES](state, payload) {
    state.recentlies = payload
  },
  [types.INIT_QUERY](state, payload) {
    state.query = payload
  }
}
