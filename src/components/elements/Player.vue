<template>
  <div id="player" class="flex items-center">
    <button id="player-control" @click="playerControl">
      <div
        id="control-toggle"
        class="flex flex-row rounded-full bg-tc_sky-300 px-0 py-0"
        :class="{ '!bg-tc_sky-100': isPlaying }"
      >
        <div
          id="control-text"
          class="inline-block pl-3 pr-2 align-middle text-base font-bold text-tc_sky-900"
          :class="{ 'translate-x-5': isPlaying }"
        >
          {{ playerControlText }}
        </div>
        <play-icon
          class="h-6 w-auto fill-tc_sky-900 transition-transform ease-in"
          :class="{ '-translate-x-10': isPlaying }"
        ></play-icon>
      </div>
    </button>
  </div>
</template>

<script>
import PlayIcon from "@/components/icons/PlayIcon.vue";
import { useAssets } from "@/composables/useAssets.js";
import { Howl, Howler } from "howler";
import { ref, computed } from "vue";

export default {
  name: "Player",
  components: {
    PlayIcon,
  },
  setup() {
    const sound = ref(null);

    const { soundWelcomeToTC } = useAssets();
    const musicFiles = [soundWelcomeToTC];

    const isPlaying = computed(() =>
      sound.value ? sound.value.playing() : false
    );

    function createHowler() {
      sound.value = new Howl({
        src: musicFiles,
        loop: true,
        volume: 0.5,
        onplay: function () {},
        onpause: function () {},
      });
    }

    function playerControl() {
      if (sound.value === null) {
        createHowler();
      }
      sound.value.playing() ? sound.value.pause() : sound.value.play();
    }

    const playerControlText = computed(() => (isPlaying.value ? "Off" : "On"));

    return {
      playerControl,
      playerControlText,
      isPlaying,
    };
  },
};
</script>
