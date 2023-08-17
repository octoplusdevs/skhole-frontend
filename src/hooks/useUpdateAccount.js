import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";
import { toast } from "react-toastify";
import { queryClient } from "../services/query";

async function updateAccountData(userId, data) {
  try {
    const response = await API.put(`/accounts/${userId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Perfil atualizado com sucesso!");
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
    throw new Error("Erro ao atualizar o perfil!");
  }
}

function useUpdateAccount() {
  return useMutation(
    (params) => {
      const { id, data } = params;
      updateAccountData(id, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["account"]);
      },
    },
  );
}

export default useUpdateAccount;
