<template>
  <div>
    <v-col v-if="detail">
      <h3>{{ detail.Title }}</h3>
      <v-row class="pt-2">
        <v-col lg="3" md="4" sm="6">
          <v-img :src="detail.Poster"></v-img>
        </v-col>
        <v-col lg="7" md="6" sm="12">
          <v-col>
            <p class="">
              Release Date: {{ detail.Released }} <br />
              Language: {{ detail.Language }} <br />
              Genre: {{ detail.Genre }} <br />
              Cast & Crew: {{ detail.Writer }} <br />
              Director: {{ detail.Director }} <br />
              Length: {{ detail.Runtime }}
            </p>
            <h3>SINOPSIS</h3>
            <p>{{ detail.Plot }}</p>
          </v-col>
          <v-col>
            <v-btn color="primary">Buy Ticket</v-btn>
            &nbsp;
            <v-btn color="primary">Watch Trailer</v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>
<script>
export default {
  props: {
    detail: {
      type: Object,
      default: () => null,
    },
  },
  watch: {},
};
</script>
