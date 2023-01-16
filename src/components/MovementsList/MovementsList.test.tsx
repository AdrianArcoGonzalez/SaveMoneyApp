import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toast } from "react-toastify";
import { openIncomeFormActionCreator } from "../../store/actions/uiActions/uiActions";
import {
  deleteExpenseActionCreator,
  deleteIcomeActionCreator,
  updateIncomeActionCreator,
} from "../../store/actions/userActions/userActions";
import { expensesCategoriesList } from "../../Utils/categories";
import { mockUser } from "../../Utils/mockBack";
import { getTotalExpensesByCategory } from "../../Utils/operationsUtils";
import { Wrapper } from "../../Utils/Wrapper";
import MovementsList from "./MovementsList";

const mockDispatch = jest.fn();

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given a component MovementsList", () => {
  describe("When rendered as 'Recent movements'", () => {
    test("Then it should show a expenses list with too many movements as received", () => {
      const expenses = expensesCategoriesList()
        .map((category) =>
          getTotalExpensesByCategory(mockUser.expenses, category)
        )
        .filter((expense) => expense.quantity > 0).length;
      const incomes = 1;
      const movements = expenses + incomes;

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

    describe("And the user click on trash icon", () => {
      test("Then it should call the dispatch  with the action deleteExpense and the expense name as payload, and call the function success from toast", async () => {
        const expense = mockUser.expenses[0];
        const action = deleteExpenseActionCreator(expense.name);

        render(
          <Wrapper mockDispatch={mockDispatch}>
            <MovementsList type="Expenses" />
          </Wrapper>
        );

        const trashButtons = await screen.findAllByTestId("trashButton");

        await userEvent.click(trashButtons[0]);

        await waitFor(() => {
          expect(mockDispatch).toHaveBeenCalledWith(action);
        });

        await waitFor(() => expect(toast.success).toHaveBeenCalled());
      });
    });

    describe("And the user click on update  button", () => {
      test("Then it should open a form with a heading 'Update'", async () => {
        const formTitle = "Update";

        render(<MovementsList type="Expenses" />, { wrapper: Wrapper });

        const updateButtons = await screen.findAllByTestId("updateButton");

        await userEvent.click(updateButtons[0]);

        const expectedHeading = await screen.findByRole("heading", {
          name: formTitle,
        });

        await waitFor(() => {
          expect(expectedHeading).toBeInTheDocument();
        });
      });
    });
  });

  describe("When rendered as 'Incomes'", () => {
    test("Then it should show a expenses list with too many incomes as received", () => {
      const incomes = mockUser.incomes.length;

      render(<MovementsList type="Incomes" />, { wrapper: Wrapper });

      const movementsList = screen.getAllByRole("listitem");

      expect(movementsList.length).toBe(incomes);
    });

    describe("And the user click on trash icon", () => {
      test("Then it should call the dispatch  with the action deleteIncome and the income name as payload, and call the function success from toast", async () => {
        const income = mockUser.incomes[0];
        const action = deleteIcomeActionCreator(income.name);

        render(
          <Wrapper mockDispatch={mockDispatch}>
            <MovementsList type="Incomes" />
          </Wrapper>
        );

        const trashButtons = await screen.findAllByTestId("trashButton");

        await userEvent.click(trashButtons[0]);

        await waitFor(() => {
          expect(mockDispatch).toHaveBeenCalledWith(action);
        });

        await waitFor(() => expect(toast.success).toHaveBeenCalled());
      });
    });

    describe("And the user click on update  button", () => {
      test("Then it should open a form with a heading 'Update'", async () => {
        const formTitle = "Update";

        render(<MovementsList type="Incomes" />, { wrapper: Wrapper });

        const updateButtons = await screen.findAllByTestId("updateButton");

        await userEvent.click(updateButtons[0]);

        const expectedHeading = await screen.findByRole("heading", {
          name: formTitle,
        });

        await waitFor(() => {
          expect(expectedHeading).toBeInTheDocument();
        });
      });
    });
  });
});
