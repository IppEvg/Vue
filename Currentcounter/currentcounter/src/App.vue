
<template>
  <div id="app">
    <AddButton v-on:doclick="chengeShower"></AddButton>
    <FormItem v-if="isShow" v-bind:list="costList" v-model="costList" v-on:adder="pushString" v-bind:show="isShow">
    </FormItem>
    <ListItem v-bind:list="costList">
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
  data() {
    return {
      costList: [],
      isShow: false
    }
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
    },
    chengeShower() {
      this.isShow = !this.isShow;
    },
    pushString(data) {
      this.costList = [...this.costList, data];
      this.isShow = false;

    }

  },
  created() {
    this.costList = this.fetchData()
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
