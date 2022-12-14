import { Theme } from "../../../interfaces/interfaces";
import { FormAction, ThemeAction } from "../../types/actions";

export const themeToggleActionCreator = (newTheme: Theme): ThemeAction => ({
  type: "toggleTheme",
  payload: newTheme,
});

export const openExpenseFormActionCreator = (): FormAction => ({
  type: "openExpenseForm",
});

export const closeExpenseFormActionCreator = (): FormAction => ({
  type: "closeExpenseForm",
});

export const openIncomeFormActionCreator = (): FormAction => ({
  type: "openIncomeForm",
});

export const closeIncomeFormActionCreator = (): FormAction => ({
  type: "closeIncomeForm",
});
