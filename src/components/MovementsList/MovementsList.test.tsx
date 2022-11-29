import { screen } from "@testing-library/react";
import { mockUser } from "../../Utils/mockBack";
import renderWithFormik from "../../Utils/test-utils";
import MovementsList from "./MovementsList";

describe("Given a component MovementsList", () => {
  describe("When rendered as 'Recent movements'", () => {
    test("Then it should show a expenses list with too many movements as received", () => {
      const movements = mockUser.expenses.length + mockUser.incomes.length;

      renderWithFormik(<MovementsList type="Recent movements" />, { mockUser });

      const movementsList = screen.getAllByRole("listitem");

      expect(movementsList.length).toBe(movements);
    });
  });

  describe("When rendered as 'Expenses'", () => {
    test("Then it should show a expenses list with too many expenses as received", () => {
      const expenses = mockUser.expenses.length;

      renderWithFormik(<MovementsList type="Expenses" />, {
        mockUser,
      });

      const movementsList = screen.getAllByRole("listitem");

      expect(movementsList.length).toBe(expenses);
    });
  });

  describe("When rendered as 'Incomes'", () => {
    test("Then it should show a expenses list with too many incomes as received", () => {
      const incomes = mockUser.incomes.length;

      renderWithFormik(<MovementsList type="Incomes" />, {
        mockUser,
      });

      const movementsList = screen.getAllByRole("listitem");

      expect(movementsList.length).toBe(incomes);
    });
  });
});
