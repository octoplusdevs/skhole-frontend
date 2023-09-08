import React from "react";
import { getAuthToken } from "../utils/auth";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const isAuthenticated = getAuthToken().accessToken || getAuthToken().refreshToken != null;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
