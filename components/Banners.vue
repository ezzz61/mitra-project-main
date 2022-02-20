<template>
  <section class="mt-14">
    <div class="">
      <div class="flex justify-between w-full text-black-primary">
        <h4 class="text-[28px] font-semibold">
          {{ title }}
        </h4>
        <div class="w-[100px]">
          <button class="w-10" @click="prodPrev">
            <img src="@/assets/icons/arrow-left.svg" alt="" />
          </button>
          <button class="w-10" @click="prodNext">
            <img src="@/assets/icons/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
      <span>{{ overview }}</span>
    </div>
    <div class="mt-4 overflow-hidden">
      <VueSlickCarousel ref="carousel_prod" class="" v-bind="settings">
        <img
          v-for="(banner, index) in banners"
          :key="index"
          class="object-cover w-full h-[320px] lg:h-[420px]"
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
        arrows: true,
        dots: true,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      },
    };
  },
  methods: {
    prodNext() {
      this.$refs.carousel_prod.next();
    },
    prodPrev() {
      this.$refs.carousel_prod.prev();
    },
  },
};
</script>

<style>
</style>