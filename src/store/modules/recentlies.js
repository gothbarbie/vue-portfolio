import * as types from '../types'
import Vue from 'vue'

const state = {
  recentlies: []
}

const mutations = {
  [types.RECENTLIES_SET]: (state, payload) => {
    state.recentlies = payload
  },
  [types.RECENTLIES_NEW]: (state, recently) => {
    state.recentlies.push(recently)
  },
  [types.RECENTLIES_UPDATE]: (state, recently) => {
    const respExists = state.recentlies.find(resp => resp._id == recently._id)
    if (respExists) {
      this.respExists = recently
    }
  },
  [types.RECENTLIES_DELETE]: (state, id) => {
    const respExists = state.recentlies.find(resp => resp._id == id)
    if (respExists) {
      // remove category
    }
  }
}

const actions = {
  createRecently: ({ commit }, recently) => {
    commit(types.RECENTLIES_NEW, recently)
  },
  updateRecently: ({ commit }, recently) => {
    commit(types.RECENTLIES_UPDATE, recently)
  },
  deleteRecently: ({ commit }, id) => {
    commit(types.RECENTLIES_DELETE, id)
  },
  loadRecentlies: ({ commit }) => {
    Vue.http
      .get('recentlies.json')
      .then(response => response.json())
      .then(data => {
        if (data) {
          commit(types.RECENTLIES_SET, data)
        }
      })
  }
}

const getters = {
  recentlies: state => state.recentlies,
  recently: (state, getters) => id => {
    return getters.recently.find(resp => resp._id == id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
