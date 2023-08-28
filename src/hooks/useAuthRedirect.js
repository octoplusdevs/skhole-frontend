import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetErrors } from "../redux/auth/auth.actions";
import {getAuthToken} from "../utils/auth"

export const useAuthRedirect = (redirectPath) => {
  const isAuthenticated = !!getAuthToken().accessToken;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectPath);
    } else {
      dispatch(resetErrors());
    }
  }, [isAuthenticated, dispatch, history, redirectPath]);
};
