<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        sm="6"
      >
        <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            v-model="user.firstName"
            label="نام"
            required
          ></v-text-field>

          {{ errorFirstname }}

          <v-text-field
            v-model="user.lastName"
            label="نام خانوادگی"
            required
          ></v-text-field>

          {{ errorLastname }}

          <v-text-field
            v-model="user.nationalCode"
            label="کد ملی"
            required
          ></v-text-field>

          {{ errorNationalCode }}

          <div class="text-center">
            <v-btn
              color="success"
              class="mr-4"
              @click.prevent="validate"
            >
              عضویت
            </v-btn>
            <v-btn
              color="error"
              class="mr-4"
              @click.prevent="reset"
            >
             پاک کردن
            </v-btn>
          </div>
        </v-form>
        <div class="text-left border-top">
          <v-btn
            color="green"
            @click.prevent="register()"
            to="Login"
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
  data() {
    return {
      user : {
        firstName : "",
        lastName : "",
        nationalCode : ""
      },
      // errorFirstname : "",
      // errorLastname : "",
      // errorNationalCode : ""
    }
  },
  methods: {
    validate() {
    //   // FIRST NAME
    //   if (this.user.firstName.match("[a-z]{1,10}") && this.user.firstName.length > 2) {
    //     this.errorFirstname = "";
    //   } else {
    //     this.errorFirstname = "لطفا نام صحیح درج نمایید (حداقل سه کاراکتر باشد)";
    //   }
    //   // LAST NAME
    //   if (this.user.lastName.match("[a-z]{1,10}") && this.user.lastName.length > 2) {
    //     this.errorLastname = "";
    //   } else {
    //     this.errorLastname = "لطفا نام خانوادگی صحیح درج نمایید(حداقل سه کاراکتر باشد)";
    //   }
    //   //NATIONAL CODE
    //   let code = this.user.nationalCode;
    //   if (!/^\d{10}$/.test(code) || code === "")
    //     this.errorNationalCode = "لطفا کد ملی صحیح را وارد نمایید";
    //     const check = +code[9];
    //     const sum = Array(9).fill().map((_, i) => +code[i] * (10 - i)).reduce((x, y) => x + y) % 11;
    //   if ((sum < 2 && check == sum) || (sum >= 2 && check + sum == 11)) {
    //     this.errorNationalCode = ""
    //   }
      
      if (this.errorNationalCode === "" && this.errorLastname === "" && this.errorFirstname === "") {
        alert ("ثبت نام شما با موفقیت ثبت شد");
        this.user.firstName = "";
        this.user.lastName = "";
        this.user.nationalCode = ""
      }
    },
    reset() {
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.nationalCode = ""
    }
  },
  computed : {
    errorFirstname() {
      if (this.user.firstName.match("[a-z]{1,10}") && this.user.firstName.length > 2) {
        return("")
      } else {
        return "لطفا نام صحیح درج نمایید (حداقل سه کاراکتر و ترکیب حروف و عدد باشد)"
      }
    },
    errorLastname() {
      if (this.user.lastName.match("[a-z]{1,10}") && this.user.lastName.length > 2) {
        return("")
      } else {
        return "لطفا نام صحیح درج نمایید (حداقل سه کاراکتر و ترکیب حروف و عدد باشد)"
      }
    },
    errorNationalCode() {
      const check = +this.user.nationalCode[9];
      const sum = Array(9).fill().map((_, i) => +this.user.nationalCode[i] * (10 - i)).reduce((x, y) => x + y) % 11;
      if (this.user.nationalCode === "" || this.user.nationalCode.length <= 9 || this.user.nationalCode.length >= 11) {
        return("لطفا کد ملی صحیح را وارد نمایید")
      } else if((sum < 2 && check == sum) || (sum >= 2 && check + sum == 11)){
        return("")
      } else {
        return("لطفا کد ملی صحیح را وارد نمایید")
      }
    }
  }
}
</script>

<style lang="scss">
.v-label {
  left: unset !important;
}


</style>
