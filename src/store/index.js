import Vue from 'vue'
import Vuex from 'vuex'
import todoList from './modules/todoList'
import skinPeeler from './modules/skinPeeler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    add () {
      console.log(11)
    }
  },
  modules: {
    todoList,
    skinPeeler
  }
})
