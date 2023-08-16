import * as Yup from "yup";

const SchemaChangePassword = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Senha atual.")
    .min(6, "Senha deve ter pelo menos 6 caracteres.")
    .required("Informe a sua senha atual."),
  newPassword: Yup.string()
    .required("Nova senha.")
    .min(6, "Senha deve ter pelo menos 6 caracteres.")
    .test("Senha tem espaço", "Senha não deve ter espaços.", (value) => !/\s+/.test(value)),
  confirmPassword: Yup.string()
    .required("Repita a nova senha.")
    .oneOf([Yup.ref("newPassword"), null], "As senhas não podem ser diferentes."),
});

export default SchemaChangePassword;
