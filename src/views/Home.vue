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
import { mapActions, mapState } from "vuex";
// import debounce from "debounce";
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
  computed: {
    ...mapState({
      searchBox: (state) => state.search.search,
    }),
  },
  watch: {
    searchBox: {
      immediate: false,
      handler() {
        this.getMovie();
      },
    },
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    getMovie(options = {}) {
      const page = options.page || 1;
      const title = this.searchBox || null;
      this.searchMovie({ title, page }).then((response) => {
        const data = response.data;
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
    ...mapActions({
      searchMovie: "search/search",
    }),
  },
};
</script>
