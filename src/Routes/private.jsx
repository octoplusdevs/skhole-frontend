import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

// eslint-disable-next-line react/prop-types
export function PrivateRoute({ children }) {
  // const { user } = useAuthContext();
  const user = JSON.parse(localStorage.getItem("user"));
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
