import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#C0222E", // #E53935
        dark: "#232C32", // #FFCDD2
        black: "#191C1F",
        white: "#ffffff",
      },
    },
  },
});
