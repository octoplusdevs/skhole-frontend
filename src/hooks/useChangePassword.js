import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
import { toast } from "react-toastify";

async function changePassword(data) {
  try {
    const response = await API.put(`/password/change`, data);
    toast.success("Senha alterada com sucesso!");
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
    throw new Error("Erro ao alterar a senha!");
  }
}

function useChangePassword() {
  return useMutation((data) => {
    changePassword(data.data);
  });
}

export default useChangePassword;
