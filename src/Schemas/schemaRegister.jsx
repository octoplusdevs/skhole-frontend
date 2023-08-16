import * as yup from "yup";

const Register = yup.object({
  username: yup
    .string()
    .nullable()
    .min(5, "Nome de usuário deve conter no mínimo 5 caracteres.")
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
    const emailRegex =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (value.match(emailRegex)) return true;
  }),
  password: yup
    .string()
    .required("Senha é obrigatória.")
    .min(6, "Senha deve ter pelo menos 6 caracteres.")
    .test("Senha tem espaço", "Senha não deve ter espaços.", (value) => !/\s+/.test(value)),
});

export default Register;
