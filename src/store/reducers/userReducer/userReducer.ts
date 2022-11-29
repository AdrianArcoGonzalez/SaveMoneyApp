import { UserLoged } from "../../../interfaces/interfaces";
import { initialUser } from "../../../Utils/mockBack";
import { Action, LoginAction, UnknownAction } from "../../types/actions";

const userReducer = (
  previousUser: UserLoged,
  action: Action | UnknownAction
) => {
  let user = initialUser;

  if (action.type === "login") {
    user = {
      ...user,
      userName: (action as LoginAction).payload.userName,
      token: (action as LoginAction).payload.token,
      isLogged: (action as LoginAction).payload.isLogged,
      currency: (action as LoginAction).payload.currency,
      expenses: (action as LoginAction).payload.expenses,
      incomes: (action as LoginAction).payload.incomes,
      moneySaved: (action as LoginAction).payload.moneySaved,
      savingTarget: (action as LoginAction).payload.savingTarget,
    };
  } else {
    user = { ...previousUser };
  }

  return user;
};

export default userReducer;
