import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import { UpdateIncome } from "./UpdateIncome";
import { mockExpense } from "../../Utils/mockBack";

describe("Given a component UpdateIncome", () => {
  describe("When rendered", () => {
    test("Then it should show a comoponent withe the heading 'New Income'", () => {
      const headingText = "Update";

      renderWithFormik(<UpdateIncome movement={mockExpense} />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
