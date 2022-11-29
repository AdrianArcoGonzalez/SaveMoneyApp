import { Formik } from "formik";

import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { incomesCategories } from "../../Utils/categories";
import { mockExpense } from "../../Utils/mockBack";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";

export const NewIncome = () => {
  const income = {
    ...mockExpense,
    category: {
      name: incomesCategories.income.name,
      icon: incomesCategories.income.icon,
    },
  };
  return (
    <Formik
      initialValues={income}
      onSubmit={() => {}}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Income"} />
    </Formik>
  );
};
