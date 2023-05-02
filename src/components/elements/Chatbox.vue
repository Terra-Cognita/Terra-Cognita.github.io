<template>
  <div id="chatbox-element" class="sticky bottom-4 right-0 z-50 translate-y-2">
    <chatbox-window
      class="absolute bottom-10 right-5 laptop:bottom-20 laptop:right-5"
      v-show="isVisible"
    ></chatbox-window>
    <chatbox-button
      class="absolute bottom-0 right-1 laptop:bottom-0 laptop:right-5"
      @toggle-chat="toggle"
    ></chatbox-button>
  </div>
</template>

<script>
import { useToggle } from "@/composables/useToggle";
import ChatboxButton from "./ChatboxButton.vue";
import ChatboxWindow from "./ChatboxWindow.vue";

export default {
  name: "ChatboxElement",
  components: {
    ChatboxButton,
    ChatboxWindow,
  },
  setup() {
    let { isVisible, toggle } = useToggle();
    return {
      isVisible,
      toggle,
    };
  },
};
</script>
