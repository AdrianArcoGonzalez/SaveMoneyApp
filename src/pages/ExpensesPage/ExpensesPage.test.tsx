import { render, screen } from "@testing-library/react";
import ExpensesPage from "./ExpensesPage";

describe("Given a ExpensesPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading with the title 'Expenses'", () => {
      const titleText = "Expenses";

      render(<ExpensesPage />);
      const title = screen.getByText(titleText);

      expect(title).toBeInTheDocument();
    });
  });
});
