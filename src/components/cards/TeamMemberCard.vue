<template>
  <div
    id="team-member-card"
    ref="el"
    class="container flex flex-col max-laptop:basis-[60%]"
  >
    <div id="card-content">
      <div id="card-avatar">
        <avatar-card :id="id" :active="false"></avatar-card>
      </div>

      <div
        id="card-icons"
        class="flex flex-row justify-center justify-items-center space-x-5"
      >
        <a :href="$t(`team.MEMBERS.${id}.MEDIAS.TECH`)" target="_blank">
          <behance-icon
            v-if="isBehance"
            class="icon fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
          ></behance-icon>
          <github-icon
            v-else="!isBehance"
            class="icon fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
          ></github-icon>
        </a>
        <a :href="$t(`team.MEMBERS.${id}.MEDIAS.LINKEDIN`)" target="_blank">
          <linkedin-icon
            class="icon fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
          ></linkedin-icon>
        </a>
        <a :href="$t(`team.MEMBERS.${id}.MEDIAS.EMAIL`)" target="_blank">
          <email-icon
            class="icon fill-tc_sand-100 stroke-tc_sand-100 hover:fill-tc_magic-sky hover:stroke-tc_magic-sky"
          ></email-icon>
        </a>
      </div>

      <div
        id="card-info"
        class="mx-auto mt-3 w-11/12 text-center max-laptop:text-sm laptop:mt-5"
      >
        <div class="font-bold uppercase text-tc_magic-sand">
          {{ $t(`team.MEMBERS.${id}.NAME`) }}
        </div>
        <div>
          {{ $t(`team.MEMBERS.${id}.OCCUPATION`) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarCard from "@/components/cards/AvatarCard.vue";
import BehanceIcon from "@/components/icons/BehanceIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import { ref, computed } from "vue";

export default {
  name: "CardTeamMember",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    AvatarCard,
    BehanceIcon,
    EmailIcon,
    GithubIcon,
    LinkedinIcon,
  },
  setup(props, { expose }) {
    let isBehance;
    props.id === "FelipeMarcel" ? (isBehance = true) : (isBehance = false);

    const el = ref(null);
    const centerX = computed(() => {
      return el.value.offsetLeft + el.value.offsetWidth / 2;
    });

    expose({
      id: props.id,
      centerX: centerX,
    });
    return {
      el,
      isBehance,
    };
  },
};
</script>
