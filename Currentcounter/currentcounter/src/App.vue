<template>
  <div id="appe">

    <nav>
      <router-link to="/" tag="button">Home</router-link> |
      <router-link to="/transport" tag="button">add a transport payment</router-link> |
      <router-link to="/entertainment" tag="button">add a entertainments payment</router-link> |
      <router-link to="/health" tag="button">add a health payment</router-link> |
      <router-link to="/food" tag="button">add a food payment</router-link>
    </nav>
    <div class="name">My counter of payments</div>
    <router-view></router-view>
  </div>
</template>






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
</style>
