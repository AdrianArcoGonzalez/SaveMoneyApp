import { Formik, useFormikContext } from "formik";
import { IncomesValues } from "../../interfaces/interfaces";
import { validateIncomesForm } from "../../schemas/validateIncomesForm";
import { IncomesFormikForm } from "../IncomesFormikForm/IncomesFormikForm";

const initialValues: IncomesValues = {
  incomes: 0,
  saving: 0,
  currency: "$",
};

export const Incomes = (): JSX.Element => {
  const { resetForm } = useFormikContext();

  const handleSubmit = () => {
    resetForm({ values: initialValues });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validateIncomesForm}
    >
      <IncomesFormikForm />
    </Formik>
  );
};
