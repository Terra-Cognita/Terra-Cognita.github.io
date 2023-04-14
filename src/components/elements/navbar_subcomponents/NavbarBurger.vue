<template>
  <div>
    <!-- Burger symbol -->
    <button v-show="!isMenuOpen" @click="$emit('openMenu')">
      <svg
        class="h-6 w-6 stroke-sand-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>

    <!-- Close X symbol -->
    <button v-show="isMenuOpen" @click="$emit('closeMenu')">
      <svg
        class="h-6 w-6 stroke-sand-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
