import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFormik from "../../Utils/test-utils";
import { Register } from "./Register";

describe("Given a Register components", () => {
  const inputUserText = "Username";
  const inputPasswordText = "Password";
  const inputRepeatPasswordText = "Repeat password";
  const inputEmailText = "Email";
  const inputRepeatEmailText = "Repeat email";

  const userWrite = "John";
  const passwordWrite = "12345678";
  const emailWrite = "john@mail.com";

  describe("When it's instantiated", () => {
    test("Then it should show five inputs what update the own status when the user type", async () => {
      renderWithFormik(<Register />);

      const inputUser = screen.getByLabelText(inputUserText);
      const inputPassword = screen.getByLabelText(inputPasswordText);
      const inputRepeatPassword = screen.getByLabelText(
        inputRepeatPasswordText
      );
      const inputEmail = screen.getByLabelText(inputEmailText);
      const inputRepeatEmail = screen.getByLabelText(inputRepeatEmailText);
      const button = screen.getByRole("button");

      await userEvent.type(inputUser, userWrite);
      await userEvent.type(inputPassword, passwordWrite);
      await userEvent.type(inputRepeatPassword, passwordWrite);
      await userEvent.type(inputEmail, emailWrite);
      await userEvent.type(inputRepeatEmail, emailWrite);

      expect(button).toBeInTheDocument();
      expect(inputUser).toHaveValue(userWrite);
      expect(inputPassword).toHaveValue(passwordWrite);
      expect(inputRepeatPassword).toHaveValue(passwordWrite);
      expect(inputEmail).toHaveValue(emailWrite);
      expect(inputRepeatEmail).toHaveValue(emailWrite);
    });
  });
});
