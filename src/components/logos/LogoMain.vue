<template>
  <router-link :to="{ name: 'home' }">
    <img class="logo-img" :src="logoWhite" alt="Terra Cognita Logo" />
  </router-link>
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";

export default {
  setup() {
    const { logoWhite } = useAssets();
    return { logoWhite };
  },
};
</script>
