<template>
  <section id="chatbox__display">
    <div id="chatbox__messages">
      <div id="chatbox__history" v-for="message in chatHistory" :key="message.id">
        <chatbox-message :type="message.sender">{{message.text}}</chatbox-message>
      </div>
    </div>
    
    <input id="message__item--typing" v-if="isHearingBot"
      class="input" type="text" 
      value="Orimbu is typing..." readonly>
    <input id="message__item--typing" v-if="!isHearingBot"
      class="input" type="text" 
      value="" readonly>

  </section>
</template>

<script>
import ChatboxMessage from './ChatboxMessage.vue'
import { useChatStore } from '../store/chat.js';
import { storeToRefs } from 'pinia'
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';

export default {
  name: "ChatboxDisplay",
  components: {
    ChatboxMessage
  },
  setup() {
    const chatStore = useChatStore()
    const { chatHistory, isHearingBot } = storeToRefs(chatStore);

    const isTypingMsg = computed(() => {
      if( isHearingBot ) { return "Orimbu is typing..." }
      else { return "" }
    })

    return {chatHistory, isHearingBot, isTypingMsg}
  }
}
</script>

<style lang="scss" scoped>
#chatbox__messages {
  position: relative;
  margin-top: auto;
  display: flex;
  height: calc(100vh - 12rem - 12rem);
  overflow-y: scroll;
  flex-direction: column-reverse;
  padding: 0 0.5em 0 1em;
  font-size: 0.85vw;
}
// scroll bar formatting
#chatbox__messages::-webkit-scrollbar {
  width: 1vmin;
}
#chatbox__messages::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(244, 246, 246, 0.719);
  border-radius: 10px;
}
#chatbox__messages::-webkit-scrollbar-thumb {
  background: rgba(214, 216, 218, 0.719);
  border-radius: 10px;
}
#message__item--typing {
  padding: 0;
  background: transparent;
  border: none;
  font-size: 60%;
  margin-left: 0.5em;
}
</style>
