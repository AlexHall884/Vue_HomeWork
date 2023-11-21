<template>
  <div id="app">
    <HeaderBlockComp />
    <router-view />
    <FooterBlockComp />
  </div>
</template>

<script>
import HeaderBlockComp from './blocks/HeaderBlockComp.vue'
import FooterBlockComp from './blocks/FooterBlockComp.vue'

export default {
  name: 'App',
  components: {
    HeaderBlockComp,
    FooterBlockComp
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
}
</style>
