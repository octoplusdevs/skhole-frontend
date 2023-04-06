import { store } from "../redux";
import { logout } from "../redux/auth/auth.slice";

export default function configureInterceptors(api) {
  api.interceptors.request.use(
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

  api.interceptors.response.use(
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
}
