import { ExpenseIncome, IncomesValues } from "../../../interfaces/interfaces";
import { initialUser, mockUser } from "../../../Utils/mockBack";
import {
  deleteExpenseActionCreator,
  deleteIcomeActionCreator,
  initialDataActionCreator,
  newExpenseActionCreator,
  newIncomeActionCreator,
  updateIncomeActionCreator,
  userLoginActionCreator,
} from "../../actions/userActions/userActions";
import userReducer from "./userReducer";

describe("Given a userReducers function", () => {
  const previousUser = initialUser;
  const newUser = mockUser;

  describe("When its instantiated with a login action and the correct payload", () => {
    test("Then it should return the new user", () => {
      const reducerReturn = userReducer(
        previousUser,
        userLoginActionCreator(newUser)
      );

      expect(reducerReturn).toStrictEqual(newUser);
    });
  });

  const expense = mockUser.expenses[1];
  describe("When its instantiated with a newExpense action and the correct payload", () => {
    test("Then it should return the new user with the new expense", () => {
      const reducerReturn = userReducer(
        previousUser,
        newExpenseActionCreator(expense)
      );

      expect(
        reducerReturn.expenses[reducerReturn.expenses.length - 1]
      ).toStrictEqual(expense);
    });
  });

  const income = mockUser.incomes[1];
  describe("When its instantiated with a newIncome action and the correct payload", () => {
    test("Then it should return the new user with the new  income", () => {
      const reducerReturn = userReducer(
        previousUser,
        newIncomeActionCreator(income)
      );

      expect(
        reducerReturn.incomes[reducerReturn.incomes.length - 1]
      ).toStrictEqual(income);
    });
  });

  describe("When its instantiated with a setInitialData action and the correct payload", () => {
    test("Then it should return the new user with the new  initial values", () => {
      const initialValues: IncomesValues = {
        currency: "$",
        incomes: 1500,
        saving: 2000,
      };

      const reducerReturn = userReducer(
        previousUser,
        initialDataActionCreator(initialValues)
      );

      expect(reducerReturn.currency).toBe(initialValues.currency);

      expect(reducerReturn.monthlyIncomes).toBe(initialValues.incomes);

      expect(reducerReturn.savingTarget).toBe(initialValues.saving);
    });
  });

  describe("When is instantiated with a deleteIncome action and the correct payload", () => {
    test("Then it should return the new user without the deleted income", () => {
      const mockIncome: ExpenseIncome = {
        category: { icon: "", name: "" },
        date: "",
        name: "Test income",
        quantity: 0,
        id: "mock id",
      };

      initialUser.incomes.push(mockIncome);
      const reducerReturn = userReducer(
        previousUser,
        deleteIcomeActionCreator(mockIncome.name)
      );

      expect(
        reducerReturn.incomes.find((income) => income === mockIncome)
      ).toBe(undefined);
    });
  });

  describe("When is instantiated with a deleteExpense action and the correct payload", () => {
    test("Then it should return the new user without the deleted expense", () => {
      const mockExpense: ExpenseIncome = {
        category: { icon: "", name: "" },
        date: "",
        name: "Test expense",
        quantity: 0,
        id: "mock id",
      };

      initialUser.incomes.push(mockExpense);
      const reducerReturn = userReducer(
        previousUser,
        deleteExpenseActionCreator(mockExpense.name)
      );

      expect(
        reducerReturn.expenses.find((expense) => expense === mockExpense)
      ).toBe(undefined);
    });
  });

  describe("When is instantiated with a update income action and the correct payload", () => {
    test("Then it should return the new user with the updated income", () => {
      const mockincome: ExpenseIncome = {
        category: { icon: "", name: "" },
        date: "",
        name: "Test income",
        quantity: 0,
        id: "mock id",
      };

      initialUser.incomes.push(mockincome);

      const updatedIncome = {
        ...mockincome,
        name: "Updated income",
      };

      const reducerReturn = userReducer(
        previousUser,
        updateIncomeActionCreator(updatedIncome)
      );

      expect(reducerReturn.incomes.pop()!).toEqual(updatedIncome);
    });
  });

  describe("When is instantiated with a update expense action and the correct payload", () => {
    test("Then it should return the new user with the updated expense", () => {
      const mockExpense: ExpenseIncome = {
        category: { icon: "", name: "" },
        date: "",
        name: "Test expense",
        quantity: 0,
        id: "mock id",
      };

      initialUser.incomes.push(mockExpense);

      const updatedExpense = {
        ...mockExpense,
        name: "Updated expense",
      };

      const reducerReturn = userReducer(
        previousUser,
        updateIncomeActionCreator(updatedExpense)
      );

      expect(reducerReturn.incomes.pop()!).toEqual(updatedExpense);
    });
  });

  describe("When its instantiated with an Unkown action", () => {
    test("Then it should return the previous state", () => {
      const UnknownAction = { type: "testFail", payload: "" };

      const reducerReturn = userReducer(previousUser, UnknownAction);

      expect(reducerReturn).toStrictEqual(previousUser);
    });
  });
});
