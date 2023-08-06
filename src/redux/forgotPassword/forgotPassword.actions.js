import { API } from "../../services/api";
import {
  forgotPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
} from "./forgotPassword.slice";

export const sendForgotPasswordEmail = (email, onSuccess) => {
  return async (dispatch) => {
    dispatch(forgotPasswordRequest());
    try {
      const response = await API.post("/password/forgot", { email });
      dispatch(forgotPasswordSuccess(response?.data?.message));
      onSuccess();
    } catch (error) {
      dispatch(forgotPasswordFailure(error?.response?.data?.error));
    }
  };
};
