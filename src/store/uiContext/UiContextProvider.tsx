import { useReducer, useMemo } from "react";
import { Ui } from "../../interfaces/interfaces";
import { uiReducer } from "../reducers/uiReducer/uiReducer";
import { UiContext } from "./uiContext";

export interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const initialUi: Ui = {
    theme: "light",
    showExpenseForm: false,
    showIncomeForm: false,
  };

  const [ui, dispatch] = useReducer(uiReducer, initialUi);
  const contextValues = useMemo(
    () => ({
      ui: ui,
      dispatchUi: dispatch,
    }),
    [ui, dispatch]
  );
  return (
    <UiContext.Provider value={contextValues}>{children}</UiContext.Provider>
  );
};
