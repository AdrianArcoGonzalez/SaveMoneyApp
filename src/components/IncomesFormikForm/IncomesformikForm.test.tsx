import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import { IncomesFormikForm } from "./IncomesFormikForm";

describe("Given a component IncomesFormikForm", () => {
  describe("When rendered", () => {
    test("It should show 2 inputs , one radiogroup and a button", () => {
      const incomesInputLabel = "Monthly incomes?";
      const radioLabel = "Choose your currency";
      const savingsLabel = "Wich is your savings target?";
      const buttonText = "Send";

      renderWithFormik(<IncomesFormikForm type="initial" />);

      const incomesInput = screen.getByLabelText(incomesInputLabel);
      const radioGroup = screen.getByLabelText(radioLabel);
      const savingsInput = screen.getByLabelText(savingsLabel);
      const button = screen.getByRole("button", { name: buttonText });

      expect(incomesInput).toBeInTheDocument();
      expect(radioGroup).toBeInTheDocument();
      expect(savingsInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
