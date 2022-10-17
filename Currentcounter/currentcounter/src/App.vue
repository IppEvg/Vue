<template>
  <v-app>
    <v-app-bar app>
      <v-btn to="/" tag="button">Home</v-btn> |
      <v-btn to="/transport" tag="button">Add a transport payment</v-btn> |
      <v-btn to="/entertainment" tag="button">Add a entertainments payment</v-btn> |
      <v-btn to="/health" tag="button">Add a health payment</v-btn> |
      <v-btn to="/food" tag="button">Add a food payment</v-btn>
    </v-app-bar>

    <v-main>
      <div class="name">My counter of payments</div>
      <router-view />

      <BarChart />


    </v-main>

    <v-footer>
      Copyright &copy;
    </v-footer>
  </v-app>
</template>

<script>
import BarChart from './Chart'


export default {

  name: 'App',
  components: { BarChart }
  // props: {
  //  chartData: {
  //    type: Object,
  //  required: true
  //       hartOptions: {
  //    type: Object,
  //    default: () => { }

  // }

  //  computed: {
  //    addNumberPage() {
  //    if (this.$store.getters.getLength >= 5) {
  //        this.page = Math.floor(this.$store.getters.getLength / 5);
  //       return this.page;
  //     } else {
  //       return this.page;
  //     }
  //   }
}

</script>

<style lang="scss">
#appe {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 5px;

    &.router-link-exact-active {
      color: #259663;
      background-color: rgb(221, 202, 221)
    }
  }
}

.err {
  width: 500px;
  height: 400px;
  margin: 50px auto;
  padding: 30%;
  border: 1px solid grey;
}

h1 {
  text-align: center;
}

.name {
  color: rgb(107, 56, 155);
  font-family: Comic, serif;
  font-size: 25px;
}

.theme--light.v-footer {
  background-color: #AAAA;
}

.v-btn {
  text-transform: none;
  letter-spacing: 0;
}

input {
  background-color: rgb(228, 226, 226);
  font: normal;
}

.v-toolbar__content,
.v-toolbar__extension {
  justify-content: center;
}
</style>