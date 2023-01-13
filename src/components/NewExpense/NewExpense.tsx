import { Formik } from "formik";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { mockExpense } from "../../Utils/mockBack";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";
import { useContext } from "react";
import { UiContext } from "../../store/uiContext/uiContext";
import { closeExpenseFormActionCreator } from "../../store/actions/uiActions/uiActions";
import { useMovements } from "../../hooks/useMovements/useMovements";

export const NewExpense = () => {
  const { createMovement } = useMovements();
  const { dispatchUi } = useContext(UiContext);

  return (
    <Formik
      data-testid="form"
      initialValues={mockExpense}
      onSubmit={async (values) => {
        if (await createMovement(values, "Expense")) {
          dispatchUi(closeExpenseFormActionCreator());
          return;
        }
        return;
      }}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Expense"} />
    </Formik>
  );
};
