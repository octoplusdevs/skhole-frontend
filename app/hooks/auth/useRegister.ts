import { API } from "@/services/data";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface IUseRegister {
  email: string;
  password: string;
  username: string;
  fullName: string;
  country: string;
}

const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: IUseRegister) => {
      const response = await API.post("users", data);
      return response.data;
    },
    onSuccess: async (data) => {
      toast.success("Conta criada 🎉");
      router.push(`/email-verify?email=${data.email}`);
    },
  });
};

export { useRegister };
