import Cookies from "js-cookie";

export const getAuthToken = () => {
  const accessToken = Cookies.get("skhole.token");
  const refreshToken = Cookies.get("skhole.refresh");
  return { accessToken, refreshToken };
};

export const setAuthToken = ({ refreshToken, accessToken, user_id }) => {
  var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);

  Cookies.set("skhole.token", accessToken, {
    secure: true,
    sameSite: "strict",
    expires: inFifteenMinutes,
  });
  Cookies.set("skhole.refresh", refreshToken, {
    secure: true,
    sameSite: "strict",
    expires: 7
  });
  Cookies.set("skhole.user.id", user_id, { secure: true, sameSite: "strict" });
};

export const removeAuthToken = () => {
  Cookies.remove("skhole.user.id");
  Cookies.remove("skhole.refresh");
  Cookies.remove("skhole.token");
};
