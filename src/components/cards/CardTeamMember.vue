<template>
  <div class="flex flex-col">
    <img class="block" :src="avatar" />
    <div class="grid grid-cols-3 justify-items-center">
      <behance-icon
        v-if="isBehance"
        class="h-10 w-10 fill-tc_sand-100 stroke-tc_sand-100"
      ></behance-icon>
      <github-icon
        v-else="!isBehance"
        class="h-10 w-10 fill-tc_sand-100 stroke-tc_sand-100"
      ></github-icon>
      <linkedin-icon
        class="h-10 w-10 fill-tc_sand-100 stroke-tc_sand-100"
      ></linkedin-icon>
      <email-icon
        class="h-10 w-10 fill-tc_sand-100 stroke-tc_sand-100"
      ></email-icon>
    </div>
    <div class="my-5 text-center">
      <div class="font-bold uppercase text-tc_magic-sand max-laptop:text-xs">
        {{ name }}
      </div>
      <div class="max-laptop:text-xs laptop:mb-6">{{ occupation }}</div>
    </div>
  </div>
</template>

<script>
import { useAssets } from "@/composables/useAssets.js";
import BehanceIcon from "@/components/icons/BehanceIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";

export default {
  name: "CardTeamMember",
  props: ["id", "name", "occupation"],
  components: {
    BehanceIcon,
    EmailIcon,
    GithubIcon,
    LinkedinIcon,
  },
  setup(props) {
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
    let isBehance;
    props.id === "FelipeMarcel" ? (isBehance = true) : (isBehance = false);

    return {
      avatar,
      isBehance,
    };
  },
};
</script>
