import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../services/api";
import { toast } from "react-toastify";

async function updateAccountData(userId, data, onError, onSuccess) {
  try {
    const response = await API.put(`/accounts/${userId}`, data);
    toast.success("Perfil atualizado com sucesso!");
    onSuccess(response.data);
    return response.data;
  } catch (error) {
    // toast.error("Erro ao atualizar dados da conta");
    toast.error(error.response.data.error);
    onError(error.response.data.error);
    throw new Error("Erro ao atualizar o perfil!");
  }
}

function useUpdateAccount(onError, onSuccess) {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      updateAccountData(data.id, data.data, onError, onSuccess);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["account"]);
      },
    },
  );
}

export default useUpdateAccount;
