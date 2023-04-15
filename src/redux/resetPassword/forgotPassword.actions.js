import { API } from "../../services/api";
import {
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
} from "./forgotPassword.slice";

export const resetPassword = (token, email, password, confirmPassword) => {
  return async (dispatch) => {
    dispatch(resetPasswordRequest());
    try {
      const response = await API.post("/password/reset", {
        email,
        token,
        password,
        confirmPassword,
      });
      dispatch(resetPasswordSuccess(response.data.message));
    } catch (error) {
      dispatch(resetPasswordFailure(error.response.data.error));
    }
  };
};
