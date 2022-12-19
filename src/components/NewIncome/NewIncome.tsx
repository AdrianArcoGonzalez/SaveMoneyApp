import { Formik } from "formik";
import { useContext } from "react";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { closeIncomeFormActionCreator } from "../../store/actions/uiActions/uiActions";
import { newIncomeActionCreator } from "../../store/actions/userActions/userActions";
import { UiContext } from "../../store/uiContext/uiContext";
import UserContext from "../../store/UserContext/UserContext";
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
  const { dispatch } = useContext(UserContext);
  const { dispatchUi } = useContext(UiContext);
  return (
    <Formik
      initialValues={income}
      onSubmit={(values) => {
        dispatch(newIncomeActionCreator(values));
        dispatchUi(closeIncomeFormActionCreator());
      }}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Income"} />
    </Formik>
  );
};
