import { UserLoged } from "../../../interfaces/interfaces";
import { LoginAction } from "../../types/actions";

export const userLoginActionCreator = (userData: UserLoged): LoginAction => ({
  type: "login",
  payload: userData,
});
