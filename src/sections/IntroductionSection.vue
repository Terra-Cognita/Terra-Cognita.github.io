<template>
  <tc-section id="introduction" class="bg-forest-500">
    <div class="title text-center">
      {{ $t("introduction.TITLE") }}
    </div>
    <div class="columns-1 laptop:columns-2 laptop:gap-10">
      <div class="laptop:break-after-column">
        {{ $t("introduction.PARAGRAPH_1") }}
      </div>
      <div class="max-laptop:mt-5">{{ $t("introduction.PARAGRAPH_2") }}</div>
    </div>
  </tc-section>
</template>

<script>
export default {
  name: "IntroductionSection",
  components: {},
  setup() {
    return {};
  },
};
</script>
