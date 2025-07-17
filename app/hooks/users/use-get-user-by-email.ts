import { API } from "@/services/data";
import { useMutation } from "@tanstack/react-query";

const useGetUserByEmail = () => {
  return useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const response = await API.get("/users", { params: { email } });
      return response.data ?? undefined;
    },
  });
};

export { useGetUserByEmail };
