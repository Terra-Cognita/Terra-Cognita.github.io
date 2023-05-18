<template>
  <div
    id="app"
    class="touch-pan-y bg-tc_sky-700 text-base text-tc_sand-100 max-laptop:text-center laptop:text-2xl"
  >
    <navbar-element></navbar-element>

    <div id="page" @touchstart="hide">
      <!-- Landing Page -->
      <router-view :class="{ 'touch-none': isChatOpen }"></router-view>
      <chatbox-element
        @is-open="isChatOpen = true"
        @is-closed="isChatOpen = false"
      ></chatbox-element>
    </div>

    <footer-element></footer-element>
  </div>
</template>

<script>
import NavbarElement from "@/components/elements/Navbar.vue";
import FooterElement from "@/components/elements/Footer.vue";
import ChatboxElement from "@/components/elements/Chatbox.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    NavbarElement,
    FooterElement,
    ChatboxElement,
  },
  setup() {
    const isChatOpen = ref(false);

    return {
      isChatOpen,
    };
  },
};
</script>
