import Vue from 'vue'
import App from './App'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'
import store from './store'
import router from './router'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `localhost:8000/graphql`,
    transportBatching: true
  }),
  connectToDevTools: true,
  dataIdFromObject: r => r.id
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // apolloProvider,
  router,
  store,
  template: '<App/>',
  components: { App }
})
