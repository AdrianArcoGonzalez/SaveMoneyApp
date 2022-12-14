import userReducer from "../store/reducers/userReducer/userReducer";
import { useReducer, useMemo } from "react";
import { mockUser } from "./mockBack";
import UserContext from "../store/UserContext/UserContext";
import { uiReducer } from "../store/reducers/uiReducer/uiReducer";
import { Ui } from "../interfaces/interfaces";
import { UiContext } from "../store/uiContext/uiContext";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const initialUi: Ui = {
  showExpenseForm: false,
  showIncomeForm: false,
  theme: "light",
};

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  const [user, dispatch] = useReducer(userReducer, mockUser);
  const [ui, dispatchUi] = useReducer(uiReducer, initialUi);
  const uiContextValues = useMemo(
    () => ({
      ui: ui,
      dispatchUi: dispatchUi,
    }),
    [ui, dispatchUi]
  );

  return (
    <UiContext.Provider value={uiContextValues}>
      <UserContext.Provider value={{ user, dispatch }}>
        {children}
      </UserContext.Provider>
    </UiContext.Provider>
  );
};
