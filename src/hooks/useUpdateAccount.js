import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../services/api";
import { toast } from "react-toastify";

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
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      updateAccountData(data.id, data.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["account"]);
      },
    },
  );
}

export default useUpdateAccount;
