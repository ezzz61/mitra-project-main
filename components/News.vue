<template>
  <!-- News -->
  <section class="mt-14">
    <div class="flex justify-between w-full text-black-primary px-3">
      <div class="">
        <h4 class="text-[28px] font-semibold">Our News</h4>
        <span>We Offer you the best places</span>
      </div>
      <div class="w-[100px]">
        <button class="w-10" @click="prodPrev">
          <img src="@/assets/icons/arrow-left.svg" alt="" />
        </button>
        <button class="w-10" @click="prodNext">
          <img src="@/assets/icons/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
    <!-- list product -->
    <VueSlickCarousel
      v-if="news.length"
      class="mt-4"
      v-bind="settings"
      ref="carousel_prod"
    >
      <div class="px-3" v-for="(n, index) in news" :key="index">
        <NewsCard
          :title="n.title"
          :image="n.image"
          :createdAt="n.createdAt"
          :slug="n.slug"
        />
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      news: [],
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews() {
      try {
        const response = await this.$axios.get("/api/news");
        if (response.data.data.status === 200) {
          const allNews = response.data.data.data;
          let data = [];

          allNews.map((news) => {
            data.push({
              ...news,
              image: news.image
                ? `${this.$axios.defaults.baseURL}/${news.image}`
                : "",
            });
          });

          this.news = data;

          console.log(this.news);
        }
      } catch (error) {
        console.log(error);
      }
    },

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