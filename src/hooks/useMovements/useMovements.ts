import { useContext } from "react";
import { ExpenseIncome, MovementsType } from "../../interfaces/interfaces";
import {
  deleteExpenseActionCreator,
  deleteIcomeActionCreator,
  newExpenseActionCreator,
  newIncomeActionCreator,
  updateExpenseActionCreator,
  updateIncomeActionCreator,
} from "../../store/actions/userActions/userActions";
import UserContext from "../../store/UserContext/UserContext";
import { useFeedback } from "../useFeedback/useFeedback";

export const useMovements = () => {
  const { dispatch } = useContext(UserContext);
  const { successFeedback, errorFeedback } = useFeedback();

  const createMovement = async (
    movement: ExpenseIncome,
    type: "Income" | "Expense"
  ) => {
    try {
      //await axios.post(environments.update, movement);

      if (!movement.id) {
        movement.id = `${movement.date}${movement.name}`;
      }

      const action =
        type === "Income"
          ? newIncomeActionCreator(movement)
          : newExpenseActionCreator(movement);

      dispatch(action);
      successFeedback("Movement created successfully");
      return true;
    } catch (error) {
      errorFeedback("Can´t create the movement, please try again");
      return false;
    }
  };

  const updateMovement = async (
    movement: ExpenseIncome,
    type: "Income" | "Expense"
  ) => {
    try {
      //await axios.post(environments.update, movement, {params: { id: movement.id },});
      const action =
        type === "Income"
          ? updateIncomeActionCreator(movement)
          : updateExpenseActionCreator(movement);

      dispatch(action);
      successFeedback("Movement updated successfully");
      return true;
    } catch (error) {
      errorFeedback("Can´t update the movement, please try again");
      return false;
    }
  };

  const deleteMovement = async (movementName: string, type: MovementsType) => {
    if (type === "Recent movements") {
      return false;
    }

    try {
      //use the next code when the api is used: await axios.delete(environments.delete, { params: { type: type, name: movementName },});

      if (type === "Incomes") {
        dispatch(deleteIcomeActionCreator(movementName));
      } else if (type === "Expenses") {
        dispatch(deleteExpenseActionCreator(movementName));
      }
      successFeedback("Movement deleted succesfully");
    } catch (error) {
      errorFeedback("Can´t delete the movement, please try again");
    }
  };

  return { createMovement, updateMovement, deleteMovement };
};
