import * as types from '../types'
import Vue from 'vue'
import moment from 'moment'

const state = {
  recentlies: [
    {
      title: 'Webpack 2',
      date: moment('2017-06-26', 'YYYY-MM-DD'),
      image: 'webpack2.png',
      content: `
        <p>Today I finally got to finish a course on Webpack 2 that I have been having on my todo-list for a long time!</p>
        <p>It's a course from Udemy.com made by one of my favorite teachers, <a href="https://www.udemy.com/user/sgslo/">Stephen Grider</a>.</p>
        <p>I strongly recommend each and every one of them, since the quality of the ones I've taken is so great.<p> 
        <p>Now I finally get how to set up Webpack and <em>how</em> it works, not just what to type to get some magical result...</p>
      `
    }
  ]
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
