import * as types from './mutation_types'

/**
 * Add new items to query
 * @param {Object} state - Current state
 * @param {String} selector - Selector on query object
 * @param {Object} data - New object
 */
export const add = (state, selector, data) => {
  return state.query[selector].concat([data])
}

/**
 * Remove a property at specific index in query
 * @param {Object} state - Current state
 * @param {String} selector - Selector on query object
 * @param {Int} index - Index to remove at
 */
export const remove = (state, selector, index) => {
  return [
    ...state.query[selector].slice(0, index),
    ...state.query[selector].slice(index + 1)
  ]
}

/**
 * Add SET, REMOVE and REMOVE_ALL mutations for a specific selector
 * @param {String} selector
 * @param {String} querySelector
 */
export const setup = (selector, querySelector) => {
  selector = selector.toUpperCase()

  const setType = types[`SET_${selector}`]
  const removeType = types[`REMOVE_${selector}`]
  const removeAllType = types[`REMOVE_ALL_${selector}`]

  return {
    [setType](state, payload) {
      const exists = state.query[querySelector].filter(
        ({ path }) => path === payload.path
      )

      if (exists.length) {
        return false
      }

      state.query[querySelector] = add(state, querySelector, payload)
    },
    [removeType](state, index) {
      state.query[querySelector] = remove(state, querySelector, index)
    },
    [removeAllType](state) {
      state.query[querySelector] = []
    }
  }
}
