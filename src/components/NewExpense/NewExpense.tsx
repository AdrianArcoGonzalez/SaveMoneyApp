import { Formik } from "formik";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { mockExpense } from "../../Utils/mockBack";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";

export const NewExpense = () => {
  return (
    <Formik
      initialValues={mockExpense}
      onSubmit={() => {}}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Expense"} />
    </Formik>
  );
};
