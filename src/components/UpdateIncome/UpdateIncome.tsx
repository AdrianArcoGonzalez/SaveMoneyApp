import { Formik } from "formik";
import { useMovements } from "../../hooks/useMovements/useMovements";
import { ExpenseIncome } from "../../interfaces/interfaces";
import { validateIncomesExpensesForm } from "../../schemas/validateIncomesExpensesForm";
import { IncomesExpensesFormikForm } from "../IncomesExpensesFormikForm/IncomesExpensesFormikForm";

interface UpdateIncomeProps {
  movement: ExpenseIncome;
  closeForm?: React.Dispatch<React.SetStateAction<string>>;
}

export const UpdateIncome = ({ movement, closeForm }: UpdateIncomeProps) => {
  const { updateMovement } = useMovements();

  return (
    <Formik
      initialValues={movement}
      onSubmit={async (values) => {
        if (values === movement) {
          closeForm!("");
        } else if (await updateMovement(values, "Income")) {
          closeForm!("");
        }
      }}
      validationSchema={validateIncomesExpensesForm}
    >
      <IncomesExpensesFormikForm type={"Income"} update={true} />
    </Formik>
  );
};
