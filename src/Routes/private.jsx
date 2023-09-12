import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthTokenManager from "../utils/auth";

export const PrivateRoute = () => {
  const { accessToken, refreshToken } = AuthTokenManager.getAuthToken();

  // console.log(useSelector((state) => state));

  const hasTokens = accessToken != null || refreshToken != null;

  if (hasTokens) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
