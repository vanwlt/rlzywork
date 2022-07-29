<template>
  <header class="header">
    <h1 :style="{ color: color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="incident"
      @keydown.enter="addBtn"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('todoList')
const { mapState } = createNamespacedHelpers('skinPeeler')
export default {
  data () {
    return {
      incident: ''
    }
  },
  methods: {
    addBtn () {
      if (this.incident !== '') {
        this.addTodoList(this.incident)
        this.incident = ''
      }
    },
    ...mapActions(['addTodoList'])
  },
  computed: {
    ...mapState(['color'])
  }
}
</script>
