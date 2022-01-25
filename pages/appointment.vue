<template>
  <div>
    <Navigation/>
      <header class="w-11/12 lg:w-10/12 3xl:container mx-auto">
        <div class="">

          <div class="flex justify-between items-center w-full p-6 rounded-2xl bg-sky-600">
            <div class="w-1/4">
              <h2 class="text-lg text-white mb-10">APPOINTMENT</h2>
              <form class="">
              <div class="block">
                <span class="text-white">Nama</span>
                <input type="text" class="block w-full mt-1 outline-none p-1">
              </div>
              <div class="block mt-3">
                <span class="text-white">No Whatsapp</span>
                <input type="text" class="block w-full mt-1 outline-none p-1">
              </div>
              <div class="block mt-3">
                <span class="text-white">Email</span>
                <input type="email" class="block w-full mt-1 outline-none p-1">
              </div>
              <div class="block mt-3">
                <span class="text-white">Tanggal</span>
                <input type="date" class="block w-full mt-1 outline-none p-1">
              </div>
              <div class="flex justify-center gap-x-4">
              <button class="p-2 mt-10 rounded bg-gray-50">Back</button>
              <button class="p-2 mt-10 rounded text-white bg-sky-800">Submit</button>
              </div>
              </form>
            </div>

            <div>
              <img src="@/assets/dummy/heroDetail.png" width="400" height="400">
            </div>
          </div>
        </div>
      </header>
    <Footer/>
  </div>
</template>

<script>

</script>

<style>

</style>
