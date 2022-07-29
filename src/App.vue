<template>
  <div>
    <button @click="alterBtn">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('skinPeeler')
export default {
  data () {
    return {}
  },
  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },
  created () {},
  methods: {
    alterBtn () {
      const color = '#' + Math.random().toString(16).slice(2, 8)
      this.skinPeelerBtn(color)
    },
    ...mapActions(['skinPeelerBtn'])
  }
}
</script>

<style scoped></style>
