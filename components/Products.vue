<template>
  <section class="mt-14">
    <div class="flex justify-between w-full text-black-primary px-2">
      <div class="">
        <h4 class="text-[28px] font-semibold">Our Products</h4>
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
      v-if="products.length"
      class="mt-4"
      v-bind="settings"
      ref="carousel_prod"
    >
      <div class="px-2" v-for="product in products" :key="product._id">
        <ProductCard
          :cluster="product.cluster"
          :image="product.image"
          :title="product.title"
          :slug="product.slug"
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
        infinite: true,
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
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await this.$axios.get("/api/product");
        if (response.data.data.status === 200) {
          let data = [];
          response.data.data.data.map((product) => {
            data.push({
              ...product,
              image: product.images
                ? `${this.$axios.defaults.baseURL}/${product.images[0].data}`
                : "",
            });
          });

          this.products = data;
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