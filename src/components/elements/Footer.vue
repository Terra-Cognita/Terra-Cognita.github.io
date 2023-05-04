<template>
  <footer class="bg-tc_sky-900">
    <div
      id="footer-sup"
      class="tc-px flex w-full flex-row items-center justify-between pt-5"
    >
      <div id="footer-logo">
        <logo-horizontal
          class="h-5 w-auto fill-tc_sand-100 stroke-tc_sand-100 laptop:h-8"
        ></logo-horizontal>
      </div>
      <div
        id="footer-icons"
        class="flex space-x-4 laptop:mt-0 laptop:justify-center"
      >
        <a href="#" target="_blank">
          <email-icon
            class="icon fill-tc_magic-sky stroke-tc_magic-sky"
          ></email-icon>
          <span class="sr-only">Email page</span>
        </a>
        <a href="https://twitter.com/TCog1576" target="_blank">
          <twitter-icon
            class="icon fill-tc_magic-sky stroke-tc_magic-sky"
          ></twitter-icon>
          <span class="sr-only">Twitter page</span>
        </a>
        <a href="#" target="_blank">
          <youtube-icon
            class="icon fill-tc_magic-sky stroke-tc_magic-sky"
          ></youtube-icon>
          <span class="sr-only">GitHub account</span>
        </a>
      </div>
    </div>

    <hr class="my-4 mx-[3vw] border-tc_magic-sky laptop:my-8" />

    <div id="footer-inf" class="tc-px pb-10">
      <span class="text-sand-100 block text-center text-xs laptop:text-sm"
        >© Terra Cognita 2023. The land of discovery.</span
      >
    </div>
  </footer>
</template>

<script>
import EmailIcon from "@/components/icons/EmailIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import LogoHorizontal from "@/components/logos/LogoHorizontal.vue";

export default {
  name: "Footer",
  components: {
    EmailIcon,
    TwitterIcon,
    YoutubeIcon,
    LogoHorizontal,
  },
  setup() {
    return {};
  },
};
</script>
