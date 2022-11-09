import LoginStyled from "./LoginStyled";
import { Formik } from "formik";
import { validateLoginSchema } from "../../schemas/validateLoginSchema";
import LoginFormikForm from "../LoginFormikForm/LoginFormikForm";
import { UserLogin } from "../../interfaces/interfaces";

const Login = (): JSX.Element => {
  const initialValues: UserLogin = { userName: "", password: "" };
  return (
    <LoginStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validateLoginSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <LoginFormikForm />
      </Formik>
    </LoginStyled>
  );
};

export default Login;
