import { Formik } from "formik";
import { useMovements } from "../../hooks/useMovements/useMovements";
import { ExpenseIncome } from "../../interfaces/interfaces";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";

interface UpdateIncomeProps {
  movement: ExpenseIncome;
  closeForm?: React.Dispatch<React.SetStateAction<string>>;
}

export const UpdateExpense = ({ movement, closeForm }: UpdateIncomeProps) => {
  const { updateMovement } = useMovements();

  return (
    <Formik
      initialValues={movement}
      onSubmit={async (values) => {
        if (values === movement) {
          closeForm!("");
          return;
        }
        if (await updateMovement(values, "Expense")) {
          closeForm!("");
          return;
        }
        return;
      }}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Expense"} update={true} />
    </Formik>
  );
};
