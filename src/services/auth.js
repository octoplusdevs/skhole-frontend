import { API } from "./api";

export const refreshNewToken = async (refreshToken) => {
  const response = await API.post("/refresh-token", { refreshToken }, { withCredentials: true });
  return response.data.accessToken;
};
