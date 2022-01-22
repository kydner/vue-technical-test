<template>
  <v-row>
    <v-col v-for="movie in data" :key="movie.imdbID" lg="4" md="6" sm="12">
      <router-link :to="`/detail/${movie.imdbID}`">
        <v-card flat elevation="0">
          <v-img :src="movie.Poster" contain></v-img>
          <!-- <v-card-title class="text-h6">
        </v-card-title> -->
        </v-card>
        <p class="text-center">
          {{ movie.Title }}
        </p>
      </router-link>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
