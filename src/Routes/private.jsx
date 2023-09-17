import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, Slide } from "react-toastify";

export const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    toast.info("Sessão Terminada", {
      hideProgressBar: true,
      draggable: false,
    });
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
