import axios from "axios";
import { store } from "../redux";
import { logout } from "../redux/auth/auth.slice";
import { toast } from "react-toastify";

const API = axios.create({
  // baseURL: "https://api.skholepro.com/api/v1",
  baseURL: "http://localhost:3001/api/v1",
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

let isLogoutInProgress = false;

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry && !isLogoutInProgress) {
      originalRequest._retry = true;
      if (
        error?.response?.data?.error === "Token invalid" ||
        error?.response?.data?.error === "User not exists"
      ) {
        toast.error("Sessão expirada, faça login novamente");
        isLogoutInProgress = true;
        store.dispatch(logout()).finally(() => {
          isLogoutInProgress = false;
        });
      }
    }
    return Promise.reject(error);
  },
);

export { API };
