import { Formik } from "formik";
import { validateLoginSchema } from "../../schemas/validateLoginSchema";
import LoginFormikForm from "../LoginFormikForm/LoginFormikForm";
import { UserLogin } from "../../interfaces/interfaces";

const Login = (): JSX.Element => {
  const initialValues: UserLogin = { userName: "", password: "" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateLoginSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}
    >
      <LoginFormikForm />
    </Formik>
  );
};

export default Login;
