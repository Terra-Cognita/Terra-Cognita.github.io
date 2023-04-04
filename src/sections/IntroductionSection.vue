<template>
  <tc-section id="introduction" class="bg-forest-500">
    <div class="columns-1 md:columns-2">
      <div class="aspect-auto w-full">
        <div class="title text-sand-900">{{ $t("introduction.TITLE") }}</div>
        <div>{{ $t("introduction.TEXT") }}</div>
      </div>

      <div class="aspect-video w-full max-sm:mt-6">
        <iframe
          id="yt-video"
          class="aspect-video w-full"
          src="https://www.youtube.com/embed/HY2I8T0BlVQ"
          title="TC intro video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </tc-section>
</template>

<script>
export default {
  name: "IntroductionSection",
  components: {},
  setup() {
    return {};
  },
};
</script>
