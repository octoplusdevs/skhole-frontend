import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, Slide } from "react-toastify";

export const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const showToast = useSelector((state) => state.auth.showToast);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    if (showToast) {
      toast.info("Sessão Terminada", {
        hideProgressBar: true,
        draggable: false,
      });
    }
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
