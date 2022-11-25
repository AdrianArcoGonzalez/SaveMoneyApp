import { UserLoged } from "../../../interfaces/interfaces";
import { Action, LoginAction, UnknownAction } from "../../types/actions";

const userReducer = (
  previousUser: UserLoged,
  action: Action | UnknownAction
) => {
  let user: UserLoged = { userName: "", token: "", isLogged: false };

  if (action.type === "login") {
    user = {
      ...user,
      userName: (action as LoginAction).payload.userName,
      token: (action as LoginAction).payload.token,
      isLogged: (action as LoginAction).payload.isLogged,
    };
  } else {
    user = { ...previousUser };
  }

  return user;
};

export default userReducer;
