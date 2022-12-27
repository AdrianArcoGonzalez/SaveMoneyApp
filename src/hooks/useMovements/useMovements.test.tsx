import { renderHook } from "@testing-library/react";
import { MovementsType } from "../../interfaces/interfaces";
import {
  deleteExpenseActionCreator,
  deleteIcomeActionCreator,
} from "../../store/actions/userActions/userActions";
import { Wrapper } from "../../Utils/Wrapper";
import { useMovements } from "./useMovements";

const mockDispatch = jest.fn();

interface mockWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const mockWrapper = ({ children }: mockWrapperProps) => {
  return <Wrapper children={children} mockDispatch={mockDispatch}></Wrapper>;
};

describe("Given a function deleteMovement", () => {
  describe("When is intatiated with a movement name 'mock movement' and a type 'Expenses'", () => {
    test("Then it should call the dispatch with an action deleteExpense", () => {
      const movementName = "mock movement";
      const type: MovementsType = "Expenses";
      const action = deleteExpenseActionCreator(movementName);

      const {
        result: {
          current: { deleteMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      deleteMovement(movementName, type);

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When is intatiated with a movement name 'mock movement' and a type 'Incomes'", () => {
    test("Then it should call the dispatch with an action deleteExpense", () => {
      const movementName = "mock movement";
      const type: MovementsType = "Incomes";
      const action = deleteIcomeActionCreator(movementName);

      const {
        result: {
          current: { deleteMovement },
        },
      } = renderHook(useMovements, { wrapper: mockWrapper });

      deleteMovement(movementName, type);

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
