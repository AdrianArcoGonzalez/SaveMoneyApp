import * as yup from "yup";

export const validateIncomesForm = yup.object().shape({
  incomes: yup
    .number()
    .min(1, "The incomes must be more than 0")
    .required("Must introduce a income"),

  currency: yup.string().required("Select a valid currency"),

  saving: yup
    .number()
    .min(0, "The incomes can´t be negative")
    .required("Must introduce a target"),
});
