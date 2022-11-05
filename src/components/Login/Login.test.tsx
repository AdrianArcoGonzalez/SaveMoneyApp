import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Given a Login components", () => {
  describe("When it's instantiated", () => {
    test("Then it should show to inputs where the user can write", async () => {
      const inputUserText = "Username";
      const inputPasswordText = "Password";
      const userWrite = "John Doe";
      const passwordWrite = "123123";

      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      const inputUser = screen.getByLabelText(inputUserText);
      const inputPassword = screen.getByLabelText(inputPasswordText);

      await userEvent.type(inputUser, userWrite);
      await userEvent.type(inputPassword, passwordWrite);

      expect(inputUser).toHaveValue(userWrite);
      expect(inputPassword).toHaveValue(passwordWrite);
    });

    test("And it shouldn't show the error text", () => {
      const requiredUserText = "Required username";
      const requiredPasswordText = "Required password";

      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );

      const requiredUser = screen.queryByText(requiredUserText);
      const requiredPassword = screen.queryByText(requiredPasswordText);

      expect(requiredUser).not.toBeInTheDocument();
      expect(requiredPassword).not.toBeInTheDocument();
    });
  });
});
