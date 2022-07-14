import Vue from 'vue'
import Vuex from 'vuex'
import emails from './modules/emails'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    emails  ///store
  }
})
store.dispatch('initEmailStore')

export default store
