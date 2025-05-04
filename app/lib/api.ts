import axios from "axios";

export const API = axios.create({
  baseURL: "https://suaapi.com/api",
});

API.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
