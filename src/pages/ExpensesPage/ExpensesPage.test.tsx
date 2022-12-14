import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFormik from "../../Utils/test-utils";
import { Wrapper } from "../../Utils/Wrapper";
import ExpensesPage from "./ExpensesPage";

describe("Given a ExpensesPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading with the title 'Expenses'", () => {
      const titleText = "Expenses";

      render(<ExpensesPage />);
      const title = screen.getByText(titleText);

      expect(title).toBeInTheDocument();
    });

    test("And it should show a button and when is clicked it should show the new expense form", async () => {
      const buttonName = "+";
      const formTitle = "New Expense";

      render(<ExpensesPage />, { wrapper: Wrapper });

      const button = screen.getByRole("button", { name: buttonName });

      await userEvent.click(button);

      const expensesTitle = screen.getByRole("heading", { name: formTitle });

      expect(expensesTitle).toBeInTheDocument();
    });
  });
});
