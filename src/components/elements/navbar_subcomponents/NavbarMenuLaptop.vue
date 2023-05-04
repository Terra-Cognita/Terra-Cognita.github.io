<template>
  <div
    id="navbar-menu-laptop"
    class="mt-0 inline-flex w-full shrink items-center justify-end space-x-2 text-center text-base text-tc_sand-100"
  >
    <navbar-link :to="navLinks.WELCOME.to">
      {{ navLinks.WELCOME.label }}
    </navbar-link>
    <navbar-link :to="navLinks.GAMEPLAY.to">
      {{ navLinks.GAMEPLAY.label }}
    </navbar-link>
    <navbar-link :to="navLinks.TEAM.to">
      {{ navLinks.TEAM.label }}
    </navbar-link>
    <navbar-link :to="navLinks.CODEX.to">
      {{ navLinks.CODEX.label }}
    </navbar-link>
    <navbar-icon-access :to="navLinks.LOGIN.to" />
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
  props: {
    navLinks: Object,
  },
  setup() {
    return {};
  },
};
</script>
