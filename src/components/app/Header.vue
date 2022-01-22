<template>
  <v-app-bar app :elevation="0" clipped-left color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-container class="py-0 fill-height" fluid>
      <v-toolbar-title>
        <v-img src="/MERDEKA_3D.svg" max-height="30" max-width="100"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
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
