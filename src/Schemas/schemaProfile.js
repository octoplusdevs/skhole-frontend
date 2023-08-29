import * as yup from "yup";

const Profile = yup.object({
  username: yup
    .string()
    .nullable()
    .test(
      "Nome de usuário deve conter no mínimo 5 caracteres.",
      "Nome de usuário deve conter no mínimo 5 caracteres.",
      (value) => {
        if (!value) return true;
        if (value.length >= 4) return true;
      },
    )
    .max(12, "Nome de usuário deve conter no máximo 12 caracteres.")
    .test("Nome de usuário não é válido.", "Nome de usuário não é válido.", (value) => {
      if (!value) return true;
      const regex = /^(?!.*\.\.)(?!.*\.$)[a-zA-Z]+[_.]?[a-zA-Z0-9]+[_.]{0,29}$/;
      if (value.match(regex)) return true;
    })
    .test(
      "Nome de usuário tem espaços.",
      "Nome de usuário não pode ter apenas números.",
      (value) => !/^[0-9]+/.test(value),
    ),
  email: yup.string().test("Email inválido.", "Email inválido.", (value) => {
    if (!value) return true;
    const emailRegex =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (value.match(emailRegex)) return true;
  }),

  first_name: yup
    .string()
    .max(15)
    .nullable()
    .test("firstname-validation", "Nome inválido.", (value) => {
      if (!value) return true; // Permite campo vazio (nulo)

      // Expressão regular para validação de nomes de forma genérica

      const firstnameRegex = /^[a-zA-ZÀ-ÿ]{4,12}$/;

      // Verificar se o nome coincide com a expressão regular
      if (value.match(firstnameRegex)) {
        return true;
      }

      return false;
    }),
  last_name: yup
    .string()
    .max(15)
    .nullable()
    .test("lastname-validation", "Sobrenome inválido.", (value) => {
      if (!value) return true; // Permite campo vazio (nulo)

      // Expressão regular para validação de sobrenomes de forma genérica
      const lastnameRegex = /^[a-zA-ZÀ-ÿ]{4,12}$/;

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
      if (!value) return true; // Permite campo vazio (nulo)

      // Expressão regular para validação de números de telefone de forma genérica
      const phoneRegex = /^(\+?[0-9]{2,3}?)?([0-9]{9})$/;

      // Verificar se o número de telefone coincide com a expressão regular
      if (value.match(phoneRegex)) {
        return true;
      }

      return false;
    }),
});

export default Profile;
