<template>
  <div
    id="chatbox-element"
    ref="chatboxEl"
    class="sticky bottom-4 right-0 z-50 translate-y-2"
    :style="keyboardRespStyle"
  >
    <chatbox-window
      class="absolute bottom-11 right-5 laptop:bottom-20 laptop:right-16"
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
import { useKeyboard } from "../../composables/useKeyboard";
import ChatboxButton from "./ChatboxButton.vue";
import ChatboxWindow from "./ChatboxWindow.vue";
import { ref, computed, onMounted, watch } from "vue";

export default {
  name: "ChatboxElement",
  components: {
    ChatboxButton,
    ChatboxWindow,
  },
  setup() {
    let { isVisible, toggle } = useToggle();
    let { keyboardStatus } = useKeyboard();

    const chatboxEl = ref(null);
    const chatboxDefaultPos = ref(0);
    const chatboxBottomPos = ref(0);

    onMounted(() => {
      chatboxDefaultPos.value = chatboxEl.value.getBoundingClientRect().bottom;
      chatboxBottomPos.value = chatboxDefaultPos.value;
    });

    watch(
      () => keyboardStatus.value,
      () => {
        chatboxBottomPos.value = chatboxDefaultPos.value;
      }
    );

    const keyboardRespStyle = computed(
      () => `bottom: ${chatboxBottomPos.value.toString()}px`
    );

    return {
      chatboxEl,
      keyboardRespStyle,
      isVisible,
      toggle,
    };
  },
};
</script>
