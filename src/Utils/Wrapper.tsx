import userReducer from "../store/reducers/userReducer/userReducer";
import { useReducer } from "react";
import { mockUser } from "./mockBack";
import UserContext from "../store/UserContext/UserContext";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  const [user, dispatch] = useReducer(userReducer, mockUser);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
