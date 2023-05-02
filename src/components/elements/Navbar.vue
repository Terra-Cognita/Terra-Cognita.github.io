<template>
  <nav
    id="navbar"
    class="tc-px fixed z-30 w-full bg-tc_sky-700 shadow transition-colors duration-500"
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
          <tc-logo
            :shrink="true"
            @close-menu="$emit('closeMobileMenu')"
          ></tc-logo>
        </div>
        <navbar-burger
          class="laptop:hidden"
          :isBurger="isMobileMenuOpen"
          @open-menu="$emit('openMobileMenu')"
          @close-menu="$emit('closeMobileMenu')"
        ></navbar-burger>
      </div>

      <navbar-menu
        :class="{ hidden: !isMobileMenuOpen }"
        @close-menu="$emit('closeMobileMenu')"
      ></navbar-menu>
    </div>
  </nav>
</template>

<script>
import TcLogo from "./TcLogo.vue";
import NavbarBurger from "./navbar_subcomponents/NavbarBurger.vue";
import NavbarMenu from "./navbar_subcomponents/NavbarMenu.vue";

import { ref, computed, watchEffect } from "vue";

export default {
  name: "Navbar",
  components: {
    TcLogo,
    NavbarBurger,
    NavbarMenu,
  },
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    let scrollBackgroundActive = ref(false);
    let menuBackgroundActive = ref(false);

    watchEffect(() => {
      if (props.isMobileMenuOpen) {
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
      showBackground,
    };
  },
};
</script>
