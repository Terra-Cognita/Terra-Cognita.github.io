<template>
  <button
    type="button"
    class="group absolute right-0 top-0 z-30 flex h-full items-center justify-center focus:outline-none"
    data-carousel-next
  >
    <span
      class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-tc_magic-sky/30 group-hover:bg-tc_magic-sky/30 group-focus:outline-none group-focus:ring-1 group-focus:ring-tc_magic-sky"
    >
      <svg
        aria-hidden="true"
        class="h-5 w-5 text-tc_magic-sky"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      <span class="sr-only">Next</span>
    </span>
  </button>
</template>
