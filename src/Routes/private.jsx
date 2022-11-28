import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

// eslint-disable-next-line react/prop-types
export function PrivateRoute({ children }) {
  const Auth = useContext(AuthContext);
  console.log("aaa",Auth);
  const authenticated = Auth.user.logged;
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
