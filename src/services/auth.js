import { removeAuthToken } from "../utils/auth";
import { API } from "./api";

export const refreshNewToken = async (refreshToken) => {
  try {
    const response = await API.post("/refresh-token", { refreshToken }, { withCredentials: true });
    return response.data.accessToken;
  } catch (error) {
    await API.post(`/auth/logout`);
    removeAuthToken();
    // window.location.href = "/login";
    Promise.reject(new Error("REFRESH_TOKEN_ERROR", { cause: "REFRESH_TOKEN_ERROR" }));
  }
};
