<template>
  <router-link :to="{ name: 'home' }">
    <logo-vertical
      class="logo-small fill-white stroke-white laptop:hidden"
    ></logo-vertical>
    <logo-horizontal
      class="logo-small fill-white stroke-white max-laptop:hidden"
    ></logo-horizontal>
  </router-link>
</template>

<script>
import LogoVertical from "@/components/logos/LogoVertical.vue";
import LogoHorizontal from "@/components/logos/LogoHorizontal.vue";

export default {
  name: "Logo",
  components: {
    LogoVertical,
    LogoHorizontal,
  },
};
</script>
