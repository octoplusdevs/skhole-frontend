import * as yup from "yup";

const Register = yup.object({
  username: yup
    .string()
    .required("O nome de usuário é obrigatório.")
    .min(5, "* O nome de usuário deve ter no mínimo 5 caracteres")
    .max(15, "* O nome de usuário deve ter no máximo 15 caracteres")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/,
      "O nome de usuário deve conter apenas letras, e não pode ter espaços, exceto por hífens e sublinhados.",
    ),
  email: yup.string().email("* Este e-mail não é válido").required("* Informe o seu email atual"),
  password: yup
    .string()
    .min(6, "* A senha deve conter no mínimo 6 caracteres")
    .required("* Informe a sua nova senha"),
});

export default Register;
