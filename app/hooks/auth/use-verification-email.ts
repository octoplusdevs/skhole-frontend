import { API } from "@/services/data";
import { useMutation } from "@tanstack/react-query";

interface IUseVerificationEmail {
  email: string;
  token: string;
}

const useVerificationEmail = () => {
  return useMutation({
    mutationFn: async (data: IUseVerificationEmail) => {
      const response = await API.get("/users/verify-email", { params: data });
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export { useVerificationEmail };
