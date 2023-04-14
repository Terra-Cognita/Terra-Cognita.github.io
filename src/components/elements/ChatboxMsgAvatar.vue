<template>
  <img
    :src="profilePic"
    alt="Chat profile image"
    class="h-10 w-10 rounded-full"
  />
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";

export default {
  props: {
    senderId: String,
  },
  setup(props) {
    const BOT_ID = String(import.meta.env.VITE_BOT_ID);
    const { imgProfileOrimbu, imgProfileUser } = useAssets();
    let profilePic;
    props.senderId === BOT_ID
      ? (profilePic = imgProfileOrimbu)
      : (profilePic = imgProfileUser);
    return {
      profilePic,
    };
  },
};
</script>
