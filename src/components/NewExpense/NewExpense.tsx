import { Formik } from "formik";
import { Expense } from "../../interfaces/interfaces";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";

const expense: Expense = {
  category: "",
  date: "",
  icon: "",
  name: "",
  quantity: 0,
};

export const NewExpense = () => {
  return (
    <Formik
      initialValues={expense}
      onSubmit={() => {}}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Expense"} />
    </Formik>
  );
};
