import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../services/api";
import { toast } from "react-toastify";

async function updateAccountData(userId, data) {
  try {
    const response = await API.put(`/accounts/${userId}`, data);
    toast.success("Dados da conta atualizados com sucesso!");
    return response.data;
  } catch (error) {
    toast.error("Erro ao atualizar dados da conta");
    throw new Error("Erro ao atualizar dados da conta");
  }
}

function useUpdateAccount() {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      updateAccountData(data.id, data.data);
    },
    {
      onSettled: (data) => {
        queryClient.invalidateQueries(["account", data?.id]);
      },
    },
  );
}

export default useUpdateAccount;
