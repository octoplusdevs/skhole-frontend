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

const TOKEN_ERRORS = [
  "Invalid token.",
  "Authorization token missing.",
  "Token missing in authorization header.",
  "Token has expired.",
];

const REFRESH_TOKEN_ERRORS = [
  "Expired or invalid refresh token.",
  "Missing refresh token.",
  "Token verification failed.",
  "Refresh token not found.",
];

let pendingRequests = [];

const processQueue = (error, accessToken = null) => {
  pendingRequests.forEach((callback) => {
    if (accessToken) {
      callback(accessToken);
    } else {
      callback(error);
    }
  });
  pendingRequests = [];
};

const handleTokenRefresh = async (originalConfig) => {
  const retryOriginalRequest = new Promise((resolve, reject) => {
    pendingRequests.push((accessTokenOrError) => {
      if (accessTokenOrError instanceof Error) {
        reject(accessTokenOrError);
      } else {
        originalConfig.headers["Authorization"] = `Bearer ${accessTokenOrError}`;
        resolve(API(originalConfig));
      }
    });
  });
  if (!isRefreshing) {
    isRefreshing = true;
    try {
      const accessToken = await refreshTokenService();
      processQueue(null, accessToken);
    } catch (err) {
      processQueue(err);
      store.dispatch(logoutUser());
    } finally {
      isRefreshing = false;
    }
  }

  return retryOriginalRequest;
};

const handleSessionExpiry = async (error) => {
  if (!logoutTriggered) {
    logoutTriggered = true;
  }
  return Promise.reject(error);
};

const responseInterceptor = async (error) => {
  const errorData = error.response.data?.error;

  if (TOKEN_ERRORS.includes(errorData)) {
    return handleTokenRefresh(error.config);
  }

  if (
    [400, 404, 401, 500].includes(error.response.status) &&
    REFRESH_TOKEN_ERRORS.includes(errorData)
  ) {
    return handleSessionExpiry(error);
  }

  return Promise.reject(error);
};

API.interceptors.request.use(requestInterceptor, (error) => Promise.reject(error));
API.interceptors.response.use((response) => response, responseInterceptor);

export { API };
