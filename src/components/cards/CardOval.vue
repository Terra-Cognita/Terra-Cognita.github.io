<template>
  <frame-oval class="fill-tc_magic-sky stroke-tc_magic-sky"></frame-oval>
  <div class="mt-5 text-center font-bold uppercase max-laptop:text-xs">
    {{ title }}
  </div>
  <div class="mt-2 text-center max-laptop:text-xs">
    {{ text }}
  </div>
</template>

<script>
import FrameOval from "@/components/frames/FrameOval.vue";
export default {
  components: {
    FrameOval,
  },
  props: {
    title: String,
    text: String,
  },
  setup() {
    return {};
  },
};
</script>
