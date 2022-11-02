import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import LoginStyled from "./LoginStyled";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { ErrorsHandler } from "../../interfaces/interfaces";

interface FormValues {
  username: string;
  password: string;
}

const Login = (): JSX.Element => {
  const initialValues: FormValues = { username: "", password: "" };

  return (
    <LoginStyled>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: ErrorsHandler = {};
          if (!values.username) {
            errors.username = "Required username";
          }

          if (!values.password) {
            errors.password = "Required password";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            console.log(values);
            resetForm();
          }, 2000);
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form autoComplete="off" className="form">
            <div className="input-container">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="form-input"
                placeholder="John"
              />
              <ErrorMessage
                name="username"
                component={() => (
                  <span className="errors">{errors.username}</span>
                )}
              />
            </div>

            <div className="input-container">
              <label htmlFor="pasword" className="form-label">
                Password{" "}
              </label>
              <Field
                name="password"
                id="password"
                type="password"
                className="form-input"
                placeholder="*************"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <span className="errors">{errors.password}</span>
                )}
              />
            </div>

            <Button type="submit" text="Login" disabled={isSubmitting} />

            <span className="text-login">
              Haven't an account yet?{" "}
              <NavLink to={"/register"} className="link-register">
                Register
              </NavLink>
            </span>
          </Form>
        )}
      </Formik>
    </LoginStyled>
  );
};

export default Login;
