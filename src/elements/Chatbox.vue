<template>
  <section id="chatbox__element">

    <chatbox-display></chatbox-display>
    
    <textarea id="chatbox__user-input" rows="2"
      class="textarea is-small has-fixed-size message__item" 
      v-model="userInputMsg"
      :disabled="isHearingBot"
      v-focus="!isHearingBot"
      @keyup.enter="onEnterMessage()"
    />

    <!-- <button @click="reset()">{{isHearingBot}}</button>
    <button @click="log()">LOG</button> -->

  </section>
</template>

<script>
import { useChatStore } from '../store/chat.js';
import { storeToRefs } from 'pinia'
import ChatboxDisplay from "../components/ChatboxDisplay.vue"
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { watchEffect } from 'vue'

export default {
  name: "Chatbox",
  components: {
    ChatboxDisplay
  },
  setup() {
    const chatStore = useChatStore()
    const { isHearingBot } = storeToRefs(chatStore);

    const userInputMsg = ref("")

    // TEMPORARY
    function reset() {
      chatStore.reset()
    }
    function log() {
      chatStore.log()
    }
    //===============

    function onEnterMessage() {
      if(userInputMsg.value==="") { return }
      chatStore.sendNewMessage(userInputMsg.value)
      userInputMsg.value=""
    }
    
    return {
      isHearingBot,
      userInputMsg,
      onEnterMessage,
      reset,
      log
    }
  }
}
</script>

<style lang="scss" scoped>
#chatbox__element {
  padding: 1em;
  margin-right: 6rem;
  margin-left: 3rem;
  margin-bottom: 0;
  margin-top: auto;
  min-height: 5em;
  border-radius: 6px;
  background: rgba(204, 203, 203, 0.74);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: all .5s ease-in-out;
  // max-height: calc(100vh - 12rem - 5rem); /* #main-view top&bottom padding*/
}
#chatbox__user-input {
  width: 80%;
  border-radius: 9px;
  font-family: inherit;
  text-align: left;
  background: rgba(71, 239, 228, 0.52);
  border: 2px solid rgba(71, 239, 229, 1);
  caret-color: whitesmoke;
}
#chatbox__user-input:focus {
  outline: none;
  background: rgba(71, 239, 229, 1);
}
// scroll bar formatting
#chatbox__user-input::-webkit-scrollbar {
  width: 1vmin;
}
#chatbox__user-input::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(71, 239, 229, 1);
  border-radius: 10px;
}
#chatbox__user-input::-webkit-scrollbar-thumb {
  background: rgba(37, 153, 145, 0.267);
  border-radius: 10px;
}
</style>
