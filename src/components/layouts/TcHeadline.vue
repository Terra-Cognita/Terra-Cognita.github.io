<template>
  <div class="container">
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <div class="title text-sand-900" v-html="title"></div>
        <div class="subtitle">{{ subtitle }}</div>
        <div>{{ text }}</div>

        <div class="text-center">
          <tc-button>{{ buttonMsg }}</tc-button>
        </div>
      </div>

      <div class="">
        <img class="float-right object-contain" :src="figFile" />
      </div>
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
