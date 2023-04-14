<template>
  <div class="mx-2 flex max-w-xs flex-col items-start space-y-2">
    <div v-for="text in texts">
      <span class="inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-600">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    texts: Array,
  },
  setup(props) {
    return {};
  },
};
</script>
