import Vue from 'vue'
import Vuex from 'vuex'
import ZUKI from './modules/ZUKI'
import WOOL from './modules/WOOL'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ZUKI,WOOL
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
