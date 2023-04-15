import * as Yup from "yup";

const schemaResetPassword = Yup.object().shape({
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters long."),
  email: Yup.string().email("Invalid email.").required("Email is required."),
  confirmPassword: Yup.string()
    .required("Confirm password is required.")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});

export default schemaResetPassword;
