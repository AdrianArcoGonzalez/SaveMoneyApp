import { useReducer } from "react";
import { uiReducer } from "../reducers/uiReducer/uiReducer";
import { Theme, UiContext } from "./uiContext";

export interface UiContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UiContextProvider = ({
  children,
}: UiContextProviderProps): JSX.Element => {
  const initialTheme: Theme = "light";

  const [theme, dispatch] = useReducer(uiReducer, initialTheme);

  return (
    <UiContext.Provider value={{ theme, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};
