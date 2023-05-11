<template>
  <nav
    id="navbar"
    class="duration-0 fixed z-30 w-full origin-top-left transition-transform"
    :style="keyboardRespStyle"
  >
    <div
      id="navbar-container"
      class="tc-px bg-tc_sky-700 shadow transition-colors duration-500"
      :class="{ 'bg-transparent shadow-none': !showBackground }"
    >
      <div
        id="navbar-content"
        class="flex items-center justify-between max-laptop:py-4 laptop:h-20 laptop:flex-row laptop:space-x-4"
      >
        <div
          id="navbar-header"
          class="flex w-full flex-row items-center justify-between laptop:w-auto laptop:flex-none laptop:basis-1/2"
        >
          <div id="navbar-logo" class="max-laptop:basis-3/5">
            <navbar-logo @close-menu="$emit('closeMobileMenu')"></navbar-logo>
          </div>
          <navbar-burger
            class="z-[100] flex basis-2/5 justify-end laptop:hidden"
            :isBurger="isMobileMenuOpen"
            @open-menu="$emit('openMobileMenu')"
            @close-menu="$emit('closeMobileMenu')"
          ></navbar-burger>
        </div>

        <navbar-menu-laptop :navLinks="navlinkProps" class="max-laptop:hidden">
        </navbar-menu-laptop>
      </div>
      <div
        id="navbar-player-container"
        class="absolute flex items-center max-laptop:hidden laptop:right-[5vw] laptop:top-0 laptop:h-20"
      >
        <player></player>
      </div>
    </div>

    <div
      id="navbar-floating-container"
      class="absolute top-3 right-10 laptop:hidden"
    >
      <navbar-menu-mobile
        :navLinks="navlinkProps"
        :class="{ hidden: !isMobileMenuOpen }"
        @close-menu="$emit('closeMenu')"
      >
      </navbar-menu-mobile>
    </div>
  </nav>
</template>

<script>
import NavbarLogo from "./navbar_subcomponents/NavbarLogo.vue";
import NavbarBurger from "./navbar_subcomponents/NavbarBurger.vue";
import NavbarMenuLaptop from "./navbar_subcomponents/NavbarMenuLaptop.vue";
import NavbarMenuMobile from "./navbar_subcomponents/NavbarMenuMobile.vue";
import Player from "./Player.vue";
import { useKeyboard } from "../../composables/useKeyboard";
import { ref, computed, watchEffect, watch } from "vue";

export default {
  name: "Navbar",
  components: {
    NavbarLogo,
    NavbarBurger,
    NavbarMenuLaptop,
    NavbarMenuMobile,
    Player,
  },
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    // virtual keyboard manegement
    const navbarTranslate = ref(0);
    let { displayOffset } = useKeyboard();

    watch(
      () => displayOffset.value,
      () => {
        navbarTranslate.value = displayOffset.value;
      }
    );

    const keyboardRespStyle = computed(
      () => `top: ${navbarTranslate.value.toString()}px`
    );

    // background and menu management
    let scrollBackground = ref(false);
    let menuActive = ref(false);

    watchEffect(() => {
      if (props.isMobileMenuOpen) {
        menuActive.value = true;
      } else {
        menuActive.value = false;
      }
    });

    const showBackground = computed(() => {
      return scrollBackground.value || menuActive.value;
    });

    document.addEventListener("scroll", function () {
      let bodyTopPosition = document.body.getBoundingClientRect().top;
      if (bodyTopPosition < -150) {
        scrollBackground.value = true;
      } else {
        scrollBackground.value = false;
      }
    });

    // properties
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

    return {
      keyboardRespStyle,
      showBackground,
      navlinkProps,
    };
  },
};
</script>
