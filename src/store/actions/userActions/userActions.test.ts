import { mockUser } from "../../../Utils/mockBack";
import { LoginAction, NewExpenseIncomeAction } from "../../types/actions";
import {
  newExpenseActionCreator,
  newIncomeActionCreator,
  userLoginActionCreator,
} from "./userActions";

describe("Given a userLoginActionCreator", () => {
  describe("When it's invoked with a userData", () => {
    test("Then it should return an action with the correct type and payload", () => {
      const userData = mockUser;
      const expectedAction: LoginAction = {
        type: "login",
        payload: userData,
      };

      const actionReturned = userLoginActionCreator(userData);

      expect(actionReturned).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a newExpenseActionCreator", () => {
  describe("When it's invoked with an expense", () => {
    test("Then it should return an action with the correct type and payload", () => {
      const expense = mockUser.expenses[0];
      const expectedAction: NewExpenseIncomeAction = {
        type: "newExpense",
        payload: expense,
      };

      const actionReturned = newExpenseActionCreator(expense);

      expect(actionReturned).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a newIncomeActionCreator", () => {
  describe("When it's invoked with an income", () => {
    test("Then it should return an action with the correct type and payload", () => {
      const income = mockUser.expenses[0];
      const expectedAction: NewExpenseIncomeAction = {
        type: "newIncome",
        payload: income,
      };

      const actionReturned = newIncomeActionCreator(income);

      expect(actionReturned).toStrictEqual(expectedAction);
    });
  });
});
