<template>
  <div
    id="chatbox-window"
    class="z-40 w-[90%] bg-bgChatWindow bg-contain bg-clip-border bg-center bg-no-repeat bg-origin-border p-2 text-sm transition-all duration-200 ease-in-out laptop:!h-[70vh] laptop:w-[450px] laptop:text-base"
    :style="keyboardRespStyle"
  >
    <div
      class="relative grid h-full grid-rows-1 place-content-stretch gap-y-1 rounded-md rounded-tl-[70px] py-4 backdrop-blur-sm laptop:rounded-tl-[100px]"
    >
      <chatbox-display></chatbox-display>
      <chatbox-typing-warning></chatbox-typing-warning>
      <chatbox-input></chatbox-input>
    </div>
  </div>
</template>

<script>
import ChatboxDisplay from "./chatbox_subcomponents/ChatboxDisplay.vue";
import ChatboxTypingWarning from "./chatbox_subcomponents/ChatboxTypingWarning.vue";
import ChatboxInput from "./chatbox_subcomponents/ChatboxInput.vue";
import { ref, computed, watch, watchEffect } from "vue";
import { useKeyboard } from "../../composables/useKeyboard";

export default {
  name: "ChatboxWindow",
  components: {
    ChatboxDisplay,
    ChatboxTypingWarning,
    ChatboxInput,
  },
  setup() {
    const SCREEN_PX_TH = 800;

    let { displayHeight } = useKeyboard();

    const isLargeScreen = computed(() =>
      window.innerHeight > SCREEN_PX_TH ? true : false
    );

    const chatHeight = ref(computeChatHeight(displayHeight.value));

    function computeChatHeight(h) {
      return isLargeScreen.value ? Math.round(0.7 * h) : Math.round(0.85 * h);
    }

    watch(
      () => displayHeight.value,
      () => {
        chatHeight.value = computeChatHeight(displayHeight.value);
      }
    );

    const keyboardRespStyle = computed(
      () => `height:${chatHeight.value.toString()}px`
    );

    return {
      keyboardRespStyle,
    };
  },
};
</script>
