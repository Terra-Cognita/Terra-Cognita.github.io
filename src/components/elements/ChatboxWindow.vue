<template>
  <div
    id="chatbox-window"
    class="bg-magic-sky h-[70vh] w-96 rounded-md p-3 text-sm shadow-2xl shadow-sky-800 transition-all duration-500 ease-in-out laptop:w-[45vw] laptop:text-base desktop:w-[30vw]"
  >
    <div class="grid h-full grid-rows-1 place-content-stretch gap-y-1">
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
  },
};
</script>