<template>
  <div
    id="navbar-menu"
    class="mt-4 w-full items-center text-tc_sand-100 laptop:mt-0 laptop:inline-flex laptop:shrink laptop:justify-end laptop:space-x-2 laptop:text-center laptop:text-[1.3vw]"
  >
    <navbar-link :to="navlinkProps.WELCOME.to" @click="$emit('closeMenu')">
      {{ navlinkProps.WELCOME.label }}
    </navbar-link>
    <navbar-link :to="navlinkProps.GAMEPLAY.to" @click="$emit('closeMenu')">
      {{ navlinkProps.GAMEPLAY.label }}
    </navbar-link>
    <navbar-link :to="navlinkProps.TEAM.to" @click="$emit('closeMenu')">
      {{ navlinkProps.TEAM.label }}
    </navbar-link>
    <navbar-link :to="navlinkProps.CODEX.to" @click="$emit('closeMenu')">
      {{ navlinkProps.CODEX.label }}
    </navbar-link>
    <!-- Login access link -->
    <navbar-link
      class="laptop:hidden"
      :to="navlinkProps.LOGIN.to"
      @click="$emit('closeMenu')"
    >
      {{ navlinkProps.LOGIN.label }}
    </navbar-link>
    <navbar-icon-access class="max-laptop:hidden" :to="navlinkProps.LOGIN.to" />
  </div>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
import NavbarIconAccess from "./NavbarIconAccess.vue";

export default {
  components: {
    NavbarLink,
    NavbarIconAccess,
  },
  props: {},
  setup() {
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
      navlinkProps,
    };
  },
};
</script>
