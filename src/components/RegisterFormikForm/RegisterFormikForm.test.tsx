import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import { RegisterFormikForm } from "./RegisterFormikForm";
describe("Given a REgisterFormikForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show 5 inputs and the register button", () => {
      const labelUser = "Username";
      const labelPassword = "Password";
      const labelRepeatPassword = "Repeat password";
      const labelEmail = "Email";
      const labelRepeatEmail = "Repeat email";
      const buttonText = "Register";

      renderWithFormik(<RegisterFormikForm />);

      const inputUser = screen.getByLabelText(labelUser);
      const inputPassword = screen.getByLabelText(labelPassword);
      const inputRepeatPassword = screen.getByLabelText(labelRepeatPassword);
      const inputEmail = screen.getByLabelText(labelEmail);
      const inputRepeatEmail = screen.getByLabelText(labelRepeatEmail);
      const button = screen.getByRole("button");

      expect(inputUser).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(inputRepeatPassword).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(inputRepeatEmail).toBeInTheDocument();
      expect(button).toHaveTextContent(buttonText);
    });

    test("And a text with a link to navigate to login", () => {
      const textAccount = "Have an account yet?";
      const linkText = "Login";
      renderWithFormik(<RegisterFormikForm />);

      const text = screen.getByText(textAccount);
      const link = screen.getByRole("link");

      expect(text).toBeInTheDocument();
      expect(link).toHaveTextContent(linkText);
    });
  });
});
