import { Formik } from "formik";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { initialMovement } from "../../Utils/mockBack";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";
import { useContext } from "react";
import { UiContext } from "../../store/uiContext/uiContext";
import { closeExpenseFormActionCreator } from "../../store/actions/uiActions/uiActions";
import { useMovements } from "../../hooks/useMovements/useMovements";
import { ExpenseIncome } from "../../interfaces/interfaces";

export const NewExpense = () => {
  const { createMovement } = useMovements();
  const { dispatchUi } = useContext(UiContext);

  const handleSubmit = async (values: ExpenseIncome) => {
    if (await createMovement(values, "Expense")) {
      dispatchUi(closeExpenseFormActionCreator());
    }
  };

  return (
    <Formik
      data-testid="form"
      initialValues={initialMovement}
      onSubmit={handleSubmit}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Expense"} />
    </Formik>
  );
};
