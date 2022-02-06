<template>
  <div class="">
    <nuxt-link :to="`/news/${slug}`">
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
          :to="`/news/${slug}`"
        >
          <h6 class="font-semibold">
            {{ title }}
          </h6>
        </nuxt-link>
        <span class="text-[12px]">{{ moment(createdAt).format("LL") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["title", "image", "createdAt", "slug"],
  data() {
    return {
      moment: moment,
    };
  },
};
</script>

<style>
</style>