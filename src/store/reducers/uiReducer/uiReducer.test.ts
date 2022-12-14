import { Theme, Ui } from "../../../interfaces/interfaces";
import {
  closeExpenseFormActionCreator,
  closeIncomeFormActionCreator,
  openExpenseFormActionCreator,
  openIncomeFormActionCreator,
  themeToggleActionCreator,
} from "../../actions/uiActions/uiActions";

import { uiReducer } from "./uiReducer";

const previousUi: Ui = {
  showExpenseForm: false,
  showIncomeForm: false,
  theme: "light",
};

describe("Given a uiReducer function", () => {
  describe("When its instantiated with a toggleTheme action and the new theme as payload", () => {
    test("Then it should return the new theme", () => {
      const newTheme: Theme = "dark";

      const reducerReturn = uiReducer(
        previousUi,
        themeToggleActionCreator(newTheme)
      );
      expect(reducerReturn).toStrictEqual({ ...previousUi, theme: newTheme });
    });
  });

  describe("When its instantiated with a openExpenseForm action", () => {
    test("Then it toggle the status", () => {
      const newStatus = true;

      const reducerReturn = uiReducer(
        previousUi,
        openExpenseFormActionCreator()
      );
      expect(reducerReturn).toStrictEqual({
        ...previousUi,
        showExpenseForm: newStatus,
      });
    });
  });

  describe("When its instantiated with a closeExpenseForm action", () => {
    test("Then it toggle the status", () => {
      previousUi.showExpenseForm = true;
      const newStatus = false;

      const reducerReturn = uiReducer(
        previousUi,
        closeExpenseFormActionCreator()
      );
      expect(reducerReturn).toStrictEqual({
        ...previousUi,
        showExpenseForm: newStatus,
      });
    });
  });

  describe("When its instantiated with a openIncomeForm action", () => {
    test("Then it toggle the status", () => {
      const newStatus = true;

      const reducerReturn = uiReducer(
        previousUi,
        openIncomeFormActionCreator()
      );
      expect(reducerReturn).toStrictEqual({
        ...previousUi,
        showIncomeForm: newStatus,
      });
    });
  });

  describe("When its instantiated with a closeIncomeForm action", () => {
    test("Then it toggle the status", () => {
      previousUi.showIncomeForm = true;
      const newStatus = false;

      const reducerReturn = uiReducer(
        previousUi,
        closeIncomeFormActionCreator()
      );
      expect(reducerReturn).toStrictEqual({
        ...previousUi,
        showIncomeForm: newStatus,
      });
    });
  });

  describe("When its instantiated with an Unkown action", () => {
    test("Then it should return the previous state", () => {
      const UnknownAction = { type: "testFail", payload: "" };

      const reducerReturn = uiReducer(previousUi, UnknownAction);

      expect(reducerReturn).toStrictEqual(previousUi);
    });
  });
});
