<template>
  <v-row>
    <v-col v-for="movie in data" :key="movie.imdbID" lg="4" md="6" sm="12">
      <router-link
        :to="`/detail/${movie.imdbID}`"
        style="text-decoration: none"
      >
        <v-card>
          <v-img :src="movie.Poster" max-height="420"></v-img>
          <!-- <v-card-title class="text-h6">
        </v-card-title> -->
        </v-card>
        <p class="text-center primary-text pt-2">
          {{ movie.Title }}
        </p>
      </router-link>
    </v-col>
    <v-col cols="12">
      <v-pagination
        v-model="page"
        :length="paginationLength"
        circle
        class="custom-pagination"
        previous-aria-label="Sebelumnya"
        next-aria-label="Selanjutnya"
        @input="(event) => $emit('inputPagination', event)"
      ></v-pagination>
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
    totalResult: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      page: 1,
      length: 4,
    };
  },
  computed: {
    paginationLength() {
      return Math.ceil(this.totalResult / 10);
    },
  },
};
</script>
