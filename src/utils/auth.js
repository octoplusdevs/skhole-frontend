import Cookies from "js-cookie";

export const getAuthToken = () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  return { accessToken, refreshToken };
};

export const setAuthToken = ({ refreshToken, accessToken, user_id }) => {
  // Cookies.set("accessToken", accessToken, { secure: true, sameSite: "strict" });
  // Cookies.set("refreshToken", refreshToken, { secure: true, sameSite: "strict" });
  Cookies.set("userId", user_id, { secure: true, sameSite: "strict" });
};

export const removeAuthToken = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  Cookies.remove("userId");
};
