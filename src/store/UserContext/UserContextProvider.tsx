import { useReducer } from "react";
import { initialUser } from "../../Utils/mockBack";
import userReducer from "../reducers/userReducer/userReducer";
import UserContext from "./UserContext";

interface UserContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  const [user, dispatch] = useReducer(userReducer, initialUser);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
