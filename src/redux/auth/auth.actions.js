import Cookies from "js-cookie";
import { API } from "../../services/api";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registerRequest,
  registerSuccess,
  registerFailure,
} from "./auth.slice";

export const loginUser = (email, password, onSuccess, onError) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await API.post(`/auth`, { email, password });
    const { accessToken, refreshToken, user_id } = response.data;
    Cookies.set("accessToken", accessToken, { secure: true, sameSite: "strict" });
    Cookies.set("refreshToken", refreshToken, { secure: true, httpOnly: true, sameSite: "strict" });
    Cookies.set("userId", user_id, { secure: true, sameSite: "strict" });
    onSuccess();
  } catch (error) {
    dispatch(loginFailure(error?.response?.data?.error));
    onError(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  await API.post(`/auth/logout`);
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  Cookies.remove("userId");
  dispatch(logout());
  // window.location.href = "/login";
};

export const updateUser = (userData) => async (dispatch) => {
  await API.post(`/accounts/${userData.id}`, userData);
  dispatch(loginSuccess(userData));
};

export const registerUser = (userData, onSuccess, onError) => async (dispatch) => {
  const { username, email, password } = userData;
  dispatch(registerRequest());
  try {
    const response = await API.post("/accounts", { username, email, password });
    dispatch(registerSuccess());
    onSuccess(response.data);
  } catch (error) {
    onError(error?.response?.data?.error);
    dispatch(registerFailure(error?.response?.data?.error));
  }
};
export const resetErrors = () => (dispatch) => {
  dispatch(registerRequest());
};

export const refreshAccessToken = async () => {
  const refreshToken = Cookies.get("refresh_token");
  if (refreshToken) {
    try {
      const newAccessToken = await API.refreshToken(refreshToken);
      if (newAccessToken) {
        Cookies.set("access_token", newAccessToken);
        return newAccessToken;
      } else {
        throw new Error("Failed to refresh access token");
      }
    } catch (error) {
      //return error;
    }
  } else {
    //throw new Error("Refresh token not found");
  }
};
