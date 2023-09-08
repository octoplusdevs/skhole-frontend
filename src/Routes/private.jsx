import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../utils/auth";

const PrivateRoute = () => {
  const { accessToken, refreshToken } = getAuthToken();

  const isAuthenticated = accessToken != null || refreshToken != null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
