<template>
  <navbar-link :to="to" :hasUnderline="false">
    <login-icon
      class="mx-auto h-[2.5vw] w-[2.5vw] fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
    ></login-icon>
  </navbar-link>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
import LoginIcon from "@/components/icons/LoginIcon.vue";

export default {
  components: {
    NavbarLink,
    LoginIcon,
  },
  props: {
    to: {
      type: Object,
      required: true,
    },
  },
};
</script>
