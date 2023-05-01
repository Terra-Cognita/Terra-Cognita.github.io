<template>
  <div id="chatbox-element" class="fixed bottom-2 right-0">
    <chatbox-window
      class="absolute bottom-20 right-5 laptop:right-5"
      v-show="isVisible"
    ></chatbox-window>
    <chatbox-button
      class="absolute bottom-0 right-5"
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
