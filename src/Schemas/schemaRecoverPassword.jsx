import * as yup from "yup";

const schemaRecoverPassword = yup.object({
  email: yup.string().email().required(),
});

export default schemaRecoverPassword;
