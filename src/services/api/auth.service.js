import AuthTokenManager from "../../utils/auth";
import API from "./axios";

export const refreshTokenService = async () => {
  const refreshToken = AuthTokenManager.getAuthToken().refreshToken;
  const response = await API.post("/refresh-token", { refreshToken });
  const { accessToken } = response.data;

  AuthTokenManager.setAccessToken(accessToken);

  API.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
  return accessToken;
};
