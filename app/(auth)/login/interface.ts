import z from "zod";

interface IRenderInput {
  type: "email" | "password";
  placeholder: string;
  label: string;
  isError: boolean | any;
  errorMessage: string | undefined;
  register: any;
}

export const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginData = z.infer<typeof loginSchema>;

export type { IRenderInput, LoginData };
