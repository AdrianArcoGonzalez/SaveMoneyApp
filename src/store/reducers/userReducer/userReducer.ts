import { UserLoged } from "../../../interfaces/interfaces";
import {
  Action,
  DeleteMovementAction,
  InitialDataAction,
  LoginAction,
  NewExpenseIncomeAction,
  UnknownAction,
} from "../../types/actions";

const userReducer = (
  previousUser: UserLoged,
  action: Action | UnknownAction
) => {
  let user: UserLoged;

  switch (action.type) {
    case "login":
      user = {
        ...previousUser,
        userName: (action as LoginAction).payload.userName,
        token: (action as LoginAction).payload.token,
        isLogged: (action as LoginAction).payload.isLogged,
        currency: (action as LoginAction).payload.currency,
        expenses: (action as LoginAction).payload.expenses,
        incomes: (action as LoginAction).payload.incomes,
        moneySaved: (action as LoginAction).payload.moneySaved,
        savingTarget: (action as LoginAction).payload.savingTarget,
        monthlyIncomes: (action as LoginAction).payload.monthlyIncomes,
      };
      break;

    case "newExpense":
      user = {
        ...previousUser,
        expenses: [
          ...previousUser.expenses,
          (action as NewExpenseIncomeAction).payload,
        ],
      };
      break;

    case "newIncome":
      user = {
        ...previousUser,
        incomes: [
          ...previousUser.incomes,
          (action as NewExpenseIncomeAction).payload,
        ],
      };

      break;
    case "setInitialData":
      user = {
        ...previousUser,
        monthlyIncomes: (action as InitialDataAction).payload.incomes,
        currency: (action as InitialDataAction).payload.currency,
        savingTarget: (action as InitialDataAction).payload.saving,
      };
      break;

    case "deleteExpense":
      user = {
        ...previousUser,
        expenses: previousUser.expenses.filter(
          (expense) => expense.name !== (action as DeleteMovementAction).payload
        ),
      };
      break;

    case "deleteIncome":
      user = {
        ...previousUser,
        incomes: previousUser.incomes.filter(
          (income) => income.name !== (action as DeleteMovementAction).payload
        ),
      };
      break;
    default:
      user = { ...previousUser };
  }
  return user;
};

export default userReducer;
