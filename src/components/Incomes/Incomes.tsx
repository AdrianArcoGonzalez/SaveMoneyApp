import { Formik } from "formik";
import { useContext } from "react";
import { IncomesValues, UserLoged } from "../../interfaces/interfaces";
import { validateIncomesForm } from "../../schemas/validateIncomesForm";
import { userLoginActionCreator } from "../../store/actions/userActions/userActions";
import UserContext from "../../store/UserContext/UserContext";
import { IncomesFormikForm } from "../IncomesFormikForm/IncomesFormikForm";

interface IncomeProps {
  type: "initial" | "update";
  onClick?: () => void;
}
export const Incomes = ({ type, onClick }: IncomeProps): JSX.Element => {
  const { user, dispatch } = useContext(UserContext);

  const initialValues: IncomesValues =
    type === "update"
      ? {
          incomes: user.monthlyIncomes,
          saving: user.savingTarget,
          currency: "$",
        }
      : {
          incomes: 0,
          saving: 0,
          currency: "$",
        };

  const handleSubmit = (values: IncomesValues) => {
    const newUser: UserLoged = {
      ...user,
      currency: values.currency,
      savingTarget: values.saving,
      monthlyIncomes: values.incomes,
    };

    dispatch(userLoginActionCreator(newUser));
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
      <IncomesFormikForm type={type} onClick={onClick} />
    </Formik>
  );
};
