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

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await API.post(`/auth`, { email, password });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error?.response?.data?.error));
  }
};

export const logoutUser = () => async (dispatch) => {
  // await API.post(`/logout`);
  dispatch(logout());
};

export const updateUser = (userData) => async (dispatch) => {
  await API.post(`/accounts/${userData.id}`, userData);
  dispatch(loginSuccess(userData));
};

export const registerUser = (userData) => async (dispatch) => {
  const { username, email, password } = userData;
  dispatch(registerRequest());
  try {
    await API.post("/accounts", { username, email, password });
    dispatch(registerSuccess());
    dispatch(loginRequest());
    const response = await API.post(`/auth`, { email, password });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error?.response?.data?.error));
  }
};
export const resetErrors = () => (dispatch) => {
  dispatch(registerRequest());
};
