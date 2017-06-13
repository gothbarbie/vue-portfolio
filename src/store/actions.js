import * as types from './mutation_types'

export const updateQuery = ({ commit }, payload) => {
  commit(payload.type, payload.data)
}

export const initQuery = ({ commit, state }, payload) => {
  commit(types.INIT_QUERY, {
    ...state.query,
    ...payload
  })
}
