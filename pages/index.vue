<template>
  <div>
    <!-- header -->
    <section
      class="
        flex flex-col-reverse
        lg:flex-row
        items-center
        min-h-[50vh]
        lg:min-h-[70vh]
        gap-24
      "
    >
      <div class="w-full md:w-6/12 flex flex-col justify-center">
        <h1
          class="
            text-[30px]
            md:text-[36px]
            font-bold
            tracking-wide
            uppercase
            text-black-primary
          "
        >
          {{ homeContent.title }}
        </h1>
        <p class="mt-4 tracking-wide text-black-primary">
          {{ homeContent.body }}
        </p>
        <div class="mt-4">
          <vs-button
            @click="scrollToBanner"
            color="#059669"
            success
            class="shadow font-medium rounded"
          >
            <span class="text-[16px] text-white">Let's Explore</span>
          </vs-button>
        </div>
      </div>
      <div class="lg:w-6/12 md:block">
        <img class="object-cover" :src="homeContent.image" alt="" />
      </div>
    </section>

    <Products />

    <iframe
      v-if="embededUrl.isActive"
      class="w-full h-[280px] lg:h-[400px] mt-12"
      :src="embededUrl.url"
    >
    </iframe>

    <div ref="banners" class="">
      <Banners
        :title="homeBannerOverview.title"
        :overview="homeBannerOverview.body"
        :banners="homeBanners"
      />
    </div>

    <Features />
    <News />
  </div>
</template>

<script>
export default {
  data() {
    return {
      embededUrl: {},
      homeContent: {},
      homeBanners: [{}],
      homeBannerOverview: {},
    };
  },
  async mounted() {
    const loading = this.$vs.loading({
      color: "#059669",
    });

    await this.getHome();
    await this.getHomeBanners();
    await this.getUrl();

    loading.close();
  },
  methods: {
    async getHome() {
      const response = await this.$axios.get("/api/home");
      if (response.data.data.status === 200) {
        this.homeContent = {
          ...response.data.data.data,
          image: `${this.$axios.defaults.baseURL}/${response.data.data.data.image}`,
        };
      }
    },

    async getUrl() {
      const response = await this.$axios.get("/api/home/url");
      if (response.data.data.status === 200) {
        this.embededUrl = response.data.data.data;
        console.log(this.embededUrl);
      }
    },

    async getHomeBanners() {
      const response = await this.$axios.get("/api/banner");
      if (response.data.data.status === 200) {
        const banners = await response.data.data.data;
        let data = [];

        banners.images.map((banner) => {
          data.push({
            data: `${this.$axios.defaults.baseURL}/${banner.data}`,
          });
        });

        this.homeBannerOverview = {
          title: banners.title,
          body: banners.body,
        };
        this.homeBanners = data;
      }
    },

    scrollToBanner() {
      const location = this.$refs.banners;
      const maps = location.offsetTop;
      window.scrollTo({
        behavior: "smooth",
        top: maps - 100,
      });
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

<style lang="scss"  >
.vs-button {
  padding: 0 !important;
}
</style>
