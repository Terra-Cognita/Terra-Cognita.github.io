<template>
  <section id="chatbox__display">
    <div id="chatbox__messages">
      <div id="chatbox__history" v-for="message in chatHistory" :key="message.id">
        <chatbox-message :type="message.sender">{{message.text}}</chatbox-message>
      </div>
      <div id="message__item--typing">
      </div>
    </div>
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
    const { chatHistory } = storeToRefs(chatStore);

    return {chatHistory}
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
  box-shadow: inset 0 0 5px rgb(74, 178, 238);
  border-radius: 10px;
}
#chatbox__messages::-webkit-scrollbar-thumb {
  background: rgba(43, 122, 168, 0.719);
  border-radius: 10px;
}
#message__item--typing {
  position: relative;
  display: flex;
  font-size: 70%;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: 18px;
}
</style>
