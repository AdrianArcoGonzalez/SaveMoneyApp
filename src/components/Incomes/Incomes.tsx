import { Formik } from "formik";
import { IncomesValues } from "../../interfaces/interfaces";
import { validateIncomesForm } from "../../schemas/validateIncomesForm";
import { IncomesFormikForm } from "../IncomesFormikForm/IncomesFormikForm";

const initialValues: IncomesValues = {
  incomes: 0,
  saving: 0,
  currency: "$",
};

export const Incomes = (): JSX.Element => {
  const handleSubmit = () => {};

  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        handleSubmit();
        resetForm({ values: initialValues });
      }}
      initialValues={initialValues}
      validationSchema={validateIncomesForm}
    >
      <IncomesFormikForm />
    </Formik>
  );
};
