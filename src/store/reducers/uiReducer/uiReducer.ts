import { Ui } from "../../../interfaces/interfaces";
import { Action, ThemeAction, UnknownAction } from "../../types/actions";

export const uiReducer = (previousUi: Ui, action: Action | UnknownAction) => {
  let ui: Ui = {
    theme: "light",
    showExpenseForm: false,
    showIncomeForm: false,
  };

  switch (action.type) {
    case "toggleTheme":
      ui = { ...previousUi, theme: (action as ThemeAction).payload };
      break;

    case "openExpenseForm":
      ui = { ...previousUi, showExpenseForm: true };
      break;

    case "closeExpenseForm":
      ui = { ...previousUi, showExpenseForm: false };
      break;

    case "openIncomeForm":
      ui = { ...previousUi, showIncomeForm: true };
      break;

    case "closeIncomeForm":
      ui = { ...previousUi, showIncomeForm: false };
      break;

    default:
      ui = { ...previousUi };
      break;
  }
  return ui;
};
