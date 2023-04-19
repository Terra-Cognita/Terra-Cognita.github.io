<template>
  <div id="tc-start">
    <tc-hero class="bg-bgBanner">
      <div
        class="flex h-full flex-col content-center justify-items-stretch p-10"
      >
        <div class="flex grow justify-center p-14">
          <iframe
            id="yt-video"
            class="aspect-video"
            src="https://www.youtube.com/embed/HY2I8T0BlVQ"
            title="TC intro video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
          </iframe>
        </div>
        <div
          class="title flex-none text-center !text-tc_sky-100"
          v-html="$t('start.bannerVideo.TITLE')"
        ></div>
      </div>
    </tc-hero>
  </div>
</template>

<script>
export default {
  name: "StartSection",
  setup() {
    return {};
  },
};
</script>
