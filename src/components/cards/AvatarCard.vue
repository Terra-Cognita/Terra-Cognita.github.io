<template>
  <div :id="`avatar-image-card`">
    <img class="mx-auto block h-auto w-4/5" :src="avatar" />
  </div>
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";

export default {
  name: "Avatar",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props, { expose }) {
    const { maleAvatar, femaleAvatar } = useAssets();

    const teamAvatars = {
      VictorCorcino: maleAvatar,
      LucioBaglione: maleAvatar,
      PhilKhoo: maleAvatar,
      FilipBlagojevic: maleAvatar,
      FelipeMarcel: maleAvatar,
      JulianaMattos: femaleAvatar,
      MarieBarrau: femaleAvatar,
    };

    let avatar = teamAvatars[props.id];

    expose({ id: props.id });
    return {
      avatar,
    };
  },
};
</script>
