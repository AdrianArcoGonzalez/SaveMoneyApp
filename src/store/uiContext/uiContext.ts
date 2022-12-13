import { createContext } from "react";
import { ContextUi, Ui } from "../../interfaces/interfaces";

const initialUi: Ui = {
  showExpenseForm: false,
  showIncomeForm: false,
  theme: "light",
};

export const UiContext = createContext<ContextUi>({
  ui: initialUi,
  dispatchUi: () => {},
});
