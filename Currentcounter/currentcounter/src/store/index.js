import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costList: [],
    isShow: false
  },
  getters: {
    getPaymentsList: (state) => state.costList,
    getShow: (state) => state.isShow,
  },
  mutations: {
    setListData(state, payload) {
      state.costList = payload
    },
    chengeShower: (state) => {
      state.isShow = !state.isShow
    },
    addNewString: (state, obj) => {
      state.costList = [...state.costList, obj];
      state.isShow = false;
    }



  },
  actions: {
  },
  modules: {
  }
})
