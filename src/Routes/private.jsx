import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const isAuthenticated =
    Cookies.get("accessToken") !== undefined || Cookies.get("accessToken") === null;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
