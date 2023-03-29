<template>
  <router-link  class="block sm:inline-block sm:px-4 py-2 
                      transition-colors duration-300 font-black uppercase" 
                :to="{name: `${to.name}`, hash: `${to.hash}`}"
                @click="$emit('closeMenu')">
    {{ label }}
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return { }
  }
}
</script>
