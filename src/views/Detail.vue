<template>
  <v-container class="about" fluid>
    <v-col>
      <DetailMovie :detail="detail" />
    </v-col>
    <v-col>
      <NowPlaying />
    </v-col>
  </v-container>
</template>
<script>
import NowPlaying from "./../components/details/NowPlaying.vue";
import DetailMovie from "./../components/details/DetailMovie.vue";
export default {
  components: {
    NowPlaying,
    DetailMovie,
  },
  data() {
    return {
      detail: null,
    };
  },
  mounted() {
    if (this.$route.params?.id) {
      const id = this.$route.params.id;
      fetch(`http://www.omdbapi.com/?apikey=271ab1b1&i=${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response) {
            this.detail = { ...data };
          }
        });
    }
  },
};
</script>
