<template>
  <div id="app" class="hero">

    <!-- NAVBAR -->
    <navbar-element></navbar-element>

    <!-- MAIN VIEW -->
    <main-view></main-view>

    <!-- FOOTER -->
    <footer-element></footer-element>

  </div>  <!-- #app -->
</template>

<script>
import NavbarElement from "./elements/Navbar.vue"
import MainView from "./elements/MainView.vue"
import FooterElement from "./elements/Footer.vue"

export default {
  name: "App",
  components: {
    NavbarElement,
    MainView,
    FooterElement,
  },
  setup() {
    return { 
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
