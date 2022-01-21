<template>
  <v-app id="inspire">
    <v-app-bar app :elevation="0" clipped-left height="70" color="primary">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-toolbar-title>
                <v-img src="/MERDEKA_3D.svg"></v-img>
              </v-toolbar-title>
            </v-col>
            <v-col cols="8">
              <v-text-field
                placeholder="Search"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col> vvv </v-col>
      </v-row>
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
