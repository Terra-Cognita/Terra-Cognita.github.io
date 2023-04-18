<template>
  <tc-breathing class="bg-bgBanner bg-cover bg-top bg-no-repeat"></tc-breathing>
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
