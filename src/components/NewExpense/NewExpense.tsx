import { Formik } from "formik";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { mockExpense } from "../../Utils/mockBack";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";
import { useContext } from "react";
import UserContext from "../../store/UserContext/UserContext";
import { newExpenseActionCreator } from "../../store/actions/userActions/userActions";
import { UiContext } from "../../store/uiContext/uiContext";
import { closeExpenseFormActionCreator } from "../../store/actions/uiActions/uiActions";

export const NewExpense = () => {
  const { dispatch } = useContext(UserContext);
  const { dispatchUi } = useContext(UiContext);
  return (
    <Formik
      initialValues={mockExpense}
      onSubmit={(values) => {
        dispatch(newExpenseActionCreator(values));
        dispatchUi(closeExpenseFormActionCreator());
      }}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Expense"} />
    </Formik>
  );
};
