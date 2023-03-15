<template>
  <div id="app" class="hero">

    <!-- Navbar -->
    <navbar-element></navbar-element>

    <!-- Landing Page -->
    <router-view></router-view>

    <!-- Footer -->
    <footer-element></footer-element>

  </div>
</template>

<script>
import NavbarElement from "./elements/Navbar.vue"
import FooterElement from "./elements/Footer.vue"

export default {
  name: "App",
  components: {
    NavbarElement,
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
