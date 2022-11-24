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
        <h1 className="form-container__title">Create your account</h1>

        <CustomInputField
          class="form-container__input"
          label="Username"
          name="username"
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

        <CustomInputField
          class="form-container__input"
          label="Repeat password"
          name="confirmPassword"
          placeholder="********"
          type="password"
        />

        <CustomInputField
          class="form-container__input"
          label="Email"
          name="email"
          placeholder="email"
          type="text"
        />

        <CustomInputField
          class="form-container__input"
          label="Repeat email"
          name="confirmEmail"
          placeholder="email"
          type="text"
        />

        <Button type="submit" text="Register" disabled={!isValid} />

        <span className="form-container__login-text">
          Have an account yet?{" "}
          <NavLink to={"/login"} className="form-container__login-link">
            Login
          </NavLink>
        </span>
      </Form>
    </RegisterFormikFormStyled>
  );
};
