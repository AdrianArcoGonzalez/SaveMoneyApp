import { UserLoged } from "../../interfaces/interfaces";

export const userLoginActionCreator = (userData: UserLoged) => ({
  type: "login",
  payload: userData,
});
