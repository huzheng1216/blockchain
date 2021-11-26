import Vue from 'vue'
import Vuex from 'vuex'
import ZUKI from './modules/ZUKI'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ZUKI
  },
  state: {
    account: ''
  },
  mutations: {
    setWallet(state, account) {
      state.account = account
    }
  }
})
