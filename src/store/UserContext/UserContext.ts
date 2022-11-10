import { createContext, Dispatch } from "react";
import { UserLoged } from "../../interfaces/interfaces";
import { Action } from "../types/actions";

interface IUserContext {
  user: UserLoged;
  dispatch: Dispatch<Action>;
}

const UserContext = createContext<IUserContext>({
  user: {
    userName: "",
    token: "",
    isLogged: false,
  },
  dispatch: () => {},
});

export default UserContext;
