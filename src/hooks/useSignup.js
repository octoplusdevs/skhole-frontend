/* eslint-disable prettier/prettier */
import { useState } from "react";
import { toast } from 'react-toastify';
import api from "../services/api"

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (username, email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      await api.post("/users", {
        username,
        email,
        password,
      });
      toast.success("Parabéns, conta criada!")


    } catch (error) {
      setError(error);
      toast.error(error)

    } finally {
      setIsLoading(false);
    }
  };

  return { signup,isLoading, error }
};
