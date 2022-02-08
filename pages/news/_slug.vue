<template>
  <section class="min-h-screen mt-4">
    <h1 class="text-[26px] py-4 font-bold">{{ details.title }}</h1>
    <div class="h-[350px]">
      <img
        class="h-full w-full object-cover rounded-md"
        :src="`${$axios.defaults.baseURL}/${details.image}`"
        alt=""
      />
    </div>
    <div class="w-full h-[1px] bg-slate-300 my-6"></div>
    <div class="flex gap-10">
      <div class="w-9/12" v-html="details.body"></div>
      <div class="w-3/12">
        <h4 class="text-[16px] font-semibold mb-4 uppercase">Other News</h4>
        <NewsCard
          :title="randomNews.title"
          :image="`${$axios.defaults.baseURL}/${randomNews.image}`"
          :createdAt="randomNews.createdAt"
          :slug="randomNews.slug"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      details: {},
      randomNews: {},
    };
  },
  async mounted() {
    const loading = this.$vs.loading({
      color: "#059669",
    });

    await this.getBySlug();
    await this.getRandomNews();

    loading.close();
  },
  methods: {
    async getBySlug() {
      try {
        const response = await this.$axios.get(`api/news/slug/${this.slug}`);
        if (response.data.status === 200) {
          this.details = response.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getRandomNews() {
      try {
        const response = await this.$axios.get("api/news/random");
        if (response.data.status === 200) {
          this.randomNews = response.data.data;
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