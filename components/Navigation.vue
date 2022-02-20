<template>
  <section class="w-full fixed top-0 z-10 shadow-sm bg-emerald-600">
    <div
      class="font-sans antialiased w-11/12 lg:w-9/12 3xl:container mx-auto py-2"
      id="app"
    >
      <nav class="flex items-center justify-between flex-wrap">
        <nuxt-link to="/" class="flex items-center flex-no-shrink">
          <img src="@/assets/icons/Mitraland.svg" width="65" height="65" />
          <!-- <span class="font-semibold text-xl tracking-tight"
            >TRIMITRA LAND</span
          > -->
        </nuxt-link>
        <div class="block sm:hidden">
          <button @click="toggle" class="flex items-center rounded">
            <svg class="fill-white w-6 h-6" viewBox="0 0 24 24">
              <path
                :class="!open ? 'block' : 'hidden'"
                d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
              />
              <path
                :class="open ? 'block' : 'hidden'"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </button>
        </div>
        <div
          :class="open ? 'block' : 'hidden'"
          class="
            w-full
            flex-grow
            font-medium
            sm:flex sm:items-center sm:w-auto
            text-gray-200
          "
        >
          <div class="sm:flex-grow text-center">
            <!-- <nuxt-link
              to="/"
              href="#responsive-header"
              class="
                sm:mx-3
                my-3
                block
                sm:inline-block
                hover:no-underline hover:text-white
              "
            >
              Home
            </nuxt-link> -->
            <!-- <nuxt-link
              to="/"
              href="#responsive-header"
              class="
                sm:mx-3
                my-3
                block
                sm:inline-block
                hover:no-underline hover:text-white
              "
            >
              Features
            </nuxt-link>
            <nuxt-link
              to="/"
              href="#responsive-header"
              class="
                sm:mx-3
                my-3
                block
                sm:inline-block
                hover:no-underline hover:text-white
              "
            >
              Products
            </nuxt-link> -->
          </div>
          <div class="flex">
            <vs-button
              color="#e3bf7d"
              to="/"
              class="mx-auto shadow font-medium rounded"
              ><span class="text-[16px] text-black">Contact</span></vs-button
            >
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
</style>