import userReducer from "../store/reducers/userReducer/userReducer";
import { useReducer, useMemo } from "react";
import { mockUser } from "./mockBack";
import UserContext from "../store/UserContext/UserContext";
import { uiReducer } from "../store/reducers/uiReducer/uiReducer";
import { Ui, UserLoged } from "../interfaces/interfaces";
import { UiContext } from "../store/uiContext/uiContext";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  testUser?: UserLoged;
  mockDispatch?: () => void;
  mockUi?: Ui;
}

const initialUi: Ui = {
  showExpenseForm: false,
  showIncomeForm: false,
  theme: "light",
};

export const Wrapper = ({
  children,
  mockDispatch,
  mockUi,
  testUser,
}: WrapperProps): JSX.Element => {
  const [user, dispatch] = useReducer(userReducer, mockUser);
  const [ui, dispatchUi] = useReducer(uiReducer, initialUi);

  return (
    <UiContext.Provider
      value={{
        ui: mockUi ? mockUi : ui,
        dispatchUi: mockDispatch ? mockDispatch : dispatchUi,
      }}
    >
      <UserContext.Provider
        value={{
          user: testUser ? testUser : user,
          dispatch: mockDispatch ? mockDispatch : dispatch,
        }}
      >
        {children}
      </UserContext.Provider>
    </UiContext.Provider>
  );
};
