import { Formik } from "formik";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { mockExpense, mockUser } from "../../Utils/mockBack";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";
import { useContext } from "react";
import UserContext from "../../store/UserContext/UserContext";
import { userLoginActionCreator } from "../../store/actions/userActions/userActions";
import { UiContext } from "../../store/uiContext/uiContext";
import { closeExpenseFormActionCreator } from "../../store/actions/uiActions/uiActions";

export const NewExpense = () => {
  const { user, dispatch } = useContext(UserContext);
  const { dispatchUi } = useContext(UiContext);
  return (
    <Formik
      initialValues={mockExpense}
      onSubmit={(values) => {
        dispatch(
          userLoginActionCreator({
            ...user,
            expenses: [...user.expenses, values],
          })
        );
        dispatchUi(closeExpenseFormActionCreator());
      }}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Expense"} />
    </Formik>
  );
};
