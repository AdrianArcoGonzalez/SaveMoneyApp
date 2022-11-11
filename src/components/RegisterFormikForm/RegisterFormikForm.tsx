import { Form, useFormikContext } from "formik";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import CustomInputField from "../CustomInputField/CustomInputField";
import RegisterFormikFormStyled from "./RegisterFormikFormStyled";

export const RegisterFormikForm = (): JSX.Element => {
  const { isValid } = useFormikContext();

  return (
    <RegisterFormikFormStyled>
      <Form noValidate autoComplete="off" className="form-container">
        <h1 className="form-title">Create your account</h1>
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

        <CustomInputField
          class="form-input"
          label="Repeat password"
          name="confirmPassword"
          placeholder="********"
          type="password"
        />

        <CustomInputField
          class="form-input"
          label="Email"
          name="email"
          placeholder="email"
          type="text"
        />

        <CustomInputField
          class="form-input"
          label="Repeat email"
          name="confirmEmail"
          placeholder="email"
          type="text"
        />

        <Button type="submit" text="Register" disabled={!isValid} />

        <span className="text-login">
          Have an account yet?{" "}
          <NavLink to={"/login"} className="link-login">
            Login
          </NavLink>
        </span>
      </Form>
    </RegisterFormikFormStyled>
  );
};
