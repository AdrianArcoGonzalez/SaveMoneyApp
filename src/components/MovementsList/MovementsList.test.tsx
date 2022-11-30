import { render, screen } from "@testing-library/react";
import { mockUser } from "../../Utils/mockBack";
import { Wrapper } from "../../Utils/Wrapper";
import MovementsList from "./MovementsList";

describe("Given a component MovementsList", () => {
  describe("When rendered as 'Recent movements'", () => {
    test("Then it should show a expenses list with too many movements as received", () => {
      const movements = mockUser.expenses.length + mockUser.incomes.length;

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
