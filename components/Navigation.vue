<template>
  <section class="flex justify-between w-11/12 lg:w-10/12 3xl:container mx-auto py-6">
      <div class="">
        <!-- <p class="text-[24px] text-blue-primary font-semibold tracking-widest">
          TRIMITRA<span class="text-blue-secondary tracking-widest">LAND</span>
        </p> -->
        <img src="@/assets/icons/mitraland.svg" width="80" height="80">
      </div>
      <nav class="flex justify-center items-center">
        <ul class="flex gap-8 text-black-primary">
          <li>Home</li>
          <li>Featured</li>
          <li>Products</li>
        </ul>
      </nav>
      <div class="flex justify-end items-center">
        <nuxt-link class="bg-blue-primary text-white py-2 px-4 rounded-md" to="/">Contact Us</nuxt-link>
      </div>
    </section>
</template>

<script>
export default {};
</script>

<style>
</style>