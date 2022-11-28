import { Form, useFormikContext } from "formik";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import CustomInputField from "../CustomInputField/CustomInputField";
import LoginFormikFormStyled from "./LoginFormikFormStyled";

const LoginFormikForm = (): JSX.Element => {
  const { isValid } = useFormikContext();

  return (
    <LoginFormikFormStyled>
      <Form
        noValidate
        autoComplete="off"
        className="form-container"
        data-testid="loginForm"
      >
        <CustomInputField
          class="form-container__input"
          label="Username"
          name="userName"
          placeholder="username"
          type="text"
        />

        <CustomInputField
          class="form-container__input"
          label="Password"
          name="password"
          placeholder="********"
          type="password"
        />

        <Button type="submit" text="Login" disabled={!isValid} />

        <span className="form-container__login-text">
          Haven't an account yet?{" "}
          <NavLink to={"/register"} className="form-container__login-link">
            Register
          </NavLink>
        </span>
      </Form>
    </LoginFormikFormStyled>
  );
};
export default LoginFormikForm;
