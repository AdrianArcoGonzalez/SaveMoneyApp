import { mockUser } from "../../../Utils/mockBack";
import { LoginAction } from "../../types/actions";
import { userLoginActionCreator } from "./userActions";

describe("Given a userLoginActionCreator", () => {
  describe("When it's invoked with a userData", () => {
    test("Then it should return an action with the correct type and payload", () => {
      const userData = mockUser;
      const expectedAction: LoginAction = {
        type: "login",
        payload: userData,
      };

      const actionReturned = userLoginActionCreator(userData);

      expect(actionReturned).toStrictEqual(expectedAction);
    });
  });
});
