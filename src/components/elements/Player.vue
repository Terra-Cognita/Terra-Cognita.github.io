<template>
  <div id="player">
    <button
      id="player-control"
      @click="isPlaying ? sound.pause() : sound.play()"
    >
      <player-on class="h-6 w-auto" :class="{ hidden: isPlaying }"></player-on>
      <player-off
        class="h-6 w-auto"
        :class="{ hidden: !isPlaying }"
      ></player-off>
    </button>
  </div>
</template>

<script>
import PlayerOn from "@/components/icons/PlayerOn.vue";
import PlayerOff from "@/components/icons/PlayerOff.vue";
import { Howl, Howler } from "howler";
import { ref } from "vue";

export default {
  name: "Player",
  components: {
    PlayerOn,
    PlayerOff,
  },
  setup() {
    const musicFiles = [
      "src/assets/sounds/WelcomeToTerraCognita_PortScoretest.mp3",
    ];
    const isPlaying = ref(false);

    const sound = ref();
    sound.value = new Howl({
      src: musicFiles,
      autoplay: false,
      loop: true,
      volume: 0.5,
      onplay: function () {
        isPlaying.value = true;
      },
      onpause: function () {
        isPlaying.value = false;
      },
    });

    return {
      isPlaying,
      sound,
    };
  },
};
</script>
