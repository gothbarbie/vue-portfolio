import * as types from '../types'
import Vue from 'vue'
import moment from 'moment'

const state = {
  recentlies: [
    {
      title: 'Smiley Diary on iOS',
      date: moment('2017-09-11', 'YYYY-MM-DD'),
      image: 'smiley-diary-icon-512.png',
      content: `
        <p>Smiley Diary is now available on iOS as well!</p>
        
        <ul>
          <li><a href="https://itunes.apple.com/us/app/smiley-diary/id1273081390?mt=8&ign-mpt=uo%3D2" title="Smiley Diary">On Apple App Store</a></li>
          <li><a href="https://play.google.com/store/apps/details?id=com.smileydiary" title="Smiley Diary">On Google Play</a></li>
        </ul>
        
        <p>If you're trying it out, please feel free to leave a rating so others can find it more easily!</p>
      `
    },
    {
      title: 'Smiley Diary',
      date: moment('2017-08-28', 'YYYY-MM-DD'),
      image: 'smiley-diary-1.2.jpg',
      content: `
        <p>I have released my first own mobile app!</p>
        <p>I have indeed worked on mobile apps before, much bigger projects than
        his one, actually. But there is a difference in making something on your
        own, where you make all decisions, write all the code and know every part
        inside out, to a larger project where you only know certain parts deeply
        and most of it superficially.</p>
        <p>The purpose of this app is to give you a tool to easily and with little
        effort rate your emotions daily using grades of smileys (hence the name).</p>
        <p>These range from super happy, to very sad. And if you want you can also
        leave a short note so you know in the future what caused these feelings.</p>
        <p>Then you can view your ratings on a graph, and perhaps you'll find 
        a pattern?</p>
        <p>The app was built using React Native and it is available on 
        <a href="https://play.google.com/store/apps/details?id=com.smileydiary" title="Smiley Diary">Google Play</a>
        and (soon) on the Apple App Store (pending review).</p>
        <p>You are very welcome to give it a try and hand me some feedback!</p>
      `
    },
    {
      title: 'React Native & Redux',
      date: moment('2017-07-24', 'YYYY-MM-DD'),
      image: 'react-native.png',
      content: `
        <p>It's funny sometimes how you learn by doing but still feel you don't really "know" something. 
        That itching feeling that perhaps you've missed something although you really 
        don't know what that could be.</p>
        
        <p>To solve that matter when it occurs, I try to find good educators and good courses, 
        also on areas I know fairly well. Of course, after working in projects for production 
        for well over a year, I'm more than familiar with both React and React Native. But still, 
        I wanted to see if there was something that might slipped between the cracks, so last 
        week, during my vaccation, I've spent some time studying this course on React Native and 
        Redux.</p>
        
        <p>Once again, the author is Stephen Grider. And I promise, he doesn't sponsor these
        posts, I simply want to share my very positive experience with him as a tutor. Good
        teachers are hard to find!</p>
        
        <p>You'll find this course on 
        <a href="https://www.udemy.com/the-complete-react-native-and-redux-course">Udemy</a> 
        as well. Highly recommended!</p>
      `
    },
    {
      title: 'React Redux',
      date: moment('2017-07-14', 'YYYY-MM-DD'),
      image: 'redux.png',
      content: `
        <p>Lately I've been revisiting some courses I did about a year ago. And the reason is 
        two-folded:</p>
        
        <p>Firstly, it means I get to appreciate what I've learned and used for the past year 
        and see that I really do understand all the nitty-gritty parts.</p>
        
        <p>Secondly, it's unavoidable that when you first learn a new framework, that you miss 
        some of the most nuanced details. So, repeating a course a second time means you get 
        to pick up on those things you might have missed the first time. Usually things you 
        know how to use, but perhaps haven't fundamentally understood in every little detail.</p>
        
        <p>This course is, as the previous one I finished, made by <em>Stephen Grider</em>. 
        If you are new to React, or know it a little bit but are new to Redux, or simply want 
        to get a better understanding of any or both of the two - this course is really one of 
        my top recommendations.</p>
        
        <p><a href="https://www.udemy.com/react-redux">Udemy: Modern React with Redux</a></p>
      `
    },
    {
      title: 'Webpack 2',
      date: moment('2017-06-26', 'YYYY-MM-DD'),
      image: 'webpack2.png',
      content: `
        <p>Today I finally got to finish a course on Webpack 2 that I have been having on my 
        todo-list for a long time!</p>
        
        <p>It's a course from Udemy.com made by one of my favorite teachers, 
        <a href="https://www.udemy.com/user/sgslo/">Stephen Grider</a>.</p>
        
        <p>I strongly recommend each and every one of them, since the quality of the ones 
        I've taken is so great.<p> 
        
        <p>Now I finally get how to set up Webpack and <em>how</em> it works, not just what 
        to type to get some magical result...</p>
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
