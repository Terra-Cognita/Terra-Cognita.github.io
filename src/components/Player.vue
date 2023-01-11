<template>
  <section id="player-control" class="level p-2">

    <a id="player-button-control" class="level-item mr-4" @click="soundControl()">
      <o-icon pack="mdi" :icon="buttonControlIcon" variant="dark"></o-icon>
    </a>
    
    <div id="player-volume-control" class="level-item">
      <o-tooltip label="Mute">
        <a id="player-button-mute" class="mr-2" @click="soundControl()">
          <o-icon pack="mdi" :icon="volumeControlIcon" variant="dark"></o-icon>
        </a>
      </o-tooltip>
      <o-slider id="player-slider-volume" 
        v-model="volumeOutput"
        :min="0" :max="1" :step="0.1" 
        size="small" variant="dark" 
        :tooltip="false" rounded>
      </o-slider>
    </div>

  </section>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import {Howl, Howler} from 'howler';

export default {
  name: "Player",
  setup() {
    
    const volumeOutput = ref(0.5);

    const files = ['src/assets/sounds/WelcomeToTerraCognita_PortScoretest.mp3']
    var sound = new Howl({
      src: files,
      autoplay: true,
      loop: true,
      volume: volumeOutput.value,
      onload: function() {
        console.log('>> onLoad')
        console.log('sound.state()', sound.state())
      },
      onend: function() {
        console.log('Finished!');
      }
    });
    console.log('sound.state()', sound.state())

    // sound.once('load', function(){
    //   sound.play();
    // });
    
    const isPlaying = computed(() => sound.playing());
    const buttonControlIcon = computed(() => {
      console.log('buttonControlIcon: ', isPlaying.value)
      return isPlaying.value ? 'pause-circle' : 'play-circle'
    })
    const volumeControlIcon = computed(() => {
      console.log('volumeControlIcon: ')
      return 'volume-medium' // 'volume-high', 'volume-low', 'volume-off', 'volume-mute'
    })


    console.log('isPlaying.value', isPlaying.value)
    watchEffect(() => {
      console.log('watchEffect')
      isPlaying.value = sound.playing()
      console.log('isPlaying.value', isPlaying.value)
    })

    function soundControl() {
      if(isPlaying.value) {
        sound.pause()
      }
      else if(!isPlaying.value) {
        sound.play()
      }
    }

    return { buttonControlIcon, volumeControlIcon, volumeOutput, soundControl}
  }
}
</script>

<style lang="scss" scoped>
#player-control {
  // background-color: rgba(45, 140, 195, 0.8);
  flex-basis: content;
  flex-grow: 3;
}
#player-button-control {
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