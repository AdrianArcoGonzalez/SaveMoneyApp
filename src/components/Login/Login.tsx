import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import LoginStyled from "./LoginStyled";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { validateLoginSchema } from "../../schemas/validateLoginSchema";

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
        validationSchema={validateLoginSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ errors, isValid }) => (
          <Form autoComplete="off" className="form" noValidate>
            <div className="input-container">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <Field
                name="username"
                id="username"
                type="text"
                className="form-input"
                placeholder="John Doe"
              />
              <ErrorMessage
                name="username"
                component={() => (
                  <span className="errors">{errors.username}</span>
                )}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="form-label">
                Password
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

            <Button type="submit" text="Login" disabled={!isValid} />

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
