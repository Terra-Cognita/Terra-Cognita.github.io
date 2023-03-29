<template>
  <div 
    id="app" 
    class="bg-forest-900
          text-base md:text-2xl text-sand-100
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
  >

    <!-- Navbar -->
    <navbar-element></navbar-element>

    <!-- Landing Page -->
    <router-view></router-view>

    <!-- Footer -->
    <footer-element></footer-element>

  </div>
</template>

<script>
import NavbarElement from "@/components/elements/Navbar.vue"
import FooterElement from "@/components/elements/Footer.vue"

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

