<template>
  <nav
    id="navbar"
    class="tc-px fixed z-10 w-full bg-tc_sky-700 shadow transition-colors duration-500"
    :class="{ 'bg-transparent shadow-none': !showBackground }"
  >
    <div
      id="navbar-content"
      class="flex flex-col items-center justify-between py-2 laptop:flex-row laptop:space-x-4"
    >
      <div
        id="navbar-header"
        class="flex w-full flex-row items-center justify-between laptop:w-auto laptop:flex-none laptop:basis-1/2"
      >
        <div id="navbar-logo">
          <tc-logo :shrink="true"></tc-logo>
        </div>
        <navbar-burger
          class="laptop:hidden"
          :isMenuOpen="isVisible"
          @open-menu="show"
          @close-menu="hide"
        ></navbar-burger>
      </div>

      <navbar-menu
        :class="{ hidden: !isVisible }"
        @close-menu="hide"
      ></navbar-menu>
    </div>
  </nav>
</template>

<script>
import TcLogo from "./TcLogo.vue";
import NavbarBurger from "./navbar_subcomponents/NavbarBurger.vue";
import NavbarMenu from "./navbar_subcomponents/NavbarMenu.vue";

import { useToggle } from "@/composables/useToggle";
import { ref, computed, watchEffect } from "vue";

export default {
  name: "Navbar",
  components: {
    TcLogo,
    NavbarBurger,
    NavbarMenu,
  },
  props: {},
  setup() {
    let { isVisible, hide, show } = useToggle();

    const navlinkProps = {
      WELCOME: {
        to: { name: "home", hash: "#welcome" },
        label: "Welcome",
      },
      GAMEPLAY: {
        to: { name: "home", hash: "#gameplay" },
        label: "Gameplay",
      },
      TEAM: {
        to: { name: "home", hash: "#team" },
        label: "Team",
      },
      CODEX: {
        to: { name: "codex", hash: "" },
        label: "Codex",
      },
      LOGIN: {
        to: { name: "login", hash: "" },
        label: "Access",
      },
    };

    let scrollBackgroundActive = ref(false);
    let menuBackgroundActive = ref(false);

    watchEffect(() => {
      if (isVisible.value) {
        menuBackgroundActive.value = true;
      } else {
        menuBackgroundActive.value = false;
      }
    });

    document.addEventListener("scroll", function () {
      let bodyTopPosition = document.body.getBoundingClientRect().top;
      if (bodyTopPosition < -150) {
        scrollBackgroundActive.value = true;
      } else {
        scrollBackgroundActive.value = false;
      }
    });

    const showBackground = computed(() => {
      return scrollBackgroundActive.value || menuBackgroundActive.value;
    });

    return {
      isVisible,
      hide,
      show,
      showBackground,
      navlinkProps,
    };
  },
};
</script>
