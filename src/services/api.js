import axios from "axios";
import { store } from "../redux";
import { logout } from "../redux/auth/auth.slice";

const API = axios.create({
  // baseURL: "https://skhole.onrender.com/api/v1",
  baseURL: "http://localhost:3000/api/v1",
});

API.interceptors.request.use(
  (config) => {
    const { auth } = store.getState();
    const token = auth?.user?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch(logout());
    }
    return Promise.reject(error);
  },
);

export { API };
