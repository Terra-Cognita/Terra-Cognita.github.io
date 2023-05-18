<template>
  <div :id="`avatar-image-card`">
    <img
      :src="avatar"
      class="not-draggable avatar-card-small mx-auto block"
      :class="{ 'avatar-card-medium': active }"
    />
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
    active: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { expose }) {
    const { avatarTeamMale, avatarTeamFemale } = useAssets();

    const teamAvatars = {
      VictorCorcino: avatarTeamMale,
      LucioBaglione: avatarTeamMale,
      PhilKhoo: avatarTeamMale,
      FilipBlagojevic: avatarTeamMale,
      FelipeMarcel: avatarTeamMale,
      JulianaMattos: avatarTeamFemale,
      MarieBarrau: avatarTeamFemale,
    };

    let avatar = teamAvatars[props.id];

    expose({ id: props.id });
    return {
      avatar,
    };
  },
};
</script>
