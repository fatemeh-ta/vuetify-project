<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        lg="12"
        md="8"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="نام"
            required
          ></v-text-field>

          <v-text-field
            v-model="lastname"
            :rules="lastnameRules"
            label="نام خانوادگی"
            required
          ></v-text-field>
          
          <v-text-field
            v-model="nationalcode"
            :rules="codeRules"
            label="کد ملی"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            عضویت
          </v-btn>
          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            پاک کردن
          </v-btn>
        </v-form>
        <div class="text-left border-top">
          <v-btn
            color="green"
            @click.prevent="register()"
            to="/"
          >
           ورود
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    lastname: '',
    nationalcode: '',
    nameRules: [
      v => !!v || 'پر کردن نام الزامی است',
      v => (!!v && v.length >= 3 ) || 'نام حداقل سه کاراکتر باشد',
      v => (!!v && /[a-zA-Z]+(?:[a-zA-Z]+)*/.test(v))  || 'نام کاربری معتبر نمی باشد',
    ],
    lastnameRules: [
      v => !!v || 'پر کردن نام خانوادگی الزامی است',
      v =>  (!!v && /[a-zA-Z]+(?:[a-zA-Z]+)*/.test(v) || 'نام خانوادگی معتبر نمی باشد'),

    ],
    codeRules: [
      v => !!v || 'پر کردن کدملی الزامی است',
      v => (!!v && v.length < 9 ) || 'کد ملی باید ۱۰ رقم باشد',
      
    ],
    
  }),
  methods: {
    validate () {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        alert("عضویت با موفقیت انجام شد")
        this.nationalcode = "";
        this.name = "";
        this.lastname = "";
      }
    },
    reset () {
      this.$refs.form.reset()
    },
  },
}
</script>

<style lang="scss">


</style>
