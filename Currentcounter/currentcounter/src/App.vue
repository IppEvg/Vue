
<template>
  <div id="app">
    <AddButton></AddButton>
    <FormItem v-show="this.$store.state.isShow">
    </FormItem>
    <ListItem v-bind:list="list">
    </ListItem>
  </div>
</template>

<script>
import AddButton from "./components/AddButton.vue";
import FormItem from "./components/Form.vue";
import ListItem from "./components/List.vue";

export default {
  name: 'App',
  components: {
    AddButton, FormItem, ListItem
  },

  methods: {
    fetchData() {
      return [
        { id: 1, data: '23.09.2022', category: 'food', value: 1300 },
        { id: 2, data: '12.09.2022', category: 'transport', value: 500 },
        { id: 3, data: '20.09.2022', category: 'health', value: 1000 },
        { id: 4, data: '09.09.2022', category: 'entertainments', value: 3000 },
        { id: 5, data: '18.09.2022', category: 'learning', value: 800 },
      ]
    }


  },
  computed: {
    list() {
      return this.$store.getters.getPaymentsList
    }
    // check: {
    //   set() {
    //     this.$store.commit('chengeShower')
    //   },
    //   get() {
    //     return this.$store.getters.getShow
    //   }

    // }
  },


  mounted() {
    this.$store.commit('setListData', this.fetchData())
  }


}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
