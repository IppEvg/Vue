import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costList: [],
  },
  getters: {
    getPaymentsList: (state) => state.costList,
    getLength: (state) => state.costList.length
  },
  mutations: {
    setListData(state, payload) {
      state.costList = payload
    },
    addNewString: (state, obj) => {
      state.costList = [...state.costList, obj];
    }

  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {

        setTimeout(() => {
          resolve([
            {
              id: 1,
              data: '28.03.2020',
              category: 'Food',
              value: 169,
            },
            {
              id: 2,
              data: '24.03.2020',
              category: 'Transport',
              value: 360,
            },
            {
              id: 3,
              data: '24.03.2020',
              category: 'Food',
              value: 532,
            },
            {
              id: 4,
              data: '21.02.2020',
              category: 'Entertainments',
              value: 780,
            }
          ])
        }, 3000)
      })
        .then(res => {
          commit('setListData', res)
        })
    }
  },
  modules: {
  }
})
