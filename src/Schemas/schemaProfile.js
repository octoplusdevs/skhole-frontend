import * as yup from "yup";

const Profile = yup.object({
  username: yup
    .string()
    .required("O nome de usuário é obrigatório.")
    .min(5, "* O nome de usuário deve ter no mínimo 5 caracteres")
    .max(15, "* O nome de usuário deve ter no máximo 15 caracteres")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/,
      "O nome de usuário deve conter apenas letras, e não pode ter espaços, exceto por hífens e sublinhados."
    ),
  email: yup.string()
    .email("* Este e-mail não é válido")
    .required("* Informe o seu email atual"),
  firstname: yup.string(),
  lastname: yup.string(),
  phone: yup.string(),
});

export default Profile;
