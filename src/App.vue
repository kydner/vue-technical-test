<template>
  <v-app id="inspire">
    <v-app-bar app :elevation="0" clipped-left color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container class="py-0 fill-height" fluid>
        <v-toolbar-title>
          <v-img src="/MERDEKA_3D.svg" max-height="30" max-width="100"></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-responsive max-width="200">
          <v-row>
            <v-col class="">
              <v-img
                src="/IMAX-logo.svg"
                max-height="20"
                max-width="50"
              ></v-img>
            </v-col>
            <v-col class="">
              <v-img
                src="/Logo_Dolby_Atmos.svg"
                max-height="20"
                max-width="50"
              ></v-img>
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer clipped app color="black">
      <!--  -->
      <v-list dense color="black">
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app height="200" color="primary">
      <v-col class="text-center text-justify" cols="12">
        © 1999-2012 21Cineplex.com. All materials and contents (texts, graphics,
        and every attributes) of 21Cineplex or 21Cineplex.com website are
        copyrights and trademarks of PT Nusantara Sejahtera Raya. Any commercial
        usage of the materials and contents is forbidden without prior
        permission from PT Nusantara Sejahtera Raya. There is no other
        institutions/agencies outside PT Nusantara Sejahtera Raya allowed to use
        www.21Cineplex.com (21Cineplex website) without prior permission from PT
        Nusantara Sejahtera Raya
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    selectedItem: 1,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
};
</script>
<style scoped>
.my-app.v-application .primary--text {
  color: white !important;
}
.main {
  background-color: #232c32;
}
</style>
