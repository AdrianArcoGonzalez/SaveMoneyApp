import { Formik } from "formik";
import { ExpenseIncome } from "../../interfaces/interfaces";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { incomeIcon } from "../../Utils/categories";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";

const expense: ExpenseIncome = {
  category: "Income",
  date: "",
  icon: incomeIcon,
  name: "",
  quantity: 0,
};

export const NewIncome = () => {
  return (
    <Formik
      initialValues={expense}
      onSubmit={() => {}}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Income"} />
    </Formik>
  );
};
