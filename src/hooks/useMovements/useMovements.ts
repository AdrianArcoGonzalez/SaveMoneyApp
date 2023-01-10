import { useContext } from "react";
import { MovementsType } from "../../interfaces/interfaces";
import {
  deleteExpenseActionCreator,
  deleteIcomeActionCreator,
} from "../../store/actions/userActions/userActions";
import UserContext from "../../store/UserContext/UserContext";
import { useFeedback } from "../useFeedback/useFeedback";

export const useMovements = () => {
  const { dispatch } = useContext(UserContext);
  const { successFeedback, errorFeedback } = useFeedback();

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

  return { deleteMovement };
};
