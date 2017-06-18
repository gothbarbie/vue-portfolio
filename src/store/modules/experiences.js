import * as types from '../types'
import Vue from 'vue'

const state = {
  experiences: []
}

const mutations = {
  [types.EXPERIENCES_SET]: (state, payload) => {
    state.experiences = payload
  },
  [types.EXPERIENCES_NEW]: (state, experience) => {
    state.experiences.push(experience)
  },
  [types.EXPERIENCES_UPDATE]: (state, experience) => {
    const expExists = state.experiences.find(exp => exp._id == experience._id)
    if (expExists) {
      this.expExists = experience
    }
  },
  [types.EXPERIENCES_DELETE]: (state, id) => {
    const expExists = state.experiences.find(exp => exp._id == id)
    if (expExists) {
      // remove category
    }
  }
}

const actions = {
  createExperience: ({ commit }, experience) => {
    commit(types.EXPERIENCES_NEW, experience)
  },
  updateExperience: ({ commit }, experience) => {
    commit(types.EXPERIENCES_UPDATE, experience)
  },
  deleteExperience: ({ commit }, id) => {
    commit(types.EXPERIENCES_DELETE, id)
  },
  loadExperiences: ({ commit }) => {
    Vue.http
      .get('experiences.json')
      .then(response => response.json())
      .then(data => {
        if (data) {
          commit(types.EXPERIENCES_SET, data)
        }
      })
  }
}

const getters = {
  experiences: state => state.experiences,
  experience: (state, getters) => id => {
    return getters.experiences.find(exp => exp._id == id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
