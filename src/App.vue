<template>
  <div
    id="app"
    class="touch-pan-y bg-tc_sky-700 text-base text-tc_sand-100 max-laptop:text-center laptop:text-2xl"
  >
    <navbar-element
      :isMobileMenuOpen="isVisible"
      @close-mobile-menu="hide"
      @open-mobile-menu="show"
    ></navbar-element>

    <div id="page" @touchstart="hide">
      <!-- Landing Page -->
      <router-view></router-view>
      <chatbox-element></chatbox-element>
    </div>

    <footer-element></footer-element>
  </div>
</template>

<script>
import { useToggle } from "@/composables/useToggle";
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
    let { isVisible, hide, show } = useToggle();

    return {
      isVisible,
      hide,
      show,
    };
  },
};
</script>
