import { Formik } from "formik";
import { useContext } from "react";
import { IncomesValues } from "../../interfaces/interfaces";
import { validateIncomesForm } from "../../schemas/validateIncomesForm";
import { initialDataActionCreator } from "../../store/actions/userActions/userActions";
import UserContext from "../../store/UserContext/UserContext";
import { IncomesFormikForm } from "../IncomesFormikForm/IncomesFormikForm";

interface IncomeProps {
  type: "initial" | "update";
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Incomes = ({
  type,

  setOpen,
}: IncomeProps): JSX.Element => {
  const { user, dispatch } = useContext(UserContext);

  const initialValues: IncomesValues =
    type === "update"
      ? {
          incomes: user.monthlyIncomes,
          saving: user.savingTarget,
          currency: user.currency,
        }
      : {
          incomes: 0,
          saving: 0,
          currency: "$",
        };

  const handleSubmit = (values: IncomesValues) => {
    dispatch(initialDataActionCreator(values));
    setOpen!(false);
  };

  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
      initialValues={initialValues}
      validationSchema={validateIncomesForm}
    >
      <IncomesFormikForm type={type} />
    </Formik>
  );
};
