import { screen } from "@testing-library/react";
import renderWithFormik from "../../Utils/test-utils";
import { NewIncome } from "./NewIncome";

describe("Given a component NewIncome", () => {
  describe("When rendered", () => {
    test("Then it should show a comoponent withe the heading 'New Income'", () => {
      const headingText = "New Income";

      renderWithFormik(<NewIncome />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
