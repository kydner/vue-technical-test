<template>
  <v-col lg="8" md="12" sm="12">
    <MovieList
      :data="movieLists"
      :total-result="totalResult"
      @inputPagination="inputPagination"
    />
  </v-col>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import MovieList from "./../components/details/MovieList.vue";
export default {
  name: "Home",

  components: {
    MovieList,
  },
  data() {
    return {
      movieLists: [],
      totalResult: 0,
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    getMovie(options = {}) {
      const page = options.page || 1;
      const title = options.title || "naruto";
      fetch(`http://www.omdbapi.com/?apikey=271ab1b1&s=${title}&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response) {
            this.movieLists = [...data.Search];
            this.totalResult = data.totalResults;
          }
        });
    },
    inputPagination(value) {
      this.getMovie({
        page: value,
      });
    },
  },
};
</script>
