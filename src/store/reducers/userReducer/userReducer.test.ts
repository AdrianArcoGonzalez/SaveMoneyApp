import { initialUser, mockUser } from "../../../Utils/mockBack";
import { userLoginActionCreator } from "../../actions/userActions/userActions";
import userReducer from "./userReducer";

describe("Given a userReducers function", () => {
  const previousUser = initialUser;
  const newUser = mockUser;
  describe("When its instantiated with a login action and the correct payload", () => {
    test("Then it should return the new user", () => {
      const reducerReturn = userReducer(
        previousUser,
        userLoginActionCreator(newUser)
      );

      expect(reducerReturn).toStrictEqual(newUser);
    });
  });

  describe("When its instantiated with an Unkown action", () => {
    test("Then it should return the previous state", () => {
      const UnknownAction = { type: "testFail", payload: "" };

      const reducerReturn = userReducer(previousUser, UnknownAction);

      expect(reducerReturn).toStrictEqual(previousUser);
    });
  });
});
