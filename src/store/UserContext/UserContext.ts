import { createContext, Dispatch } from "react";
import { UserLoged } from "../../interfaces/interfaces";
import { initialUser } from "../../Utils/mockBack";
import { Action } from "../types/actions";

interface IUserContext {
  user: UserLoged;
  dispatch: Dispatch<Action>;
}

const UserContext = createContext<IUserContext>({
  user: initialUser,
  dispatch: () => {},
});

export default UserContext;
