<template>
  <bootstrap>
    <router-view></router-view>
  </bootstrap>
</template>

<script>
import Bootstrap from './layouts/BootstrapLayout'

export default {
  name: 'App',
  components: {
    Bootstrap
  }
}
</script>

<style scoped>
#app, body, html {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #151e27;
  overflow-x: hidden;
  font-size: 1rem;
}

button, input, textarea {
  outline: none !important;
  box-shadow: none !important;
  resize: none;
  transition: all .3s;
}
</style>