import { Formik } from "formik";
import { useContext } from "react";
import { useMovements } from "../../hooks/useMovements/useMovements";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { closeIncomeFormActionCreator } from "../../store/actions/uiActions/uiActions";
import { UiContext } from "../../store/uiContext/uiContext";
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
  const { createMovement } = useMovements();
  const { dispatchUi } = useContext(UiContext);
  return (
    <Formik
      initialValues={income}
      onSubmit={async (values) => {
        if (await createMovement(values, "Income")) {
          dispatchUi(closeIncomeFormActionCreator());
        }
        return;
      }}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Income"} />
    </Formik>
  );
};
