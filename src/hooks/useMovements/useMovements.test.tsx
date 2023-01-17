import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { MovementsType } from "../../interfaces/interfaces";
import {
  deleteExpenseActionCreator,
  deleteIcomeActionCreator,
  newExpenseActionCreator,
  newIncomeActionCreator,
  updateExpenseActionCreator,
  updateIncomeActionCreator,
} from "../../store/actions/userActions/userActions";
import { mockExpense } from "../../Utils/mockBack";
import { Wrapper } from "../../Utils/Wrapper";
import { useMovements } from "./useMovements";

const mockDispatch = jest.fn();

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

interface mockWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const mockWrapper = ({ children }: mockWrapperProps) => {
  return <Wrapper children={children} mockDispatch={mockDispatch}></Wrapper>;
};

describe("Given a function createMovement", () => {
  describe("When is instatiated with a movement and the type 'Income'", () => {
    test("Then it should call the dispatch with an action newIncome and the feedback success", () => {
      const movement = mockExpense;
      const action = newIncomeActionCreator(mockExpense);

      const {
        result: {
          current: { createMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      createMovement(movement, "Income");

      expect(toast.success).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When is instatiated with a movement and the type 'Expense'", () => {
    test("Then it should call the dispatch with an action newExpense and the feedback success", () => {
      const movement = mockExpense;
      const action = newExpenseActionCreator(mockExpense);

      const {
        result: {
          current: { createMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      createMovement(movement, "Expense");

      expect(toast.success).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a function updateMovement", () => {
  describe("When is instatiated with a movement and the type 'Income'", () => {
    test("Then it should call the dispatch with an action updateIncome and the feedback success", () => {
      const movement = mockExpense;
      const action = updateIncomeActionCreator(mockExpense);

      const {
        result: {
          current: { updateMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      updateMovement(movement, "Income");

      expect(toast.success).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When is instatiated with a movement and the type 'Expense'", () => {
    test("Then it should call the dispatch with an action updateExpense and the feedback success", () => {
      const movement = mockExpense;
      const action = updateExpenseActionCreator(mockExpense);

      const {
        result: {
          current: { updateMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      updateMovement(movement, "Expense");

      expect(toast.success).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a function deleteMovement", () => {
  describe("When is intatiated with a movement name 'mock movement' and a type 'Expenses'", () => {
    test("Then it should call the dispatch with an action deleteExpense and the feedback success", () => {
      const movementName = "mock movement";
      const type: MovementsType = "Expenses";
      const action = deleteExpenseActionCreator(movementName);

      const {
        result: {
          current: { deleteMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      deleteMovement(movementName, type);

      expect(toast.success).toBeCalled();
      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When is intatiated with a movement name 'mock movement' and a type 'Incomes'", () => {
    test("Then it should call the dispatch with an action deleteExpense and the feedback success", () => {
      const movementName = "mock movement";
      const type: MovementsType = "Incomes";
      const action = deleteIcomeActionCreator(movementName);

      const {
        result: {
          current: { deleteMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      deleteMovement(movementName, type);

      expect(toast.success).toBeCalled();
      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When is intatiated with a movement name 'mock movement' and a type 'Recent movements'", () => {
    test("Then it should return false", async () => {
      const movementName = "mock movement";
      const type: MovementsType = "Recent movements";

      const {
        result: {
          current: { deleteMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      const response = await deleteMovement(movementName, type);

      expect(response).toBeFalsy();
    });
  });
});
