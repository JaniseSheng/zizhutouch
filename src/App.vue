<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

  #app .fade-enter-active, #app .fade-leave-active {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  #app .fade-enter, #app .fade-leave-to {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
</style>
