import LoginStyled from "./LoginStyled";
import { Formik } from "formik";
import { validateLoginSchema } from "../../schemas/validateLoginSchema";
import LoginFormikForm from "../LoginFormikForm/LoginFormikForm";

interface FormValuesProps {
  username: string;
  password: string;
}

const Login = ({ username, password }: FormValuesProps): JSX.Element => {
  return (
    <LoginStyled>
      <Formik
        initialValues={{ username, password }}
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
