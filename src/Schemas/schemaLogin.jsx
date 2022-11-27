import * as yup from "yup";

const Login = yup.object({
  email: yup.string().email("* Este e-mail não é válido").required("* Informe o seu e-mail"),
  password: yup
    .string()
    .min(6,"* A senha deve conter no mínimo 6 caracters")
    .required("* Informe a sua senha"),
});

export default Login;
