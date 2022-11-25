import { Formik } from "formik";
import { UserRegister } from "../../interfaces/interfaces";
import { validateRegisterSchema } from "../../schemas/validateRegisterSchema";
import { RegisterFormikForm } from "../RegisterFormikForm/RegisterFormikForm";

export const Register = (): JSX.Element => {
  const initialValues: UserRegister = {
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateRegisterSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm({ values: initialValues });
      }}
    >
      <RegisterFormikForm />
    </Formik>
  );
};
