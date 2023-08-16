import * as yup from "yup";

const schemaRecoverPassword = yup.object({
  email: yup.string().test("Email inválido.", "Email inválido.", (value) => {
    const emailRegex =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    if (value.match(emailRegex)) return true;
  }),
});

export default schemaRecoverPassword;
