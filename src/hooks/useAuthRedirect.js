import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetErrors } from "../redux/auth/auth.actions";
import Cookies from "js-cookie";

export const useAuthRedirect = (redirectPath) => {
  const isAuthenticated = Cookies.get("accessToken") !== undefined;
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
