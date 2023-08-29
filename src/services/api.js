import axios from "axios";
import { store } from "../redux";
import { logout } from "../redux/auth/auth.slice";
import { toast } from "react-toastify";
import { getAuthToken, setAuthToken,removeAuthToken } from "../utils/auth";
import Cookies from "js-cookie";
import { logoutUser } from "../redux/auth/auth.actions";

const API = axios.create({
  baseURL: "https://skhole.onrender.com/api/v1",
  // baseURL: "http://localhost:3001/api/v1",
});

let isRefreshing = false; // Track if a token refresh is already in progress
let refreshSubscribers = []; // Queue of requests waiting for token refresh

API.interceptors.request.use(
  (config) => {
    const token = getAuthToken().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const redirectToLogin = () => {
  // Aqui você pode redirecionar o usuário para a tela de login
  // ou executar outras ações necessárias
  // store.dispatch(logout());
  store.dispatch(logoutUser())
  // document.location.href = "/login"
};

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (
        error?.response?.data?.error === "The token is missing!" ||
        error?.response?.data?.error === "User not exists" ||
        error?.response?.data?.error === "Invalid Token!"
      ) {
        if (!isRefreshing) {
          isRefreshing = true;
          const refreshToken = getAuthToken().refreshToken;
          try {
            const response = await API.post("/refresh-token", { refreshToken });
            const newToken = response.data.accessToken;
            var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
            Cookies.set("skhole.token", newToken, {
              secure: true,
              sameSite: "strict",
              expires: inFifteenMinutes,
            });
            API.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
            refreshSubscribers.forEach((callback) => callback(newToken));
            refreshSubscribers = [];
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return API(originalRequest);
          } catch (refreshError) {
            store.dispatch(logout());
          } finally {
            isRefreshing = false;
          }
        } else {
          return new Promise((resolve) => {
            refreshSubscribers.push((token) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(API(originalRequest));
            });
          });
        }
      }
    } else if (
      error?.response?.status === 403 &&
      error?.response?.data?.error === "Refresh Token Inválido." ||
      error?.response?.data?.error === "Refresh Token Em Falta."

    ) {
      redirectToLogin();
    }

    return Promise.reject(error);
  },
);

export { API };
