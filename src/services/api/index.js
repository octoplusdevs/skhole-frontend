import { store } from "../../redux";
import { logoutUser } from "../../redux/auth/auth.actions";
import { toast } from "react-toastify";
import API from "./axios";
import { refreshTokenService } from "./auth.service";
import AuthTokenManager from "../../utils/auth";

let isRefreshing = false;
let failedRequestQueue = [];
let logoutTriggered = false;

const requestInterceptor = (config) => {
  const token = AuthTokenManager.getAuthToken().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const responseInterceptor = async (error) => {
  if (
    error.response.status === 401 ||
    error.response.status === "Invalid token." ||
    error.response.status === "Authorization token missing." ||
    error.response.status === "Token missing in authorization header." ||
    error.response.status === "Token has expired."
  ) {
    const originalConfig = error.config;

    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const accessToken = await refreshTokenService();
        failedRequestQueue.forEach((request) => request.onSuccess(accessToken));
        failedRequestQueue = [];
      } catch (err) {
        failedRequestQueue.forEach((request) => request.onFailure(err));
        failedRequestQueue = [];
        store.dispatch(logoutUser());
      } finally {
        isRefreshing = false;
      }
    }

    return new Promise((resolve, reject) => {
      failedRequestQueue.push({
        onSuccess: (accessToken) => {
          originalConfig.headers["Authorization"] = `Bearer ${accessToken}`;
          resolve(API(originalConfig));
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }

  if (
    [400, 404, 401, 500].includes(error.response.status) &&
    [
      "Expired or invalid refresh token.",
      "Missing refresh token.",
      "Token verification failed.",
      "Refresh token not found.",
    ].includes(error.response.data?.error)
  ) {
    if (!logoutTriggered) {
      logoutTriggered = true;

      toast.error("Sessão expirada", {
        autoClose: 5000,
        onClose: () => {
          document.location.reload();
        },
      });
    }
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

API.interceptors.request.use(requestInterceptor, (error) => Promise.reject(error));
API.interceptors.response.use((response) => response, responseInterceptor);

export { API };
