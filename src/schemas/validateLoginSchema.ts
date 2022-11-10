import * as yup from "yup";

export const validateLoginSchema = yup.object().shape({
  username: yup
    .string()
    .required("The name can't be empty")
    .min(2, "Username must have at least 1 character")
    .max(50, "Max length is 50 characters"),

  password: yup
    .string()
    .required("The password can't be empty")
    .min(8, "Password must have at least 8 characters"),
});
