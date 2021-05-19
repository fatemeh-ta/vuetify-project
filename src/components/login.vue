<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
      >
        <v-card>
          <v-container fluid>
            <v-row
              align="center"
            >
              <v-col md="12">
                <v-form
                  ref="form"
                  lazy-validation
                >
                  <v-select
                      v-model="select"
                      :items="items"
                      label="انتخاب کنید"
                      data-vv-name="select"
                      required
                      item-text="name"
                    ></v-select>
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
                      to="Dashboard"
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
                <DetailCard>
                  <v-card v-if="rol!==''"
                    class="mx-auto"
                    max-width="344"
                  >
                    <v-card-text>
                      <div>
                        <p class="text--primary">
                          {{ rol }}
                          به سایت خوش آمدید
                        </p>
                      </div>
                    </v-card-text>
                  </v-card>
                </DetailCard>
                <!-- <DetailCard :rol = "rol" /> -->
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import DetailCard from "./detailCard";
export default {
  data() {
    return {
      items : [
        {
          name : "ادمین",
          value : "Admin"
        },
        {
          name : "کاربر",
          value : "Member"
        }
      ],
      rol : "",
      select: "",
    }
  },
  components : {
    DetailCard
  },
  methods : {
    reset() {
      this.select = ""
      localStorage.removeItem('role')
    },
    login() {
      if (this.select === "") {
        alert ("لطفا نقش خود را انتخاب نمایید")
      } else if (this.select) {
        alert (" ورود شما با موفقیت انجام شد")
        localStorage.setItem( "role" , this.select);
        this.rol = localStorage.getItem( "role");
        // console.log(typeof this.rol);
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
.v-select__selections {
  line-height: 28px;
} 
</style>
