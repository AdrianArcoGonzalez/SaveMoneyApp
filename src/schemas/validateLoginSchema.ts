import * as yup from "yup";

export const validateLoginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Name is required")
    .min(5, "Min length is 5 characters")
    .max(12, "Max length is 12 characters"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min length is 8 characters"),
});
