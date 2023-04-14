<template>
  <div
    class="chat-message mx-3 flex items-end"
    :class="{ 'justify-end': isBot }"
  >
    <message-avatar
      :senderId="sender"
      :class="{ 'order-1': !isBot, 'order-2': isBot }"
    ></message-avatar>
    <message-text
      :texts="messages"
      :class="{ 'order-2': !isBot, 'order-1': isBot }"
    ></message-text>
  </div>
</template>

<script>
import MessageAvatar from "./ChatboxMsgAvatar.vue";
import MessageText from "./ChatboxMsgText.vue";

export default {
  components: {
    MessageAvatar,
    MessageText,
  },
  props: {
    id: Number,
    sender: String,
    messages: Array,
  },
  setup(props) {
    const BOT_ID = String(import.meta.env.VITE_BOT_ID);

    let isBot;
    props.sender === BOT_ID ? (isBot = true) : (isBot = false);

    return {
      isBot,
    };
  },
};
</script>
