import { UserLoged } from "../../../interfaces/interfaces";
import { userLoginActionCreator } from "../../actions/userActions/userActions";
import userReducer from "./userReducer";

describe("Given a userReducers function", () => {
  describe("When its instantiated with a login action and the correct payload", () => {
    test("Then it should return the new user", () => {
      const previousUser: UserLoged = {
        userName: "",
        token: "",
        isLogged: false,
      };
      const newUser: UserLoged = {
        userName: "John",
        token: "123123123",
        isLogged: true,
      };

      const reducerReturn = userReducer(
        previousUser,
        userLoginActionCreator(newUser)
      );

      expect(reducerReturn).toStrictEqual(newUser);
    });
  });

  describe("When its instantiated with an Unkown action", () => {
    test("Then it should return the previous state", () => {
      const previousUser: UserLoged = {
        userName: "John",
        token: "123123123",
        isLogged: true,
      };
      const UnknownAction = { type: "testFail", payload: "" };

      const reducerReturn = userReducer(previousUser, UnknownAction);

      expect(reducerReturn).toStrictEqual(previousUser);
    });
  });
});
