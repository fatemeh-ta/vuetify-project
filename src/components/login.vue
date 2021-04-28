<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        sm="12"
      >
        <v-card>
          <v-container fluid>
            <v-row
              align="center"
            >
              <v-col cols="12">
                <v-form
                  ref="form"
                  lazy-validation
                >
                  <v-autocomplete
                    v-model="value"
                    :items="items"
                    dense
                    filled
                    label="لطفا انتخاب نمایید"
                  ></v-autocomplete>
                   <div class="text-center">
                    <v-btn
                        color="error"
                        class="mr-4"
                        @click="reset"
                      >
                      پاک کردن
                    </v-btn>

                    <v-btn
                      color="warning"
                      @click="login"
                    >
                    ورود
                    </v-btn>
                   </div>
                </v-form>
                <div class="text-left border-top">
                  <v-btn
                    color="green"
                    @click.prevent="register()"
                    to="Register"
                  >
                  ثبت نام
                  </v-btn>
                </div>
                <div v-if = "rol =='Admin'">
                  <DetailAdmin></DetailAdmin>
                </div>
                <div v-if = "rol =='Member'">
                  <DetailMember></DetailMember>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import DetailAdmin from "./detailAdmin";
import DetailMember from "./detailMember";
export default {
  data() {
    return {
      items : ["Admin" , "Member"],
      value : "",
      rol : ""
    }
  },
  components :{
    DetailAdmin,
    DetailMember
  },
  methods : {
    reset() {
      this.value = ""
      localStorage.removeItem('role')
    },
    login() {
      if (this.value === "") {
        alert ("لطفا نقش خود را انتخاب نمایید")
      } else if (this.value) {
        alert (" ورود شما با موفقیت انجام شد")
        localStorage.setItem( "role" , this.value);
        this.rol = localStorage.getItem( "role");
        console.log(this.rol);
      }
    },
  },
}

</script>

<style lang="scss">
.v-select__slot,
.v-btn {
  font-family:  "aasaam-Noto" , sans-serif;
  .v-label {
    left: unset !important;
  }
}
.v-input__append-inner {
  i {
    cursor: pointer;
  }
}
.v-btn {
  margin-left: 16px;
}
.border-top {
  border-top: 1px solid #000;
  padding: 16px 0;
  margin-top: 32px;
}
</style>
