import { createStore } from 'vuex'

export default createStore({
  state: {
    disp_input: 22,
    numbers: {
      number_0: 0,
      number_1: 1,
      number_2: 2,
      number_3: 3,
      number_4: 4,
      number_5: 5,
      number_6: 6,
      number_7: 7,
      number_8: 8,
      number_9: 9
    }
  },
  getters: {
    getInput(state){
      return state.disp_input;
    },
    get_numbers:(state) =>(key)=>{
      return state.numbers[key];
    }
  },
  mutations: {
    set_number(state,{key,value}){
    state.numbers[key] = value;
    }
  },
  actions: {
    Update_Number({commit}, payload) {
      commit('set_number', payload);
    }
  },
  modules: {
  }
})
