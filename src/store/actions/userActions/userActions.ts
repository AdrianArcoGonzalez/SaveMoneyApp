import {
  ExpenseIncome,
  IncomesValues,
  UserLoged,
} from "../../../interfaces/interfaces";
import {
  InitialDataAction,
  LoginAction,
  NewExpenseIncomeAction,
} from "../../types/actions";

export const userLoginActionCreator = (userData: UserLoged): LoginAction => ({
  type: "login",
  payload: userData,
});

export const newExpenseActionCreator = (
  expense: ExpenseIncome
): NewExpenseIncomeAction => ({
  type: "newExpense",
  payload: expense,
});

export const newIncomeActionCreator = (
  income: ExpenseIncome
): NewExpenseIncomeAction => ({
  type: "newIncome",
  payload: income,
});

export const initialDataActionCreator = (
  initialValues: IncomesValues
): InitialDataAction => ({
  type: "setInitialData",
  payload: initialValues,
});
