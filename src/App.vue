<template>
  <v-app>
    <v-main>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          
        </v-row>
      </v-container>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "../node_modules/@aasaam/noto-font/dist/font-face.css";

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: 
    url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2) format('woff2'),
    url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff) format('woff'),
    url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf) format('truetype');
}

body,
.v-application {
  font-family:  "aasaam-Noto" , sans-serif !important;
  direction: rtl;
}

.text-center .v-btn ,
p {
  font-family:  "aasaam-Noto" , sans-serif  !important;
}

.pa-2::after {
  clear: both;
  display: table;
  content: "";
}
.login,
.register {
  .v-btn {
    a {
      color: #fff;
      font-family: "aasaam-Noto" ;
      text-decoration: none;
    }
  }
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}
</style>
