<template>
  <tc-section id="gameplay" class="">
    <img class="image-bg" background-image :src="imgCrystalElement">

    <div class="tc-smalltitle">Gameplay</div>
    <div class="tc-title">
      {{ $t('gameplay.TITLE') }}
    </div>

    <div class="columns is-variable is-8">
      <div class="column is-one-third">
        <frame-crystal-1>{{ $t('gameplay.FRAME_1_TEXT') }}</frame-crystal-1>
      </div>
      <div class="column is-one-third">
        <frame-crystal-3>{{ $t('gameplay.FRAME_2_TEXT') }}</frame-crystal-3>
      </div>
      <div class="column is-one-third">
        <frame-crystal-4>{{ $t('gameplay.FRAME_3_TEXT') }}</frame-crystal-4>
      </div>
    </div>
  </tc-section>
</template>

<script>
import { useAssets } from '../composables/useAssets.js'
import TcSection from '../layouts/TcSection.vue'
import FrameCrystal1 from "../components/FrameCrystal1.vue"
import FrameCrystal3 from "../components/FrameCrystal3.vue"
import FrameCrystal4 from '../components/FrameCrystal4.vue'

export default {
  name: "GameplaySection",
  components: {
    TcSection,
    FrameCrystal1,
    FrameCrystal3,
    FrameCrystal4
  },
  setup() {
    const { imgCrystalElement } = useAssets()
    return {
      imgCrystalElement
    }
  }
}
</script>

<style lang="scss" scoped>
#gameplay {
  position: relative;
  overflow: hidden;
}
.image-bg {
  width: 40vw;
  object-fit: fill;
  object-position: center 0%;
  opacity: 0.1;
  position: absolute;
  left:0;
  right:0;
  // top: 0;
  // bottom:0;
  margin:auto;
  -webkit-transform: rotate(180deg); /* Safari and Chrome */
  -moz-transform: rotate(180deg);   /* Firefox */
  -ms-transform: rotate(180deg);   /* IE 9 */
  -o-transform: rotate(180deg);   /* Opera */
  transform: rotate(180deg);
}
</style>
