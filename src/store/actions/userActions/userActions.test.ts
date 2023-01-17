import { IncomesValues } from "../../../interfaces/interfaces";
import { mockUser } from "../../../Utils/mockBack";
import {
  InitialDataAction,
  LoginAction,
  NewExpenseIncomeAction,
  UpdateMovementAction,
} from "../../types/actions";
import {
  initialDataActionCreator,
  newExpenseActionCreator,
  newIncomeActionCreator,
  updateExpenseActionCreator,
  updateIncomeActionCreator,
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

describe("Given a initialDataActionCreator", () => {
  describe("When it's invoked with a IncomeValues", () => {
    test("Then it should return an action with the correct type and payload", () => {
      const initialValues: IncomesValues = {
        currency: "$",
        incomes: 1000,
        saving: 2000,
      };
      const expectedAction: InitialDataAction = {
        type: "setInitialData",
        payload: initialValues,
      };

      const actionReturned = initialDataActionCreator(initialValues);

      expect(actionReturned).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a updateExpenseActionCreator", () => {
  describe("When it's invoked with a expense name", () => {
    test("Then it should return an action with the correct type and payload", () => {
      const initialValues = mockUser.expenses[0];
      const expectedAction: UpdateMovementAction = {
        type: "updateExpense",
        payload: initialValues,
      };

      const actionReturned = updateExpenseActionCreator(initialValues);

      expect(actionReturned).toStrictEqual(expectedAction);
    });
  });
});

describe("Given a updateIncomeActionCreator", () => {
  describe("When it's invoked with a income name", () => {
    test("Then it should return an action with the correct type and payload", () => {
      const initialValues = mockUser.incomes[0];
      const expectedAction: UpdateMovementAction = {
        type: "updateIncome",
        payload: initialValues,
      };

      const actionReturned = updateIncomeActionCreator(initialValues);

      expect(actionReturned).toStrictEqual(expectedAction);
    });
  });
});
