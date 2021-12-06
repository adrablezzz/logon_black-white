import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentIndex: 2
  },
  mutations: {
    changeIndex(state,payload) {
      state.currentIndex = payload
      console.log(payload)
    }
  },
  getters: {},
  actions: {},
  modules: {}
})

export default store