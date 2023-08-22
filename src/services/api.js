import axios from "axios";
import Cookies from "js-cookie";

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
    const response = await API.post(
      "/refresh-token",
      { refreshToken },
      {
        withCredentials: true,
      },
    );
    return response.data.accessToken;
  } catch (error) {
    // throw error;
  }
};

// Intercepta erros de autenticação (401 Unauthorized)
API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Se a solicitação original retornou 401 e não é uma tentativa de renovação do token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        try {
          const response = await refreshToken(refreshToken);
          const newAccessToken = response;

          Cookies.set("accessToken", newAccessToken);
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axios(originalRequest);
        } catch (refreshError) {
          console.error("Erro ao renovar o token de acesso:", refreshError);
          // Realize o tratamento adequado do erro de renovação do token
        }
      }
    }

    return Promise.reject(error);
  },
);
export { API };
