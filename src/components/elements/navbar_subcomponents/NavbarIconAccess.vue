<template>
  <navbar-link :to="to">
    <UserIcon class="h-[2.5vw] w-[2.5vw]" />
  </navbar-link>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
import { UserIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    NavbarLink,
    UserIcon,
  },
  props: {
    to: {
      type: Object,
      required: true,
    },
  },
};
</script>
