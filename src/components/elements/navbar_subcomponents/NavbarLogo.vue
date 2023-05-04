<template>
  <router-link :to="{ name: 'home' }">
    <logo-vertical
      class="h-9 w-auto fill-tc_sand-100 stroke-tc_sand-100 laptop:hidden"
      @click="$emit('closeMenu')"
    ></logo-vertical>
    <logo-horizontal
      class="fill-tc_sand-100 stroke-tc_sand-100 max-laptop:hidden laptop:h-8 laptop:w-auto"
      @click="$emit('closeMenu')"
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
