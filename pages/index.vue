<template>
  <div>
    <Navigation />
    <!-- header -->
    <section class="flex items-center min-h-screen w-11/12 lg:w-10/12 3xl:container mx-auto sm:mt-10 gap-10">
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
          Designer Homes <br />
          in a Beautiful and <br />
          Lush Estate
        </h1>
        <p class="mt-4 tracking-wide text-black-primary">
          Designed to meet the needs of young families and equipped with
          facilities for the needs of a quality, peaceful and relaxing life. The
          house is also designed with an optimal layout, equipped with an
          Innercourt.
        </p>
        <div class="mt-4">
          <vs-button success class="shadow font-medium rounded text-gray-200">
            <span class="text-[16px]">Let's Explore</span>
          </vs-button>
        </div>
      </div>
      <div class="w-6/12 hidden md:block">
        <img class="object-cover" src="@/assets/dummy/Hero.png" alt="" />
      </div>
    </section>

    <!-- products -->
    <section class="w-11/12 lg:w-10/12 3xl:container mx-auto mt-12">
      <div class="flex justify-between w-full text-black-primary px-3">
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
      <VueSlickCarousel class="mt-4" v-bind="settings" ref="carousel_prod">
        <div class="px-3" v-for="(product, index) in 10" :key="index">
          <div class="">
            <div class="">
              <img
                src="@/assets/dummy/photo-1570129477492-45c003edd2be 1.png"
                alt=""
              />
            </div>
            <div class="flex justify-between mt-3">
              <div class="">
                <h6 class="font-bold text-[14px]">Balencia</h6>
                <span class="text-[12px]">Cluster Velencia</span>
              </div>
              <vs-button success border>
                <span class="text-[12px]">SUPER HOST</span>
              </vs-button>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </section>

    <!-- Image Jumbroton -->
    <section class="w-11/12 lg:w-10/12 3xl:container mx-auto mt-12">
      <div>
        <img src="@/assets/dummy/Group.png" />
      </div>
    </section>

    <!-- Fitur -->
    <section class="w-11/12 lg:w-10/12 3xl:container mx-auto mt-12">
      <div class="w-full text-black-primary px-3">
        <div class="">
          <h4 class="text-[28px] font-semibold">Our Features</h4>
          <span>We Offer you the best places</span>
        </div>
      </div>
      <div class="flex flex-col items-center md:flex-row md:justify-around mt-4">
        <!-- Card -->
        <div class="w-60 border/50 shadow-sm mt-4 px-3 py-3 bg-gray-50">
          <div class="flex flex-col items-center gap-2">
            <img src="@/assets/icons/facility.svg" width="40" height="40" />
            <h4 class="text-[18px] font-semibold">Facility</h4>
          </div>
          <p class="text-[14px] text-justify mt-2">
            Exclusive Club House facilities that have a swimming pool, indoor
            fitness, children's playground, Corner Garden, jogging track at the
            Botanical Park and other facilities
          </p>
        </div>
        <div class="w-60 border/50 shadow-sm mt-4 px-3 py-3 bg-gray-50">
          <div class="flex flex-col items-center gap-2">
            <img src="@/assets/icons/park.svg" width="40" height="40" />
            <h4 class="text-[18px] font-semibold">Botanical Park</h4>
          </div>
          <p class="text-[14px] text-justify mt-2">
            Exclusive Club House facilities that have a swimming pool, indoor
            fitness, children's playground, Corner Garden, jogging track at the
            Botanical Park and other facilities
          </p>
        </div>
        <div class="w-60 border/50 shadow-sm mt-4 px-3 py-3 bg-gray-50">
          <div class="flex flex-col items-center gap-2">
            <img src="@/assets/icons/location.svg" width="25" height="25" />
            <h4 class="text-[18px] font-semibold">Location</h4>
          </div>
          <p class="text-[14px] text-justify mt-2">
            Exclusive Club House facilities that have a swimming pool, indoor
            fitness, children's playground, Corner Garden, jogging track at the
            Botanical Park and other facilities
          </p>
        </div>
        <div class="w-60 border/50 shadow-sm mt-4 px-3 py-3 bg-gray-50">
          <div class="flex flex-col items-center gap-2">
            <img src="@/assets/icons/access.svg" width="26" height="26" />
            <h4 class="text-[18px] font-semibold">Easy Access</h4>
          </div>
          <p class="text-[14px] text-justify mt-2">
            Exclusive Club House facilities that have a swimming pool, indoor
            fitness, children's playground, Corner Garden, jogging track at the
            Botanical Park and other facilities
          </p>
        </div>
      </div>
    </section>

    <!-- News -->
    <section class="w-11/12 lg:w-10/12 3xl:container mx-auto mt-12">
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
      <VueSlickCarousel class="mt-4" v-bind="settings" ref="carousel_prod">
        <div class="px-3" v-for="(product, index) in 10" :key="index">
          <div class="">
            <div class="">
              <img
                src="@/assets/dummy/photo-1570129477492-45c003edd2be 1.png"
                alt=""
              />
            </div>
            <div class="flex justify-between mt-3">
              <div class="">
                <h6 class="font-semibold">
                  Bank BUMN Ini Dorong Santri Untuk Jadi Developer
                </h6>
                <span class="text-[12px]">Jan 11, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
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

<style lang="scss" >
.vs-button {
  padding: 0 !important;
}
</style>
