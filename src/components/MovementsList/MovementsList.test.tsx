import { render, screen } from "@testing-library/react";
import { expensesCategoriesList } from "../../Utils/categories";
import { mockUser } from "../../Utils/mockBack";
import { getTotalExpensesByCategory } from "../../Utils/operationsUtils";
import { Wrapper } from "../../Utils/Wrapper";
import MovementsList from "./MovementsList";

describe("Given a component MovementsList", () => {
  describe("When rendered as 'Recent movements'", () => {
    test("Then it should show a expenses list with too many movements as received", () => {
      const expenses = expensesCategoriesList()
        .map((category) =>
          getTotalExpensesByCategory(mockUser.expenses, category)
        )
        .filter((expense) => expense.quantity > 0).length;
      const incomes = 1;
      const movements = expenses + incomes;

      render(<MovementsList type="Recent movements" />, { wrapper: Wrapper });

      const movementsList = screen.getAllByRole("listitem");

      expect(movementsList.length).toBe(movements);
    });
  });

  describe("When rendered as 'Expenses'", () => {
    test("Then it should show a expenses list with too many expenses as received", () => {
      const expenses = mockUser.expenses.length;

      render(<MovementsList type="Expenses" />, { wrapper: Wrapper });

      const movementsList = screen.getAllByRole("listitem");

      expect(movementsList.length).toBe(expenses);
    });
  });

  describe("When rendered as 'Incomes'", () => {
    test("Then it should show a expenses list with too many incomes as received", () => {
      const incomes = mockUser.incomes.length;

      render(<MovementsList type="Incomes" />, { wrapper: Wrapper });

      const movementsList = screen.getAllByRole("listitem");

      expect(movementsList.length).toBe(incomes);
    });
  });
});
