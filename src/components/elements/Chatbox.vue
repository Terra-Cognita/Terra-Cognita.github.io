<template>
  <div
    id="chatbox-element"
    ref="el"
    class="sticky right-0 z-50 translate-y-2"
    :style="keyboardRespStyle"
  >
    <chatbox-window
      class="absolute bottom-11 right-5 laptop:bottom-20 laptop:right-16"
      :isOpen="isVisible"
      v-show="isVisible"
    ></chatbox-window>
    <chatbox-button
      class="absolute bottom-0 right-1 laptop:bottom-0 laptop:right-5"
      :class="{ '!touch-none': isVisible }"
      @toggle-chat="toggle"
    ></chatbox-button>
  </div>
</template>

<script>
import { useToggle } from "@/composables/useToggle";
import { useKeyboard } from "../../composables/useKeyboard";
import ChatboxButton from "./ChatboxButton.vue";
import ChatboxWindow from "./ChatboxWindow.vue";
import { ref, computed, watch, nextTick } from "vue";

export default {
  name: "ChatboxElement",
  components: {
    ChatboxButton,
    ChatboxWindow,
  },
  emits: ["isOpen", "isClosed"],
  setup(props, { emit }) {
    // open/close chatbox state control refs
    let { isVisible, toggle } = useToggle();

    watch(
      // emit state to parent
      () => isVisible.value,
      () => {
        if (isVisible.value) {
          emit("isOpen");
        } else {
          emit("isClosed");
        }
      },
      { immediate: true }
    );

    // keyboard state
    let { keyboardStatus, displayOffsetBottom } = useKeyboard();
    const el = ref(null);
    const defaultBottomPos = 16; // 16px === tailwind < bottom-4 >
    const responsiveBottomPos = ref(defaultBottomPos);

    watch(
      () => keyboardStatus.value,
      async (value, oldValue) => {
        if (value !== oldValue) {
          await nextTick();
          if (value) {
            responsiveBottomPos.value =
              window.visualViewport.height -
              el.value.getBoundingClientRect().bottom;
          } else {
            responsiveBottomPos.value = defaultBottomPos;
          }
          // element still out of view
          if (
            el.value.getBoundingClientRect().bottom >
            window.visualViewport.height
          ) {
            responsiveBottomPos.value =
              displayOffsetBottom.value + defaultBottomPos;
          }
        }
      }
    );

    const keyboardRespStyle = computed(
      () => `bottom: ${responsiveBottomPos.value.toString()}px`
    );

    return {
      el,
      keyboardRespStyle,
      isVisible,
      toggle,
    };
  },
};
</script>
