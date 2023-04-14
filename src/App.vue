<template>
  <div
    id="app"
    class="bg-forest-900 text-base text-sand-100 [-ms-overflow-style:'none'] [scrollbar-width:'none'] laptop:text-2xl [&::-webkit-scrollbar]:hidden"
  >
    <!-- Navbar -->
    <navbar-element></navbar-element>

    <!-- Landing Page -->
    <router-view></router-view>

    <!-- Chatbox -->
    <chatbox-element></chatbox-element>

    <!-- Footer -->
    <footer-element></footer-element>
  </div>
</template>

<script>
import NavbarElement from "@/components/elements/Navbar.vue";
import FooterElement from "@/components/elements/Footer.vue";
import ChatboxElement from "@/components/elements/Chatbox.vue";

export default {
  name: "App",
  components: {
    NavbarElement,
    FooterElement,
    ChatboxElement,
  },
  setup() {
    return {};
  },
};
</script>
