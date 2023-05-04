<template>
  <nav
    id="navbar"
    class="tc-px fixed z-30 w-full bg-tc_sky-700 shadow transition-colors duration-500"
    :class="{ 'bg-transparent shadow-none': !showBackground }"
  >
    <div
      id="navbar-content"
      class="flex flex-col items-center justify-between max-laptop:py-4 laptop:h-20 laptop:flex-row laptop:space-x-4"
    >
      <div
        id="navbar-header"
        class="flex w-full flex-row items-center justify-between laptop:w-auto laptop:flex-none laptop:basis-1/2"
      >
        <div id="navbar-logo">
          <navbar-logo @close-menu="$emit('closeMobileMenu')"></navbar-logo>
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
    <player
      class="absolute max-laptop:hidden laptop:right-[5vw] laptop:top-7"
    ></player>
  </nav>
</template>

<script>
import NavbarLogo from "./navbar_subcomponents/NavbarLogo.vue";
import NavbarBurger from "./navbar_subcomponents/NavbarBurger.vue";
import NavbarMenu from "./navbar_subcomponents/NavbarMenu.vue";
import Player from "./Player.vue";
import { ref, computed, watchEffect } from "vue";

export default {
  name: "Navbar",
  components: {
    NavbarLogo,
    NavbarBurger,
    NavbarMenu,
    Player,
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
