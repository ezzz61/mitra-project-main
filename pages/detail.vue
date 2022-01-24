<template>
  <div>
    <Navigation></Navigation>
    <header class="flex w-11/12 min-h-screen lg:w-10/12 3xl:container mx-auto">
      <div>
        <img src="@/assets/dummy/heroDetail.png" width="500" height="500"/>
      </div>

      <div class="flex flex-col w-2/5 p-3">
        <div class="flex mb-3 gap-x-4">
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/bed.png" width="45" height="45" />
            <div class="flex flex-col gap-2 text-xs">
              <h2>Bedroom</h2>
              <span>3 Rooms</span>
            </div>
          </div>
          <div class="flex items-center gap-2 p-1">
            <img src="@/assets/icons/building.png" width="50" height="50" />
            <div class="flex flex-col gap-2 text-xs">
              <h2>Building Area</h2>
              <span>3 Rooms</span>
            </div>
          </div>
        </div>

        <div class="flex gap-x-4">
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/bathtub.png" width="45" height="45" />
            <div class="flex flex-col gap-2 text-xs">
              <h2>Bathroom</h2>
              <span>3 Rooms</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <img src="@/assets/icons/garages.png" width="50" height="50" />
            <div class="flex flex-col gap-2 text-xs">
              <h2>Carport</h2>
              <span>3 Rooms</span>
            </div>
          </div>
        </div>

        <div class="mt-10">
          <h4 class="font-semibold mb-2">Deskripsi</h4>
          <p class="text-sm mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <button class="p-2 text-white rounded text-sm bg-sky-500">Maps</button>
          <button class="p-2 text-white rounded text-sm bg-sky-500">Appointment</button>
        </div>
      </div>
    </header>
    <Footer></Footer>
  </div>
</template>

<script>
</script>

<style>
</style>
