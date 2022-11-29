import { Formik } from "formik";
import { ExpenseIncome } from "../../interfaces/interfaces";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";

const expense: ExpenseIncome = {
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
