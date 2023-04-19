<template>
  <div class="flex flex-col">
    <img class="mx-auto block h-auto w-4/5" :src="avatar" />

    <div class="grid grid-cols-3 justify-items-center">
      <a :href="$t(`team.MEMBERS.${id}.MEDIAS.TECH`)" target="_blank">
        <behance-icon
          v-if="isBehance"
          class="h-10 w-10 fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
        ></behance-icon>
        <github-icon
          v-else="!isBehance"
          class="h-10 w-10 fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
        ></github-icon>
      </a>
      <a :href="$t(`team.MEMBERS.${id}.MEDIAS.LINKEDIN`)" target="_blank">
        <linkedin-icon
          class="h-10 w-10 fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
        ></linkedin-icon>
      </a>
      <a :href="$t(`team.MEMBERS.${id}.MEDIAS.EMAIL`)" target="_blank">
        <email-icon
          class="h-10 w-10 fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
        ></email-icon>
      </a>
    </div>

    <div class="my-5 text-center">
      <div class="font-bold uppercase text-tc_magic-sand max-laptop:text-xs">
        {{ $t(`team.MEMBERS.${id}.NAME`) }}
      </div>
      <div class="max-laptop:text-xs laptop:mb-6">
        {{ $t(`team.MEMBERS.${id}.OCCUPATION`) }}
      </div>
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
  props: {
    id: {
      type: String,
      required: true,
    },
  },
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
