import { API } from "./api";

export const refreshNewToken = async (refreshToken) => {
  try {
    const response = await API.post("/refresh-token", { refreshToken });
    return response.data.accessToken;
  } catch (error) {
    Promise.reject(new Error("REFRESH_TOKEN_ERROR", { cause: "REFRESH_TOKEN_ERROR" }));
  }
};
