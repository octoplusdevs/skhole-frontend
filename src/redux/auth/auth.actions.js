import { API } from "../../services/api";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { loginRequest, loginSuccess, loginFailure, logout } from "./auth.slice";

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await API.post(`/auth`, { email, password });
    dispatch(loginSuccess(response.data));
    useLocalStorage("@skhole::user", JSON.stringify(response.data));
  } catch (error) {
    dispatch(loginFailure(error?.response?.data?.error));
  }
};

export const logoutUser = () => async (dispatch) => {
  await API.post(`/logout`);
  dispatch(logout());
};

export const updateUser = (userData) => async (dispatch) => {
  await API.post(`/accounts/${userData.id}`, userData);
  dispatch(loginSuccess(userData));
};
