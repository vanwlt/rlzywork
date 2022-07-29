export default {
  namespaced: true,
  state: {
    list: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    // 删除事件
    delTodoList (state, val) {
      const index = state.list.findIndex((ele) => (ele.id = val))
      state.list.splice(index, 1)
    },
    addTodoList (state, list) {
      state.list.unshift({
        name: list,
        id: state.list[state.list.length - 1].id + 1,
        dene: false
      })
    }
  },
  actions: {
    // 删除事件
    dekTodoList ({ commit }, id) {
      commit('delTodoList', id)
    },
    addTodoList (context, list) {
      context.commit('addTodoList', list)
      console.log(context.dispatch)
    }
  },
  modules: {}
}
