import { toast } from "react-toastify";
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
    if (error?.response?.data?.error === "User not confirmed.") {
      toast.error("Usuário não confirmado. Verifique seu e-mail.");
    }
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
