<template>
  <img
    :src="profilePic"
    alt="Chat profile image"
    class="h-10 w-10 rounded-full"
    :class="{ 'w-8': isOrimbu }"
  />
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";
import { ref } from "vue";

export default {
  props: {
    senderId: String,
  },
  setup(props) {
    const BOT_ID = String(import.meta.env.VITE_BOT_ID);
    const { avatarChatUser, avatarChatOrimbu } = useAssets();

    const isOrimbu = ref(props.senderId === BOT_ID);
    let profilePic;

    isOrimbu.value
      ? (profilePic = avatarChatOrimbu)
      : (profilePic = avatarChatUser);
    return {
      isOrimbu,
      profilePic,
    };
  },
};
</script>
