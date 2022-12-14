import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Wrapper } from "../../Utils/Wrapper";
import IncomesPage from "./IncomesPage";

describe("Given a IncomesPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading", () => {
      const titleText = "Incomes";

      render(<IncomesPage />);
      const title = screen.getByText(titleText);

      expect(title).toBeInTheDocument();
    });

    test("And it should show a button and when is clicked it should show the new expense form", async () => {
      const buttonName = "+";
      const formTitle = "New Income";

      render(<IncomesPage />, { wrapper: Wrapper });

      const button = screen.getByRole("button", { name: buttonName });

      await userEvent.click(button);

      const expensesTitle = screen.getByRole("heading", { name: formTitle });

      expect(expensesTitle).toBeInTheDocument();
    });
  });
});
