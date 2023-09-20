import * as yup from "yup";

const Login = yup.object({
  email: yup
    .string()
    .required("Email é obrigatório")
    .test("Email inválido.", "Email inválido.", (value) => {
      const emailRegex =
        /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
      if (value.match(emailRegex)) return true;
    }),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve conter no mínimo 6 caracters"),
});

export default Login;
