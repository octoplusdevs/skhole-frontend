/* eslint-disable prettier/prettier */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../services/api";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await API.post("/auth", {
        username,
        password,
      });
      const { user, token } = response.data;
      const userData = {
        ...user,
        token,
        logged: true,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch({
        type: "LOGIN",
        payload: userData,
      });
      API.defaults.headers["Authorization"] = `Bearer ${token}`;
      toast.success("Login feito!");
      navigate("/discover");
    } catch (error) {
      setError(error);
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
