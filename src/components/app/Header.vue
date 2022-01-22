<template>
  <v-app-bar app :elevation="0" clipped-left color="primary">
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-flex d-sm-none"
    ></v-app-bar-nav-icon>
    <v-container class="py-0 fill-height" fluid>
      <v-toolbar-title class="p-header">
        <router-link to="/">
          <v-img src="/MERDEKA_3D.svg" max-height="30" max-width="100"></v-img>
        </router-link>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-text-field
        dense
        flat
        v-model.lazy="search"
        hide-details
        rounded
        solo-inverted
        color="red"
        clearable
        background-color="grey lighten-2"
        class="text-search w-80"
        placeholder="Search Title / Theatre Here"
        @input="(event) => searchBlur(event)"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-responsive max-width="200">
        <v-row>
          <v-col class="">
            <v-img src="/IMAX-logo.svg" max-height="20" max-width="50"></v-img>
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
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      drawer: null,
      search: null,
      timeout: null,
    };
  },
  methods: {
    searchBlur(event) {
      this.$emit("searchBlur", event);
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.setSearch(event);
        this.$router.replace("/").catch(() => {});
      }, 200);
    },
    ...mapMutations({
      setSearch: "search/setSearch",
    }),
  },
};
</script>
<style scoped>
.text-search input:focus {
  color: green !important;
}
.p-header {
  padding-right: 6.5em;
}
</style>
