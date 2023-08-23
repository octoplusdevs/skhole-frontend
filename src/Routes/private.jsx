import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Cookies.get("accessToken") !== undefined && Cookies.get("accessToken") !== null,
  );

  useEffect(() => {
    const checkAuthStatus = () => {
      const accessToken = Cookies.get("accessToken");
      const newIsAuthenticated = accessToken !== undefined && accessToken !== null;
      setIsAuthenticated(newIsAuthenticated);
    };

    // Adicionar um listener para o evento "change" nos cookies
    window.addEventListener("storage", checkAuthStatus);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
