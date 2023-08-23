import axios, { AxiosError, isAxiosError } from "axios";
import jwtDecode from "jwt-decode";
import { getAuthToken, setAuthToken } from "../utils/auth";
import { refreshNewToken } from "./auth";

// const BASE_URL = import.meta.env.VITE_API_URL;

const commonOptions = {
  baseURL: "https://api.skholepro.com/api/v1",
  // baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

// create two instances of axios to avoid infinite loop
export const API = axios.create(commonOptions);
export const axiosRefreshTokenInstance = axios.create(commonOptions);

const pathnamesMatches = ["/refresh-token", "/auth/logout", "/auth"];

// interceptor request
API.interceptors.request.use(async (config) => {
  const pathname = config.url ?? "";
  const { accessToken } = getAuthToken();
  config.headers.Authorization = `Bearer ${accessToken}`;

  if (accessToken) {
    const decodedToken = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    if (
      decodedToken.exp &&
      decodedToken.exp < currentTime &&
      !pathnamesMatches.includes(pathname) &&
      !config.isRetry
    ) {
      config.isRetry = true;
      const { refreshToken } = getAuthToken();
      const newAccessToken = await refreshNewToken(refreshToken);
      setAuthToken({ accessToken: newAccessToken });
      config.headers.Authorization = `Bearer ${newAccessToken}`;
    }
  }

  return config;
}, undefined);

export const DEFAULT_ERROR_MESSAGES = {
  somethingMessage: "🤯 Ops! Something went wrong, please try again later.",
  networkError: "📡 Network error, please try again later.",
  unauthorizedMessage: "🔐 Unauthorized, please login again.",
};

const mappedErrors = {
  500: DEFAULT_ERROR_MESSAGES.somethingMessage,
  401: DEFAULT_ERROR_MESSAGES.unauthorizedMessage,
};

// interceptor response and add custom error message if needed
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const newResponse = { ...error };

    if (isAxiosError(error)) {
      if (error.code === AxiosError.ERR_NETWORK) {
        newResponse.message = DEFAULT_ERROR_MESSAGES.networkError;
        return Promise.reject(newResponse);
      }

      if (error.response && !error.response.data.message) {
        newResponse.message = DEFAULT_ERROR_MESSAGES.somethingMessage;
        return Promise.reject(newResponse);
      }

      if (error.response?.status && error.response.status in mappedErrors) {
        newResponse.message = mappedErrors[error.response?.status];
        return Promise.reject(newResponse);
      }

      newResponse.message = error.response?.data.message ?? newResponse.message;
      return Promise.reject(newResponse);
    }

    return Promise.reject(error);
  },
);
