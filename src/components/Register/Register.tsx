import { Formik } from "formik";
import { ErrorsHandler } from "../../interfaces/interfaces";
import { validateRegisterSchema } from "../../schemas/validateRegisterSchema";
import { RegisterFormikForm } from "../RegisterFormikForm/RegisterFormikForm";
import RegisterStyled from "./RegisterStyled";

export const Register = (): JSX.Element => {
  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: "",
  };

  return (
    <RegisterStyled>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: ErrorsHandler = {};

          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "The passwords must be the same";
          }

          if (values.confirmEmail !== values.email) {
            errors.confirmEmail = "The email must be the same";
          }

          return errors;
        }}
        validationSchema={validateRegisterSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: initialValues });
          console.log(values);
        }}
      >
        <RegisterFormikForm />
      </Formik>
    </RegisterStyled>
  );
};