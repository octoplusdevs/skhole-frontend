import { logoutUser } from "../redux/auth/auth.actions";
import store from "../redux";
import { API } from "./api";

export const refreshNewToken = async (refreshToken) => {
  try {
    const response = await API.post("/refresh-token", { refreshToken }, { withCredentials: true });
    return response.data.accessToken;
  } catch (error) {
    store.dispatch(logoutUser());
    Promise.reject(new Error("REFRESH_TOKEN_ERROR", { cause: "REFRESH_TOKEN_ERROR" }));
  }
};
