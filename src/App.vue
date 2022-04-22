<template>
  <v-app>
    <Menu/>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>
<script>
import Menu from "@Components/menu/MenuLayout"
import HelloWorld from "@Components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
    Menu
  },
};
</script>
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
