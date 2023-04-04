<template>
  <tc-hero class="h-28 bg-banner-1 bg-top md:h-56"></tc-hero>
  <login-section></login-section>
</template>

<script>
import LoginSection from "@/sections/LoginSection.vue";

export default {
  name: "LoginPage",
  components: {
    LoginSection,
  },
  setup() {
    return {};
  },
};
</script>
