
<template>
  <div id="app">
    <AddButton v-on:doclick="changeMeth"></AddButton>
    <FormItem v-show="isShow" v-on:delForm="changeMeth">
    </FormItem>
    <ListItem>
    </ListItem>
  </div>
</template>

<script>
import AddButton from "./components/AddButton.vue";
import FormItem from "./components/Form.vue";
import ListItem from "./components/List.vue";
// import { mapGetters, mapActions } from "vuex";
export default {
  name: 'App',
  data() {
    return {
      isShow: false
    }
  },
  components: {
    AddButton, FormItem, ListItem
  },
  methods: {
    changeMeth() {
      this.isShow = !this.isShow
    }
  },
  mounted() {
    this.$store.dispatch('fetchData')
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
