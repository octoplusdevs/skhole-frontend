import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../services/api";
import { toast } from "react-toastify";

async function updateAccountData(userId, data, onError, onSuccess) {
  try {
    const response = await API.put(`/accounts/${userId}`, data);
    toast.success("Dados da conta atualizados com sucesso!");
    onSuccess(response.data);
    return response.data;
  } catch (error) {
    // toast.error("Erro ao atualizar dados da conta");
    toast.error(error.response.data.error);
    onError(error.response.data.error);
    throw new Error("Erro ao atualizar dados da conta");
  }
}

function useUpdateAccount(onError, onSuccess) {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      updateAccountData(data.id, data.data, onError, onSuccess);
    },
    {
      onSettled: (data) => {
        queryClient.invalidateQueries(["account", data?.id]);
      },
    },
  );
}

export default useUpdateAccount;
