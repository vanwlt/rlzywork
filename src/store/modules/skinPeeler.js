export default {
  namespaced: true,
  state: {
    color: ''
  },
  mutations: {
    skinPeelerBtn (state, color) {
      state.color = color
    }
  },
  actions: {
    skinPeelerBtn ({ commit }, color) {
      commit('skinPeelerBtn', color)
    }
  },
  modules: {}
}
