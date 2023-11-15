<template>
  <div id="app">
    <HeaderBlockComp />
    <!-- <ProjectPageComp /> -->
    <!-- <BlogDetailsPageComp /> -->
    <ProjectDetailsComp />
    <FooterBlockComp />
    <!-- <HomeWorkProductDetails /> -->
  </div>
</template>

<script>
// import HomeWorkProductDetails from './components/ProductDetails.vue'
// import IndexPageComp from './pages/IndexPageComp'
import HeaderBlockComp from './blocks/HeaderBlockComp.vue'
import FooterBlockComp from './blocks/FooterBlockComp.vue'
// import ProjectPageComp from './pages/ProjectPageComp.vue'
import ProjectDetailsComp from './pages/ProjectDetailsComp.vue'
// import BlogPageComp from './pages/BlogPageComp.vue'
// import BlogDetailsPageComp from './pages/BlogDetailsPageComp.vue'

export default {
  name: 'App',
  components: {
    // IndexPageComp,
    // BlogPageComp,
    // BlogDetailsPageComp,
    HeaderBlockComp,
    FooterBlockComp,
    // ProjectPageComp,
    ProjectDetailsComp
    // HomeWorkProductDetails
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
