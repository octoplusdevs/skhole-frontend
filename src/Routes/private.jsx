import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, Slide } from "react-toastify";

export const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    toast.info("Sessão expirada", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
