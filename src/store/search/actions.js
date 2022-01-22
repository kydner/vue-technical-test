import axios from "axios";
export default {
  search(_options, text = "") {
    return axios.get(`http://www.omdbapi.com/?apikey=271ab1b1&s=${text}`);
  },
};
