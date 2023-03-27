import * as yup from "yup";

const Login = yup.object({
  email: yup
    .string()
    .min(4, "*Mínimo 4 caracteres")
    .matches(/^[a-zA-Z]+/, "* Informe o seu nome de usuário sem espaços")
    .required("* Informe o seu nome completo"),
  password: yup
    .string()
    .min(6, "* A senha deve conter no mínimo 6 caracters")
    .required("* Informe a sua senha"),
});

export default Login;
