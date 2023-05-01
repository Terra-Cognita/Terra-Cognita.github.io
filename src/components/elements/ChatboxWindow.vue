<template>
  <div
    id="chatbox-window"
    class="h-[77vh] w-96 rounded-md bg-bgChatWindow bg-contain bg-clip-border bg-center bg-no-repeat bg-origin-border p-3 text-sm transition-all duration-500 ease-in-out laptop:w-[45vw] laptop:text-base desktop:w-[624px]"
  >
    <div
      class="relative z-20 grid h-full grid-rows-1 place-content-stretch gap-y-1"
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

export default {
  name: "ChatboxWindow",
  components: {
    ChatboxDisplay,
    ChatboxTypingWarning,
    ChatboxInput,
  },
  setup() {
    // TEMPORARY
    // function reset() {
    //   chatStore.reset();
    // }
    //===============
    // reset();
    return {};
  },
};
</script>
