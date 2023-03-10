<template>
  <section id="newsletter-section" class="hero is-forest-3">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="title">
          {{ $t('newsletter.TITLE') }}
        </div>
        <p v-html="$t('newsletter.TEXT')"></p>

        <o-button class="is-sand-2" rounded>{{ $t('newsletter.BUTTON') }}</o-button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "NewsletterSection",
  components: {
  },
  setup() {
    return {}
  }
}
</script>


<style scoped>
</style>
