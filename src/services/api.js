import axios from "axios";
import Cookies from "js-cookie";
import { store } from "../redux";
import { logoutUser } from "../redux/auth/auth.actions";

const API = axios.create({
  baseURL: "https://api.skholepro.com/api/v1",
  // baseURL: "http://localhost:3001/api/v1",
});

API.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const refreshToken = async (refreshToken) => {
  try {
    const response = await API.post("/refresh-token", { refreshToken });
    return response.data.accessToken;
  } catch (error) {
    // throw error;
  }
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
        error?.response?.data?.error === "Token Inválido!" ||
        error?.response?.data?.error === "Token em falta!" ||
        error?.response?.data?.error === "User not exists"
      ) {
        const refreshTokenValue = Cookies.get("refreshToken");
        if (refreshTokenValue) {
          try {
            const newAccessToken = await refreshToken(refreshTokenValue);
            if (newAccessToken) {
              // Atualizar o token no cookie e no cabeçalho da requisição
              Cookies.set("accessToken", newAccessToken);
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return API(originalRequest);
            } else {
              // Lidar com a falha na renovação do token
              // console.error("Falha ao renovar o access token");
              store.dispatch(logoutUser());
              // toast.error("Falha ao renovar o access token, faça login novamente");
            }
          } catch (refreshError) {
            // Lidar com o erro de renovação do token
            // console.error("Erro ao renovar o token:", refreshError);
            // toast.error("Sessão expirada, faça login novamente");
            store.dispatch(logoutUser());
          }
        } else {
          // Não há refresh token disponível, redirecionar para a tela de login
          // console.error("Refresh token não encontrado");
          store.dispatch(logoutUser());
        }
      }
    }
    return Promise.reject(error);
  },
);

export { API };
