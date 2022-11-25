import * as yup from "yup";

export const validateIncomesExpensesForm = yup.object().shape({
  name: yup.string().required("Please introduce a name"),

  value: yup
    .number()
    .min(1, "The value must be higher than 0")
    .required("Must introduce a value"),

  date: yup.string().required("Must introduce a date"),
});
