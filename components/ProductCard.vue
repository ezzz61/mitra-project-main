<template>
  <div class="">
    <nuxt-link class="rounded-sm overflow-hidden" :to="`/details/${slug}`">
      <div
        class="
          h-64
          rounded-sm
          overflow-hidden
          transition-all
          hover:scale-105 hover:shadow-md
        "
      >
        <img class="h-full w-full object-cover" :src="image" alt="" />
      </div>
    </nuxt-link>
    <div class="flex justify-between mt-3">
      <div class="">
        <nuxt-link
          class="hover:text-emerald-600 hover:no-underline transition-all"
          :to="`/details/${slug}`"
        >
          <h6 class="font-bold text-[14px]">{{ title }}</h6>
        </nuxt-link>
        <span class="text-[12px]">{{ cluster }}</span>
      </div>
      <vs-button color="#059669" border>
        <span class="text-[12px]">SUPER HOST</span>
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "cluster", "overview", "slug"],
};
</script>

<style>
</style>