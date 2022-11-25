import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import { NewExpense } from "./NewExpense";

describe("Given a component NewExpense", () => {
  describe("When rendered", () => {
    test("Then it should show a comoponent withe the heading 'New Expense'", () => {
      const headingText = "New Expense";

      renderWithFormik(<NewExpense />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
