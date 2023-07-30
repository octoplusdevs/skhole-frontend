import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetErrors } from "../redux/auth/auth.actions";

export const useAuthRedirect = (redirectPath) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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
