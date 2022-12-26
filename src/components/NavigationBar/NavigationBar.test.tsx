import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { routes } from "../../Utils/routes";
import renderWithFormik from "../../Utils/test-utils";
import NavigationBar from "./NavigationBar";

const mockNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigator,
}));

describe("Given a component NavigationBar", () => {
  describe("When rendered", () => {
    test("Then it should show 4 buttons", () => {
      jest.clearAllMocks();
      const totalButtons = 4;
      renderWithFormik(<NavigationBar />);

      const buttons = screen.getAllByRole("button");

      buttons.forEach((button) => userEvent.click(button));

      expect(buttons.length).toBe(totalButtons);
    });

    describe("When the user click on the buttons", () => {
      test("Then it should call the function navigate with the new route", () => {
        renderWithFormik(<NavigationBar />);

        const buttonHome = screen.getByRole("button", { name: "Home" });
        const buttonIncomes = screen.getByRole("button", { name: "Incomes" });
        const buttonExpenses = screen.getByRole("button", { name: "Expenses" });
        const buttonSettings = screen.getByRole("button", { name: "Settings" });

        userEvent.click(buttonHome);
        userEvent.click(buttonIncomes);
        userEvent.click(buttonExpenses);
        userEvent.click(buttonSettings);

        Object.values(routes).forEach((route) =>
          expect(mockNavigator).toHaveBeenCalledWith(route)
        );
      });
    });
  });
});
