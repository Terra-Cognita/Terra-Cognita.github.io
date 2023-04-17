<template>
  <tc-section id="gameplay">
    <div class="section-title">Gameplay</div>
    <div class="title text-sand-900">{{ $t("gameplay.TITLE") }}</div>

    <div class="columns-3">
      <card-oval
        class="fill-tc_magic-sky stroke-tc_magic-sky"
        :title="$t('gameplay.CARD_1.TITLE')"
        :text="$t('gameplay.CARD_1.TEXT')"
      >
      </card-oval>
      <card-oval
        class="fill-tc_magic-sky stroke-tc_magic-sky"
        :title="$t('gameplay.CARD_2.TITLE')"
        :text="$t('gameplay.CARD_2.TEXT')"
      >
      </card-oval>
      <card-oval
        class="fill-tc_magic-sky stroke-tc_magic-sky"
        :title="$t('gameplay.CARD_3.TITLE')"
        :text="$t('gameplay.CARD_3.TEXT')"
      >
      </card-oval>
    </div>
  </tc-section>
</template>

<script>
import CardOval from "@/components/cards/CardOval.vue";

export default {
  name: "GameplaySection",
  components: {
    CardOval,
  },
  setup() {
    return {};
  },
};
</script>
