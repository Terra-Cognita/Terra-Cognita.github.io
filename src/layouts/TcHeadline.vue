<template>
  <section>
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="tc-title" v-html="title"></div>
        <div class="tc-subtitle">
          {{ subtitle }}
        </div>
        <div class="tc-text">
          {{ text }}
        </div>
        <div class="buttons is-centered">
          <o-button class="tc-button">{{ buttonMsg }}</o-button>
        </div>
      </div>
      <div class="column is-one-third">
        <img class="headline-img" :src="figFile"/>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    title: String,
    subtitle: String,
    text: String,
    figFile: String,
    buttonMsg: {
      type: String,
      default: 'Discover'
    }
  },
  setup(props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.headline-img {
  max-width: 15rem; 
  height: auto;
  float: right;
}
</style>