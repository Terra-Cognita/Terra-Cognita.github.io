<template>
  <div
    id="navbar-menu-mobile"
    class="items-center text-right shadow-md shadow-tc_sky-900"
  >
    <div
      id="menu-header"
      class="block rounded-t-lg bg-tc_sand-100/[.1] pt-2 pb-3"
    >
      <span class="text-transparent">header content</span>
    </div>
    <div id="menu-content" class="bg-tc_sky-700/[.95]">
      <navbar-link
        class="px-4"
        :to="navLinks.WELCOME.to"
        @click="$emit('closeMenu')"
      >
        {{ navLinks.WELCOME.label }}
      </navbar-link>
      <navbar-link
        class="px-4"
        :to="navLinks.GAMEPLAY.to"
        @click="$emit('closeMenu')"
      >
        {{ navLinks.GAMEPLAY.label }}
      </navbar-link>
      <navbar-link
        class="px-4"
        :to="navLinks.TEAM.to"
        @click="$emit('closeMenu')"
      >
        {{ navLinks.TEAM.label }}
      </navbar-link>
      <navbar-link
        class="px-4"
        :to="navLinks.CODEX.to"
        @click="$emit('closeMenu')"
      >
        {{ navLinks.CODEX.label }}
      </navbar-link>
      <navbar-link
        class="px-4"
        :to="navLinks.LOGIN.to"
        @click="$emit('closeMenu')"
      >
        {{ navLinks.LOGIN.label }}
      </navbar-link>
      <hr class="border-tc_sand-100 py-1 laptop:hidden" />
      <player class="px-4 py-1"></player>
    </div>
  </div>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
import Player from "../Player.vue";

export default {
  components: {
    NavbarLink,
    Player,
  },
  props: {
    navLinks: Object,
  },
  setup() {
    return {};
  },
};
</script>
