<template>
  <div>
    <Navigation />
    <main class="lg:mt-32 w-11/12 lg:w-9/12 3xl:container mx-auto sm:mt-10">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
export default {
  mounted() {
    this.talkto();
  },
  methods: {
    talkto() {
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/61fe2f0cb9e4e21181bd950e/1fr4efj40";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    },
  },
};
</script>

<style>
</style>