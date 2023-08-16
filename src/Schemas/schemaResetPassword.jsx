import * as Yup from "yup";

const schemaResetPassword = Yup.object().shape({
  password: Yup.string()
    .required("Senha é obrigatória.")
    .min(6, "Senha deve ter pelo menos 6 caracteres.")
    .test("Senha tem espaço", "Senha não deve ter espaços.", (value) => !/\s+/.test(value)),
  email: Yup.string().test("Email inválido.", "Email inválido.", (value) => {
    const emailRegex =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (value.match(emailRegex)) return true;
  }),
  confirmPassword: Yup.string()
    .required("Confirme a sua senha.")
    .oneOf([Yup.ref("password"), null], "As senha devem ser iguais."),
});

export default schemaResetPassword;
