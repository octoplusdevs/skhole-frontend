import { logoutUser } from "../redux/auth/auth.actions";
import { API } from "./api";

export const refreshNewToken = async (refreshToken) => {
  try {
    const response = await API.post("/refresh-token", { refreshToken }, { withCredentials: true });
    return response.data.accessToken;
  } catch (error) {
    logoutUser();
    console.log("refresh-logout");
    Promise.reject(new Error("REFRESH_TOKEN_ERROR", { cause: "REFRESH_TOKEN_ERROR" }));
  }
};
