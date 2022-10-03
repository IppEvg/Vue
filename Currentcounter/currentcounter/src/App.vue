<template>
  <div id="app">

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/transport">add a transport payment</router-link> |
      <router-link to="/entertainments">add a entertainments payment</router-link> |
      <router-link to="/health">add a health payment</router-link> |
      <router-link to="/food">add a food payment</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>






<style lang="scss">
#app {
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

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
