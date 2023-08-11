import * as Yup from "yup";

const SchemaChangePassword = Yup.object().shape({
  oldPassword: Yup.string().required("Informe a sua senha atual."),
  newPassword: Yup.string()
    .required("Informe a nova senha.")
    .min(6, "A senha deve conter no mínimo 6 caracters."),
  confirmPassword: Yup.string()
    .required("Repita a nova senha.")
    .oneOf([Yup.ref("newPassword"), null], "As senhas não podem ser diferentes."),
});

export default SchemaChangePassword;
