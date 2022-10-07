import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costList: [
      {
        id: 1,
        data: "12.04.2022",
        category: 'transport',
        value: 750,
        menu: false
      }, {
        id: 2,
        data: "14.04.2022",
        category: 'food',
        value: 575,
        menu: false
      }
    ],
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
    },
    delStr: (state, obj) => {
      state.costList = state.costList.splice(obj, 1);
    }
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {

        setTimeout(() => {
          resolve(this.$store.costList)
        }, 1000)
      })
        .then(res => {
          commit('setListData', res)
        })
    }
  },
  modules: {
  }
})
