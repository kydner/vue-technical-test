import axios from "axios";
export default {
  search(_options, params = {}) {
    const title = params.title || null;
    const page = params.page || 0;
    return axios.get(
      `http://www.omdbapi.com/?apikey=271ab1b1&s=${title}&page=${page}`
    );
  },
};
