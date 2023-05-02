<template>
  <div id="page-codex">
    <tc-breathing
      class="bg-bgBanner bg-cover bg-top bg-no-repeat"
    ></tc-breathing>
    <codex-section></codex-section>
  </div>
</template>

<script>
import CodexSection from "@/sections/CodexSection.vue";

export default {
  name: "CodexPage",
  components: {
    CodexSection,
  },
  setup() {
    return {};
  },
};
</script>
