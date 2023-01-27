import { Formik } from "formik";
import { useContext } from "react";
import { useMovements } from "../../hooks/useMovements/useMovements";
import { ExpenseIncome } from "../../interfaces/interfaces";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { closeIncomeFormActionCreator } from "../../store/actions/uiActions/uiActions";
import { UiContext } from "../../store/uiContext/uiContext";
import { incomesCategories } from "../../Utils/categories";
import { initialMovement } from "../../Utils/mockBack";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";

export const NewIncome = () => {
  const income = {
    ...initialMovement,
    category: {
      name: incomesCategories.income.name,
      icon: incomesCategories.income.icon,
    },
  };
  const { createMovement } = useMovements();
  const { dispatchUi } = useContext(UiContext);

  const handleSubmit = async (values: ExpenseIncome) => {
    if (await createMovement(values, "Income")) {
      dispatchUi(closeIncomeFormActionCreator());
    }
  };
  return (
    <Formik
      initialValues={income}
      onSubmit={handleSubmit}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Income"} />
    </Formik>
  );
};
