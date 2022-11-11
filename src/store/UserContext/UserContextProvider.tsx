import { useReducer } from "react";
import { UserLoged } from "../../interfaces/interfaces";
import userReducer from "../reducers/userReducer";
import UserContext from "./UserContext";

interface UserContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  const initialUser: UserLoged = {
    userName: "",
    token: "",
    isLogged: false,
  };
  const [user, dispatch] = useReducer(userReducer, initialUser);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
