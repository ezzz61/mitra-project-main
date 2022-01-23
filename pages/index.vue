<template>
  <div>
    <Navigation></Navigation>
    <!-- header -->
    <section class="flex w-11/12 lg:w-10/12 3xl:container mx-auto mt-5 gap-12">
      <div class="w-6/12 flex flex-col justify-center">
        <h1 class="text-[38px] font -bold tracking-wide text-black-primary">
          Designer Homes <br />
          in a Beautiful and <br />
          Lush Estate
        </h1>
        <p class="mt-4 text-lg font-normal text-black-primary">
          Designed to meet the needs of young families and equipped with
          facilities for the needs of a quality, peaceful and relaxing life. The
          house is also designed with an optimal layout, equipped with an
          Innercourt.
        </p>
        <div class="">
          <button class="mt-4 bg-blue-primary text-white py-2 px-4 rounded-md">
            Let's Explore
          </button>
        </div>
      </div>
      <div class="w-6/12">
        <img
          class="w-full h-[480px] rounded-tr-3xl rounded-bl-3xl object-cover"
          src="@/assets/dummy/Hero.png"
          alt=""
        />
      </div>
    </section>

    <!-- products -->
    <section class="w-11/12 lg:w-10/12 3xl:container mx-auto mt-12">
      <div class="flex justify-between w-full text-black-primary px-3">
        <div class="">
          <h4 class="text-[28px] font-semibold">Our Products</h4>
          <span>We Offer you the best places</span>
        </div>
        <div class="">
          <button @click="prodPrev">
            <img src="@/assets/icons/arrow-left.svg" alt="" />
          </button>
          <button @click="prodNext">
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
            <div class="bg-white flex justify-between mt-3">
              <div class="">
                <h6 class="font-bold">Balencia</h6>
                <span>Cluster Velencia</span>
              </div>
              <div
                class="
                  border-2 border-blue-secondary
                  rounded-3xl
                  px-2
                  text-blue-secondary
                  flex
                  items-center
                  justify-center
                "
              >
                SUPER HOST
              </div>
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
      <div class="flex justify-between mt-4">
        <!-- Card -->
        <div class="w-60 px-3">
          <div class="flex flex-col items-center gap-2">
            <img src="@/assets/icons/facility.svg" width="40" height="40" />
            <h4 class="text-[24px] font-bold">Facility</h4>
          </div>
          <p class="text-[14px] mt-2">
            Exclusive Club House facilities that have a swimming pool, indoor
            fitness, children's playground, Corner Garden, jogging track at the
            Botanical Park and other facilities
          </p>
        </div>
        <div class="w-60 px-3">
          <div class="flex flex-col items-center gap-2">
            <img src="@/assets/icons/park.svg" width="40" height="40" />
            <h4 class="text-[24px] font-bold">Botanical Park</h4>
          </div>
          <p class="text-[14px] mt-2">
            Exclusive Club House facilities that have a swimming pool, indoor
            fitness, children's playground, Corner Garden, jogging track at the
            Botanical Park and other facilities
          </p>
        </div>
        <div class="w-60 px-3">
          <div class="flex flex-col items-center gap-2">
            <img src="@/assets/icons/location.svg" width="25" height="25" />
            <h4 class="text-[24px] font-bold">Location</h4>
          </div>
          <p class="text-[14px] mt-2">
            Exclusive Club House facilities that have a swimming pool, indoor
            fitness, children's playground, Corner Garden, jogging track at the
            Botanical Park and other facilities
          </p>
        </div>
        <div class="w-60 px-3">
          <div class="flex flex-col items-center gap-2">
            <img src="@/assets/icons/access.svg" width="26" height="26" />
            <h4 class="text-[24px] font-bold">Easy Access</h4>
          </div>
          <p class="text-[14px] mt-2">
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
        <div class="">
          <button @click="prodPrev">
            <img src="@/assets/icons/arrow-left.svg" alt="" />
          </button>
          <button @click="prodNext">
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
            <div class="bg-white flex justify-between mt-3">
              <div class="">
                <h6 class="font-bold">
                  Bank BUMN Ini Dorong Santri Untuk Jadi Developer
                </h6>
                <span>Jan 11, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </section>

    <!-- Footer -->
    <Footer></Footer>
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

<style>
</style>
