import * as yup from "yup";

const Profile = yup.object({
  username: yup
    .string()
    .required("O nome de usuário é obrigatório.")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9_]*$/,
      "O nome de usuário deve começar com letras e pode conter underscore (_) no meio ou no final.",
    )
    .matches(
      /^[a-zA-Z0-9][a-zA-Z0-9_]*_?$/,
      "O nome de usuário não pode terminar com caracteres especiais ou hífen (_).",
    )
    .matches(
      /^[a-zA-Z][a-zA-Z0-9_]*$/,
      "O nome de usuário não pode conter caracteres especiais no meio.",
    )
    .min(5, "O nome de usuário deve ter no mínimo 5 caracteres.")
    .max(15, "O nome de usuário deve ter no máximo 15 caracteres."),
  email: yup.string().email("E-mail inválido.").required("Informe o seu e-mail atual."),
  first_name: yup
    .string()
    .max(15)
    .test("firstname-validation", "Nome inválido.", (value) => {
      if (!value) return true; // Permite campo vazio (nulo)

      // Expressão regular para validação de nomes de forma genérica

      const firstnameRegex = /^[a-zA-Z]{4,}$/;

      // Verificar se o nome coincide com a expressão regular
      if (value.match(firstnameRegex)) {
        return true;
      }

      return false;
    }),
  last_name: yup
    .string()
    .max(15)
    .test("lastname-validation", "Sobrenome inválido.", (value) => {
      if (!value) return true; // Permite campo vazio (nulo)

      // Expressão regular para validação de sobrenomes de forma genérica
      const lastnameRegex = /^[a-zA-Z]{4,}$/;

      // Verificar se o sobrenome coincide com a expressão regular
      if (value.match(lastnameRegex)) {
        return true;
      }

      return false;
    }),
  phone: yup
    .string()
    .nullable()
    .test("phone-validation", "Número de telefone inválido.", (value) => {
      // Expressão regular para validação de números de telefone de forma genérica
      const phoneRegex = /^[+]*[(]?[0-9]+[)]?[-\s./0-9]$/;

      // Verificar se o número de telefone coincide com a expressão regular
      if (value.match(phoneRegex)) {
        return true;
      }

      return false;
    }),
});

export default Profile;
