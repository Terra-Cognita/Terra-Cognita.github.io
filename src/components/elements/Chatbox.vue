<template>
  <div id="chatbox-element" class="fixed bottom-5 right-0">
    <chatbox-window
      class="absolute bottom-0 right-5 laptop:right-9"
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
import ChatboxButton from "@/components/elements/ChatboxButton.vue";
import ChatboxWindow from "@/components/elements/ChatboxWindow.vue";

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
