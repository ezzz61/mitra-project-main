<template>
  <div>
    <Navigation />
    <main class="lg:mt-32 w-11/12 lg:w-9/12 3xl:container mx-auto sm:mt-10">
      <Nuxt />
      <!--Start of Tawk.to Script-->
      <script type="text/javascript">
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
      </script>
      <!--End of Tawk.to Script-->
    </main>
    <Footer />
  </div>
</template>