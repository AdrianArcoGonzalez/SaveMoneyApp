import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  closeExpenseFormActionCreator,
  closeIncomeFormActionCreator,
} from "../../store/actions/uiActions/uiActions";
import { expensesCategoriesList } from "../../Utils/categories";
import { mockExpense } from "../../Utils/mockBack";
import renderWithFormik from "../../Utils/test-utils";
import { Wrapper } from "../../Utils/Wrapper";
import { IncomesExpensesFormikForm } from "./IncomesExpensesFormikForm";

describe("Given a component IncomesExpensesFormikForm", () => {
  const mockDispatch = jest.fn();
  describe("When rendered as Income", () => {
    test("Then it should show a formular with a headinx with the text 'New Income' 3 inputs and a button", () => {
      const headingText = "New Income";
      const incomeNameLabel = "Income name";
      const incomeValuelabel = "Income value";
      const incomeDateLabel = "Income date";
      const buttonText = "Add new income";

      renderWithFormik(<IncomesExpensesFormikForm type="Income" />);

      const heading = screen.getByRole("heading", { name: headingText });
      const incomeNameInput = screen.getByLabelText(incomeNameLabel);
      const incomeValueInput = screen.getByLabelText(incomeValuelabel);
      const incomeDateInput = screen.getByLabelText(incomeDateLabel);
      const button = screen.getByRole("button", { name: buttonText });

      expect(heading).toBeInTheDocument();
      expect(incomeNameInput).toBeInTheDocument();
      expect(incomeValueInput).toBeInTheDocument();
      expect(incomeDateInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    describe("When the user click on the close button", () => {
      test("Then it should call the dispatch with the action closeIncomeForm", async () => {
        const action = closeIncomeFormActionCreator();
        renderWithFormik(
          <Wrapper mockDispatch={mockDispatch}>
            <IncomesExpensesFormikForm type="Income" />
          </Wrapper>
        );

        const closeButton = await screen.findByTestId("closebutton");
        await userEvent.click(closeButton);
        await waitFor(() => expect(mockDispatch).toHaveBeenCalledWith(action));
      });
    });
  });

  describe("When rendered as Expense", () => {
    test("Then it should show a formular with a heading with the text 'New Expense' 3 inputs, a radio group and a button", async () => {
      const headingText = "New Expense";
      const incomeNameLabel = "Expense name";
      const incomeValuelabel = "Expense value";
      const incomeDateLabel = "Expense date";
      const buttonText = "Add new expense";
      const expectedRadioButtons = expensesCategoriesList();

      renderWithFormik(
        <IncomesExpensesFormikForm type="Expense" />,
        mockExpense
      );

      const heading = screen.getByRole("heading", { name: headingText });
      const incomeNameInput = screen.getByLabelText(incomeNameLabel);
      const incomeValueInput = screen.getByLabelText(incomeValuelabel);
      const incomeDateInput = screen.getByLabelText(incomeDateLabel);
      const radioButtons = screen.getAllByRole("radio");
      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(radioButtons[0]);

      expect(heading).toBeInTheDocument();
      expect(incomeNameInput).toBeInTheDocument();
      expect(incomeValueInput).toBeInTheDocument();
      expect(incomeDateInput).toBeInTheDocument();
      expect(radioButtons.length).toBe(expectedRadioButtons.length);
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user click on the close button", () => {
    test("Then it should call the dispatch with the action closeExpenseForm", async () => {
      const action = closeExpenseFormActionCreator();
      renderWithFormik(
        <Wrapper mockDispatch={mockDispatch}>
          <IncomesExpensesFormikForm type="Expense" />
        </Wrapper>,
        mockExpense
      );

      const closeButton = await screen.findByTestId("closebutton");
      await userEvent.click(closeButton);
      await waitFor(() => expect(mockDispatch).toHaveBeenCalledWith(action));
    });
  });
});
