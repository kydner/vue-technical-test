<template>
  <div>
    <v-col v-if="detail">
      <h3>{{ detail.Title }}</h3>
      <v-row class="pt-2">
        <v-col lg="2" md="2" sm="6">
          <v-img :src="detail.Poster"></v-img>
        </v-col>
        <v-col lg="7" md="6" sm="12">
          <v-col>
            <p class="">Release Date: {{ detail.Released }}</p>
            <p class="">Release Date: {{ detail.Released }}</p>
            <p class="">Release Date: {{ detail.Released }}</p>
            <p class="">Release Date: {{ detail.Released }}</p>
            <p class="">Release Date: {{ detail.Released }}</p>
            <p class="">Release Date: {{ detail.Released }}</p>
            <p class="">Release Date: {{ detail.Released }}</p>
            <p class="">Release Date: {{ detail.Released }}</p>
            <h3>SINOPSIS</h3>
            <p>{{ detail.Plot }}</p>
          </v-col>
          <v-col>
            <v-btn color="primary">Buy Ticket</v-btn>
            &nbsp;
            <v-btn color="primary">Buy Ticket</v-btn>
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
  watch: {
    detail: {
      immediate: true,
      handler(value) {
        console.log(value);
      },
    },
  },
};
</script>
