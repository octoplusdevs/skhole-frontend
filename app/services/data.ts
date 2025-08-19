import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "https://api.skholepro.com",
});

API.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { API };
