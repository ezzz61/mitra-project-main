<template>
  <div class="center">
    <vs-button
      @click="active = !active"
      flat
      class="mx-auto shadow font-medium rounded"
      ><span class="text-[16px] text-gray-200">Appointment</span></vs-button
    >
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Appointment</h4>
      </template>

      <div class="con-form">
        <vs-input type="text" class="" placeholder="Nama">
          <template #icon> <i class="bx bxs-lock"></i> </template>
        </vs-input>
        <vs-input type="number" class="mt-4" placeholder="No Whatsapp">
          <template #icon> <i class="bx bxs-lock"></i> </template>
        </vs-input>
        <vs-input class="mt-4" placeholder="Email">
          <template #icon> <i class="bx bxs-lock"></i> </template>
        </vs-input>
        <vs-input type="date" class="mt-4" placeholder="Pilih Tanggal">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Submit </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    email: "",
    password: "",
    remember: false,
  }),
};
</script>

<style lang="scss">
.vs-input {
  width: 100% !important;
}
</style>