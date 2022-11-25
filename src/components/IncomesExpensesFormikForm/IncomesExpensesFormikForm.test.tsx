import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { categories } from "../../Utils/categories";
import { mockExpense } from "../../Utils/mockBack";
import renderWithFormik from "../../Utils/test-utils";
import { IncomesExpensesFormikForm } from "./IncomesExpensesFormikForm";

describe("Given a component IncomesExpensesFormikForm", () => {
  describe("When rendered as Income", () => {
    test("Then it should show a formular with a headinx with the text 'New Income' 3 inputs and a button", () => {
      const headingText = "New Income";
      const incomeNameLabel = "Income name";
      const incomeValuelabel = "Income value";
      const incomeDateLabel = "Income date";
      const buttonText = "Add new income";

      renderWithFormik(<IncomesExpensesFormikForm type="Income" />);

      const heading = screen.getByRole("heading", { name: headingText });
      const incomeNameInput = screen.getByLabelText(incomeNameLabel);
      const incomeValueInput = screen.getByLabelText(incomeValuelabel);
      const incomeDateInput = screen.getByLabelText(incomeDateLabel);
      const button = screen.getByRole("button", { name: buttonText });

      expect(heading).toBeInTheDocument();
      expect(incomeNameInput).toBeInTheDocument();
      expect(incomeValueInput).toBeInTheDocument();
      expect(incomeDateInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When rendered as Expense", () => {
    test("Then it should show a formular with a headinx with the text 'New Expense' 3 inputs, a radio group and a button", async () => {
      const headingText = "New Expense";
      const incomeNameLabel = "Expense name";
      const incomeValuelabel = "Expense value";
      const incomeDateLabel = "Expense date";
      const buttonText = "Add new expense";
      const expectedRadioButtons = categories;

      renderWithFormik(
        <IncomesExpensesFormikForm type="Expense" />,
        mockExpense
      );

      const heading = screen.getByRole("heading", { name: headingText });
      const incomeNameInput = screen.getByLabelText(incomeNameLabel);
      const incomeValueInput = screen.getByLabelText(incomeValuelabel);
      const incomeDateInput = screen.getByLabelText(incomeDateLabel);
      const radioButtons = screen.getAllByRole("radio");
      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(radioButtons[0]);

      expect(heading).toBeInTheDocument();
      expect(incomeNameInput).toBeInTheDocument();
      expect(incomeValueInput).toBeInTheDocument();
      expect(incomeDateInput).toBeInTheDocument();
      expect(radioButtons.length).toBe(expectedRadioButtons.length);
      expect(button).toBeInTheDocument();
    });
  });
});
