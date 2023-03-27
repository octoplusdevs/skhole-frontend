import axios from "axios";
const storage = JSON.parse(localStorage.getItem("@skhole::user"));

const API = axios.create({
  baseURL: "https://skhole.onrender.com/api/v1",
});

API.interceptors.request.use(
  (config) => {
    config.headers.authorization = `bearer ${storage?.token}`;
    return config;
  },
  null,
  { synchronous: true },
);

export { API };
