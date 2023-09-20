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
    .trim() // Remove espaços no início e no final
    .test("name-length", "Nome muito curto.", (value) => {
      if (!value || value.length === 0) return true; // Permite campo vazio (nulo)
      return value.length >= 2;
    })
    .max(30, "Nome muito longo.")
    .test("single-name", "Apenas um nome é permitido.", (value) => {
      if (!value) return true; // Permite campo vazio (nulo)
      return !value.includes(" ");
    })
    .matches(/^[a-zA-ZÀ-ÿ]+$/, { message: "Nome inválido.", excludeEmptyString: true })
    .nullable(),
  last_name: yup
    .string()
    .trim() // Remove espaços no início e no final
    .test("name-length", "Nome muito curto.", (value) => {
      if (!value || value.length === 0) return true; // Permite campo vazio (nulo)
      return value.length >= 2;
    })
    .max(30, "Nome muito longo.")
    .test("single-name", "Apenas um nome é permitido.", (value) => {
      if (!value) return true; // Permite campo vazio (nulo)
      return !value.includes(" ");
    })
    .matches(/^[a-zA-ZÀ-ÿ]+$/, { message: "Nome inválido.", excludeEmptyString: true })
    .nullable(),
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
