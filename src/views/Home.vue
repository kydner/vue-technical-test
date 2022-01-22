<template>
  <v-col lg="8" md="12" sm="12">
    <MovieList :data="movieLists" />
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
    };
  },
  mounted() {
    fetch("http://www.omdbapi.com/?apikey=271ab1b1&s=kim")
      .then((response) => response.json())
      .then((data) => {
        if (data.Response) {
          this.movieLists = [...data.Search];
        }
      });
  },
};
</script>
