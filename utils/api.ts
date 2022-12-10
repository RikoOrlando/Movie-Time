import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://api.themoviedb.org/3";
instance.defaults.params = {
  api_key: "7d93ab99c86985f388e1d48591dc4c8c",
};
export default instance;
