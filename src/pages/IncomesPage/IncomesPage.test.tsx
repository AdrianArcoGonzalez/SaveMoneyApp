import { render, screen } from "@testing-library/react";
import IncomesPage from "./IncomesPage";

describe("Given a IncomesPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading", () => {
      const titleText = "Incomes";

      render(<IncomesPage />);
      const title = screen.getByText(titleText);

      expect(title).toBeInTheDocument();
    });
  });
});
