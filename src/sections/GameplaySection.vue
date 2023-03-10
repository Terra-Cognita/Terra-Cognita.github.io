<template>
  <section id="gameplay-section" class="hero is-forest-3">
    <div class="hero-body">
      <section-naming>A new world</section-naming>
      <div class="title">
        {{ $t('gameplay.TITLE') }}
      </div>

      <div class="columns">
        <div class="column is-one-third">
          <frame-gem-1>{{ $t('gameplay.FRAME_1_TEXT') }}</frame-gem-1>
        </div>
        <div class="column is-one-third">
          <frame-gem-3>{{ $t('gameplay.FRAME_2_TEXT') }}</frame-gem-3>
        </div>
        <div class="column is-one-third">
          <frame-gem-4>{{ $t('gameplay.FRAME_3_TEXT') }}</frame-gem-4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionNaming from "../components/SectionNaming.vue"
import FrameGem1 from "../components/FrameGem1.vue"
import FrameGem3 from "../components/FrameGem3.vue"
import FrameGem4 from '../components/FrameGem4.vue'

export default {
  name: "GameplaySection",
  components: {
    SectionNaming,
    FrameGem1,
    FrameGem3,
    FrameGem4
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
