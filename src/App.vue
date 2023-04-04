<template>
  <div
    id="app"
    class="bg-forest-900 text-base text-sand-100 [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:text-2xl [&::-webkit-scrollbar]:hidden"
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
import NavbarElement from "@/components/elements/Navbar.vue";
import FooterElement from "@/components/elements/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarElement,
    FooterElement,
  },
  setup() {
    return {};
  },
};
</script>
