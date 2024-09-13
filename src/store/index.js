import { createStore } from 'vuex'

export default createStore({
  state: {
    disp_input: ''
  },
  getters: {
    getInput(state){
      return state.disp_input;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
