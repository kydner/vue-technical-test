<template>
  <v-app id="inspire">
    <Header />
    <Drawer />
    <v-main class="main">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/app/Header.vue";
import Drawer from "./components/app/Drawer.vue";
import Footer from "./components/app/Footer.vue";
export default {
  name: "App",

  components: {
    Header,
    Drawer,
    Footer,
  },

  data: () => ({
    drawer: null,
  }),
};
</script>
<style scoped></style>
