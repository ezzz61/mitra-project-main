<template>
  <section class="mt-14">
    <div class="w-full text-black-primary">
      <div class="">
        <h4 class="text-[28px] font-semibold">Our Features</h4>
        <span>We Offer you the best places</span>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Card -->
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="border/50 shadow-sm mt-4 px-3 py-3 bg-gray-50 rounded-md"
      >
        <div class="flex flex-col items-center gap-2">
          <img :src="feature.icon" class="h-[40px]" />
          <h4 class="text-[18px] font-semibold">{{ feature.title }}</h4>
        </div>
        <p class="text-[14px] text-center mt-2">
          {{ feature.body }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [],
    };
  },
  mounted() {
    this.getFeatures();
  },
  methods: {
    async getFeatures() {
      try {
        const response = await this.$axios.get("/api/feature");
        if (response.data.data.status === 200) {
          let data = [];
          response.data.data.data.map((feature) => {
            data.push({
              ...feature,
              icon: `${this.$axios.defaults.baseURL}/${feature.icon}`,
            });
          });

          this.features = data;
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