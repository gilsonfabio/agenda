import axios from "axios";

const api = axios.create({
  baseURL: "http://10.111.135.208:3333"
  //baseURL: "http://localhost:3333"
  //baseURL: "https://betbackend-kappa.vercel.app/"
});

export default api;