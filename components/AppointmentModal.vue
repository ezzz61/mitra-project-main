<template>
  <div class="center">
    <vs-button color="#059669" @click="active = !active" class="rounded"
      ><span class="text-[16px] text-white">Appointment</span></vs-button
    >
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin text-lg">Appointment</h4>
      </template>

      <div class="con-form">
        <vs-input
          class="rounded-[5px]"
          label="Nama"
          v-model="$v.form.name.$model"
          placeholder="Nama Lengkap"
          maxlength="30"
        >
          <template v-if="!$v.form.name" #message-danger>Required</template>
          <template v-if="!$v.form.name.$invalid" #message-success
            >Benar</template
          >
          <template v-if="!$v.form.name.minLength" #message-warn
            >Minimal Nama {{ $v.form.name.$params.minLength.min }} Karakter
          </template></vs-input
        >

        <vs-input
          class="rounded-[5px] mt-8"
          label="No Whatsapp"
          v-model="$v.form.no_whatsapp.$model"
          @keypress="onlyNumber"
          placeholder="08xxxxx"
          maxlength="13"
        >
          <template v-if="!$v.form.no_whatsapp.required" #message-danger
            >*Kami tidak akan menyebarkan data pribadi anda</template
          >
          <template v-if="!$v.form.no_whatsapp.$invalid" #message-success
            >Benar</template
          >
          <template v-if="!$v.form.no_whatsapp.minLength" #message-warn
            >Minimal No NISN
            {{ $v.form.no_whatsapp.$params.minLength.min }} Karakter
          </template></vs-input
        >
        <vs-input
          class="rounded-[5px] mt-8"
          label="Email"
          v-model="$v.form.email.$model"
          placeholder="Email"
          maxlength="30"
        >
          <template v-if="!$v.form.email.required" #message-danger
            >*dibutuhkan untuk verifikasi appointment</template
          >
          <template v-if="!$v.form.email.$invalid" #message-success
            >Benar</template
          >
          <template v-if="!$v.form.email.minLength" #message-warn
            >Minimal Nama {{ $v.form.email.$params.minLength.min }} Karakter
          </template></vs-input
        >
        <vs-input
          class="rounded-[5px] mt-8"
          type="date"
          label="Tanggal Appointment"
          v-model="$v.form.appointment_date.$model"
        >
          <template
            v-if="
              $v.form.appointment_date.$dirty &&
              !$v.form.appointment_date.required
            "
            #message-danger
            >Diperlukan</template
          >
          <template v-if="!$v.form.appointment_date.$invalid" #message-success
            >Benar</template
          >
        </vs-input>

        <vs-select
          v-if="marketing.length"
          class="rounded-[5px] mt-4"
          placeholder="Marketing"
          v-model="$v.form.marketing_name.$model"
        >
          <vs-option
            v-for="(m, index) in marketing"
            :key="index"
            :label="m.name"
            :value="m._id"
            >{{ m.name }}</vs-option
          >
          <template
            v-if="
              $v.form.marketing_name.$dirty && !$v.form.marketing_name.required
            "
            #message-danger
            >Diperlukan</template
          >
          <template v-if="!$v.form.marketing_name.$invalid" #message-success
            >Benar</template
          >
        </vs-select>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button color="#059669" block @click="sendAppointment">
            Submit
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      active: false,
      email: "",
      password: "",
      remember: false,
      marketing: [],
      form: {
        name: "",
        no_whatsapp: "",
        marketing_name: "",
        email: "",
        appointment_date: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        minLength: 3,
        maxLength: 30,
        required,
      },
      no_whatsapp: {
        minLength: 12,
        maxLength: 13,
        required,
      },
      marketing_name: {
        required,
      },
      email: {
        minLength: 13,
        maxLength: 40,
        required,
      },
      appointment_date: {
        required,
      },
    },
  },
  mounted() {
    this.getMarketing();
  },
  methods: {
    async sendAppointment() {
      try {
        if (this.$v.$invalid) {
          this.$v.$touch();
          console.log(this.$v.form.$model);
          this.openNotification(
            4000,
            "top-center",
            "danger",
            "INVALID INPUT",
            "Data yang dimasukkan belum sesuai , mohon memasukkan data yang valid"
          );
        } else {
          const response = await this.$axios.post(
            "/api/appointment/add",
            this.$v.form.$model
          );

          if (response.data.status == 200) {
            this.active = false;
            this.openNotification(
              4000,
              "top-center",
              "success",
              "Berhasil Membuat Appointment",
              "Silahkan untuk memeriksa email atau pada spam"
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getMarketing() {
      try {
        const response = await this.$axios.get("/api/marketing");
        if (response.data.data.status === 200) {
          this.marketing = response.data.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    onlyNumber($event) {
      const keysAllowed = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
      ];
      const keyPressed = $event.key;
      if (!keysAllowed.includes(keyPressed)) {
        $event.preventDefault();
      }
    },
    openNotification(duration, position = null, color, title, text) {
      const noti = this.$vs.notification({
        duration,
        color,
        position,
        title: title,
        text: text,
      });
    },
  },
};
</script>

<style lang="scss">
.vs-input {
  width: 100% !important;
}
</style>

<style lang="scss" >
.vs-select-content {
  max-width: unset !important;
  border-radius: 5px;
}
.vs-input__label.vs-input__label--hidden.vs-input__label--label {
  opacity: 1;
}
.vs-input__label.vs-input__label--label {
  left: 5px;
}
.vs-select__label.vs-select__label--label {
  left: 8px;
}
.vs-select__input {
  border-radius: 5px;
}
.vs-input {
  width: 100% !important;
  border-radius: 5px;
  box-shadow: unset;
}
</style>