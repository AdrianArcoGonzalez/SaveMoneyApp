import { screen } from "@testing-library/react";
import { mockUser } from "../../Utils/mockBack";
import renderWithFormik from "../../Utils/test-utils";
import MovementsList from "./MovementsList";

describe("Given a component MovementsList", () => {
  describe("When rendered", () => {
    test("Then it should show a movements list with too many elements as received", () => {
      const elements = mockUser.expenses.length + mockUser.incomes.length;

      renderWithFormik(<MovementsList />, { mockUser });

      const movementsList = screen.getAllByRole("listitem");

      expect(movementsList.length).toBe(elements);
    });
  });
});
