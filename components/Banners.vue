<template>
  <section class="mt-14">
    <div class="">
      <h4 class="text-[28px] font-semibold">
        {{ title }}
      </h4>
      <span>{{ overview }}</span>
    </div>
    <div class="mt-4 overflow-hidden">
      <VueSlickCarousel v-bind="settings">
        <img
          v-for="(banner, index) in banners"
          :key="index"
          class="h-[420px] object-cover w-full"
          :src="banner.data"
          alt=""
        />
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
export default {
  props: ["banners", "title", "overview"],
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>

<style>
</style>