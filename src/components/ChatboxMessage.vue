<template>
  <section :class="messageClass">
    <div><slot /></div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    type: { type: String }
  });

  let typeClass;
  (props.type==='user') 
  ? typeClass='message__item--user' 
  : typeClass='message__item--bot'

  const messageClass = ref(`message__item ${typeClass}`)

</script>

<style lang="scss" scoped>
.message__item {
  width: fit-content;
  max-width: 80%;
  margin-top: 0.8em;
  padding: 0.8em 1.2em;
  border-radius: 9px;
  color: black;
}
.message__item--bot {
  margin-left: auto;
  background: rgba(45, 140, 195, 0.8);
  // color: white;
}
.message__item--user {
  margin-right: auto;
  background: rgba(71, 239, 229, 1);
  // color: black;
}
</style>