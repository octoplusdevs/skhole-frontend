import * as yup from "yup";

const Register = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "* Informe o seu primeiro e último nome")
    .required("* Informe o seu nome completo"),
  email: yup.string().email("* Este e-mail não é válido").required("* Informe o seu email actual"),
  password: yup
    .string()
    .min(6, "* A senha deve conter no mínimo 6 caracters")
    .required("* Informe a sua nova senha"),
});

export default Register;
