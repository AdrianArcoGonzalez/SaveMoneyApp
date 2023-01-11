import {
  ExpenseIncome,
  IncomesValues,
  UserLoged,
} from "../../../interfaces/interfaces";
import {
  DeleteMovementAction,
  InitialDataAction,
  LoginAction,
  NewExpenseIncomeAction,
  UpdateMovementAction,
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

export const deleteExpenseActionCreator = (
  name: string
): DeleteMovementAction => ({
  type: "deleteExpense",
  payload: name,
});

export const deleteIcomeActionCreator = (
  name: string
): DeleteMovementAction => ({
  type: "deleteIncome",
  payload: name,
});

export const updateExpenseActionCreator = (
  updatedExpense: ExpenseIncome
): UpdateMovementAction => ({
  type: "updateExpense",
  payload: updatedExpense,
});

export const updateIncomeActionCreator = (
  updatedIncome: ExpenseIncome
): UpdateMovementAction => ({
  type: "updateIncome",
  payload: updatedIncome,
});
