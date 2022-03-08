<template>
  <div class="">
    <div
      class="
        flex flex-col
        md:flex-row
        justify-between
        items-center
        mx-auto
        gap-12
        mt-16
      "
    >
      <div class="w-full md:w-6/12">
        <VueSlickCarousel
          v-if="images.length"
          class="mt-4"
          v-bind="settings1"
          ref="carousel_prod"
        >
          <div class="h-[480px]" v-for="(image, index) in images" :key="index">
            <img
              class="h-full w-full object-cover rounded-sm"
              :src="image.data"
              alt=""
            />
          </div>
        </VueSlickCarousel>
      </div>
      <div class="w-full flex flex-col md:w-6/12 p-3">
        <div class="flex mb-3 gap-x-4">
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/bed.png" width="45" height="45" />
            <div class="flex flex-col gap-2 text-xs">
              <h2>Bedroom</h2>
              <span>{{ details.bed_room }} Rooms</span>
            </div>
          </div>
          <div class="flex items-center gap-2 p-1">
            <img src="@/assets/icons/building.png" width="50" height="50" />
            <div class="flex flex-col gap-2 text-xs">
              <h2>Building Area</h2>
              <span>{{ details.building_area }} m<sub>2</sub></span>
            </div>
          </div>
        </div>

        <div class="flex gap-x-4">
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/bathtub.png" width="45" height="45" />
            <div class="flex flex-col gap-2 text-xs">
              <h2>Bathroom</h2>
              <span>{{ details.bath_room }} Rooms</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/garages.png" width="50" height="50" />
            <div class="flex flex-col gap-2 text-xs">
              <h2>Carport</h2>
              <span>{{ details.carport }} Rooms</span>
            </div>
          </div>
        </div>

        <div class="mt-10">
          <h4 class="font-semibold mb-2">Deskripsi</h4>
          <div class="text-sm" v-html="details.description"></div>
          <div class="flex mt-4">
            <vs-button color="#059669" class="rounded">
              <a
                class="
                  hover:text-white hover:no-underline
                  text-[16px] text-gray-200
                "
                :href="details.maps"
                >Maps</a
              >
            </vs-button>
            <AppointmentModal :product_id="product_id" />
          </div>
        </div>
      </div>
    </div>

    <section class="mt-14">
      <Products />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_id: "",
      settings1: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      details: {},
      images: [],
    };
  },

  async mounted() {
    const loading = this.$vs.loading({
      color: "#059669",
    });
    await this.getDetailsProduct();
    loading.close();
  },

  methods: {
    async getDetailsProduct() {
      try {
        const response = await this.$axios.get(
          `/api/product/slug/${this.$route.params.slug}`
        );

        if (response.data.status === 200) {
          let data = [];

          response.data.data.images.map((image) => {
            data.push({
              data: `${this.$axios.defaults.baseURL}/${image.data}`,
            });
          });

          this.images = data;
          this.details = response.data.data;
          this.product_id = response.data.data._id;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
