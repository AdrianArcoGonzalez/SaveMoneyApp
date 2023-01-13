import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import { mockExpense } from "../../Utils/mockBack";
import { UpdateExpense } from "./UpdateExpense";

describe("Given a component UpdateIncome", () => {
  describe("When rendered", () => {
    test("Then it should show a comoponent withe the heading 'New Income'", () => {
      const headingText = "Update";

      renderWithFormik(<UpdateExpense movement={mockExpense} />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
