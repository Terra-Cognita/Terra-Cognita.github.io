<template>
  <div class="headline container">
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <div class="title" v-html="title"></div>
        <div class="subtitle">{{ subtitle }}</div>
        <div>{{ text }}</div>
        <tc-button>{{ buttonMsg }}</tc-button>
      </div>
      <img class="mx-auto object-contain" :src="figFile" />
    </div>
  </div>
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
      default: "Discover",
    },
  },
  setup(props) {
    return {};
  },
};
</script>
