<template>
  <div
    id="chatbox-window"
    class="z-40 w-[90%] bg-bgChatWindow bg-contain bg-clip-border bg-center bg-no-repeat bg-origin-border p-2 text-sm transition-all duration-200 ease-in-out laptop:!h-[70vh] laptop:w-[450px] laptop:text-base"
    :style="chatHeightStyle"
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
import { ref, computed } from "vue";

export default {
  name: "ChatboxWindow",
  components: {
    ChatboxDisplay,
    ChatboxTypingWarning,
    ChatboxInput,
  },
  setup() {
    const windowHeight = window.innerHeight;
    const visualViewport = window.visualViewport;

    const isLargeScreen = computed(() => (windowHeight > 800 ? true : false));
    function getHeight(h) {
      return isLargeScreen.value ? Math.round(0.7 * h) : Math.round(0.85 * h);
    }

    const originalHeight = getHeight(windowHeight);
    const chatHeight = ref(originalHeight);

    visualViewport.addEventListener("resize", (event) => {
      let viewportHeight = event.target.height;
      if (viewportHeight / windowHeight < 0.9) {
        // hasVirtualKeyboard
        chatHeight.value = getHeight(viewportHeight);
      } else {
        chatHeight.value = getHeight(originalHeight);
      }
    });

    const chatHeightStyle = computed(
      () => `height:${chatHeight.value.toString()}px`
    );

    return {
      chatHeightStyle,
    };
  },
};
</script>
