import * as yup from "yup";

export const validateRegisterSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email can't be empty")
    .email("Email not valid")
    .max(60, "max 60 characters")
    .oneOf([yup.ref("email"), null], "Email must be the same"),

  confirmEmail: yup
    .string()
    .required("Email can't be empty")
    .email("Email not valid")
    .max(60, "max 60 characters")
    .oneOf([yup.ref("email"), null], "Email must be the same"),

  username: yup
    .string()
    .required("The name can't be empty")
    .min(2, "Username must have at least 1 character")
    .max(50, "Max length is 50 characters"),

  password: yup
    .string()
    .required("The password can't be empty")
    .min(8, "Password must have at least 8 characters"),

  confirmPassword: yup
    .string()
    .required("The password can't be empty")
    .min(8, "Password must have at least 8 characters")
    .oneOf([yup.ref("email"), null], "Email must be the same"),
});
