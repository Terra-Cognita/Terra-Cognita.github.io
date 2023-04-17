<template>
  <footer class="bg-tc_sky-900">
    <div class="tc-px flex w-full flex-row items-center justify-between pt-5">
      <div id="footer-logo">
        <tc-logo></tc-logo>
      </div>
      <div
        id="footer-icons"
        class="mt-4 flex space-x-6 laptop:mt-0 laptop:justify-center"
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
        <a href="https://github.com/Terra-Cognita" target="_blank">
          <linkedin-icon
            class="icon fill-tc_magic-sky stroke-tc_magic-sky"
          ></linkedin-icon>
          <span class="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
    <hr class="my-6 mx-[3vw] border-tc_magic-sky laptop:my-8" />
    <div class="tc-px pb-10">
      <span class="text-sand-100 block text-center text-xs laptop:text-sm"
        >© Terra Cognita 2023. The land of discovery.</span
      >
    </div>
  </footer>
</template>

<script>
import EmailIcon from "@/components/icons/EmailIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import TcLogo from "./TcLogo.vue";

export default {
  name: "Footer",
  components: {
    EmailIcon,
    TwitterIcon,
    LinkedinIcon,
    TcLogo,
  },
  setup() {
    return {};
  },
};
</script>
