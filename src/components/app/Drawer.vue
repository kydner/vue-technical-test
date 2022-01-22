<template>
  <v-navigation-drawer clipped app color="black">
    <!--  -->
    <v-list dense color="black">
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-content>
            <v-list-item-title
              v-text="item.text"
              class="primary-text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "Now Playing", to: "/now-playing" },
        { text: "Coming Soon", to: "/coming-soon" },
        { text: "Theater", to: "/theater" },
        { text: "Promotion", to: "/promotion" },
        { text: "Information", to: "/information" },
      ],
    };
  },
};
</script>
<style>
.v-list-item--active {
  background-color: #191c1f;
}
</style>
