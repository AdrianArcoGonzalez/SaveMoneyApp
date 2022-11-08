import { Form, useFormikContext } from "formik";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import CustomInputField from "../CustomInputField/CustomInputField";
import LoginFormikFormStyled from "./LoginFormikFormStyled";

const LoginFormikForm = (): JSX.Element => {
  const { isValid } = useFormikContext();

  return (
    <LoginFormikFormStyled>
      <Form noValidate autoComplete="off">
        <CustomInputField
          class="form-input"
          label="Username"
          name="username"
          placeholder="username"
          type="text"
        />

        <CustomInputField
          class="form-input"
          label="Password"
          name="password"
          placeholder="********"
          type="password"
        />

        <Button type="submit" text="Login" disabled={!isValid} />

        <span className="text-register">
          Haven't an account yet?{" "}
          <NavLink to={"/register"} className="link-register">
            Register
          </NavLink>
        </span>
      </Form>
    </LoginFormikFormStyled>
  );
};
export default LoginFormikForm;
