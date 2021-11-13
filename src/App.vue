<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  setup() {},
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, 'Balsamiq Sans', Sarabun, 'Yusei Magic', sans-serif;
}


</style>
