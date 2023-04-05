<template>
  <nav
    id="navbar"
    class="fixed z-10 w-full bg-forest-500 shadow transition-colors duration-500"
    :class="{ 'bg-transparent shadow-none': !showBackground }"
  >
    <div
      id="navbar-content"
      class="tc-px flex flex-col items-center justify-between py-2 laptop:flex-row laptop:space-x-4 laptop:py-4"
    >
      <!-- 1st NAVBAR FLEX ITEM: Logo & Burger  -->
      <div
        id="navbar-content-main"
        class="flex w-full flex-row items-center justify-between laptop:w-auto laptop:flex-none"
      >
        <logo-main id="navbar-logo"></logo-main>
        <navbar-burger
          class="laptop:hidden"
          :isMenuOpen="isVisible"
          @open-menu="show"
          @close-menu="hide"
        ></navbar-burger>
      </div>

      <!-- 2nd NAVBAR FLEX ITEM: Navbar Links  -->
      <div
        id="navbar-content-menu"
        class="mt-4 w-full text-sand-100 laptop:mt-0 laptop:inline-flex laptop:shrink laptop:justify-end laptop:space-x-2 laptop:text-center"
        :class="{ hidden: !isVisible }"
      >
        <navbar-link
          :to="navlinkProps.WELCOME.to"
          :label="navlinkProps.WELCOME.label"
          @close-menu="hide"
        />
        <navbar-link
          :to="navlinkProps.GAMEPLAY.to"
          :label="navlinkProps.GAMEPLAY.label"
          @close-menu="hide"
        />
        <navbar-link
          :to="navlinkProps.TEAM.to"
          :label="navlinkProps.TEAM.label"
          @close-menu="hide"
        />
        <navbar-link
          :to="navlinkProps.CODEX.to"
          :label="navlinkProps.CODEX.label"
          @close-menu="hide"
        />
        <navbar-link
          v-if="isVisible"
          :to="navlinkProps.LOGIN.to"
          :label="navlinkProps.LOGIN.label"
          @close-menu="hide"
        />
      </div>

      <!-- 3th NAVBAR FLEX ITEM: Login Icon  -->
      <navbar-user-link
        class="max-laptop:hidden"
        :to="navlinkProps.LOGIN.to"
      ></navbar-user-link>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
import NavbarUserLink from "./NavbarUserLink.vue";
import NavbarBurger from "./NavbarBurger.vue";
import LogoMain from "@/components/logos/LogoMain.vue";
import { useToggle } from "@/composables/useToggle";
import { ref, computed, watchEffect } from "vue";

export default {
  name: "Navbar",
  components: {
    NavbarLink,
    NavbarBurger,
    NavbarUserLink,
    LogoMain,
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
