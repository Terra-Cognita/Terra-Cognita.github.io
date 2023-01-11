<!-- 

  Submitted to Autoplay policies
    - This file uses howler.js audio library, which defaults to Web Audio API and falls back to HTML5 Audio.
    - This module assumes the minimum required user engagement to address Autoplay policies
      Chrome Policy: (https://developer.chrome.com/blog/autoplay/#audiovideo-elements)
    - Additional code development is required to assure proper functioning without user-engagement assumption

-->
<template>
  <section id="player-control" class="level p-2">

    <a id="player-button-play" class="level-item mr-4" @click="isPlaying ? sound.pause() : sound.play()">
      <o-icon pack="mdi" :icon="buttonPlayIcon" variant="dark"></o-icon>
    </a>
    
    <div id="player-volume-control" class="level-item">
      <o-tooltip label="Mute">
        <a id="player-button-mute" class="mr-2" @click="sound.mute(toMute)">
          <o-icon pack="mdi" :icon="buttonMuteIcon" variant="dark"></o-icon>
        </a>
      </o-tooltip>
      <o-slider id="player-slider-volume" 
        v-model="volumeLevel"
        :min="0" :max="1" :step="0.1" 
        size="small" variant="dark" 
        :tooltip="false" rounded>
      </o-slider>
    </div>

  </section>
</template>

<script>
import { computed, ref, toRef, watch, watchEffect } from 'vue';
import {Howl, Howler} from 'howler';

export default {
  name: "Player",
  setup() {

    const musicFiles = ['src/assets/sounds/WelcomeToTerraCognita_PortScoretest.mp3']
    
    // refs
    const isPlaying = ref(false);
    const toMute = ref(true)
    
    const sound = ref()
    sound.value = new Howl({
      src: musicFiles,
      autoplay: true,
      loop: true,
      volume: 0.5,
      onplay: function() {
        isPlaying.value = true;
      },
      onpause: function() {
        isPlaying.value = false; 
      },
      onmute: function() {
        toMute.value = !toMute.value
      }
    });

    // computed
    const volumeLevel = computed({
      get: () => sound.value.volume(),
      set: (val) => { sound.value.volume(val) }
    })

    const buttonPlayIcon = computed(() => isPlaying.value ? 'pause-circle' : 'play-circle')
    const buttonMuteIcon = computed(() => !toMute.value ? 'volume-mute' : getVolumeLevelIcon(volumeLevel.value))

    // functions
    function getVolumeLevelIcon(index) {
      if (index === 0) { return 'volume-off' }
      else if (index < 0.35) { return 'volume-low' }
      else if (index < 0.70) { return 'volume-medium' }
      else if (index >= 0.70) { return 'volume-high' }
    }

    return { 
      isPlaying,
      toMute,
      volumeLevel, 
      buttonPlayIcon, 
      buttonMuteIcon,
      sound
    }
  }
}
</script>

<style lang="scss" scoped>
#player-control {
  // background-color: rgba(45, 140, 195, 0.8);
  flex-basis: content;
  flex-grow: 3;
}
#player-button-play {
  justify-content: left;
  flex-basis: content;
  flex-grow: 0;
}
#player-volume-control {
  justify-content: right;
  flex-basis: content;
  flex-grow: 3;
}
</style>