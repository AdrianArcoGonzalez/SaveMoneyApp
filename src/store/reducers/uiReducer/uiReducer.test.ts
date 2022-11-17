import { themeToggleActionCreator } from "../../actions/uiActions/uiActions";
import { Theme } from "../../uiContext/uiContext";
import { uiReducer } from "./uiReducer";

describe("Given a uiReducer function", () => {
  const previousTheme: Theme = "light";
  describe("When its instantiated with a toggleTheme action and the new theme as payload", () => {
    test("Then it should return the new theme", () => {
      const newTheme: Theme = "dark";

      const reducerReturn = uiReducer(
        previousTheme,
        themeToggleActionCreator(newTheme)
      );

      expect(reducerReturn).toStrictEqual(newTheme);
    });
  });

  describe("When its instantiated with an Unkown action", () => {
    test("Then it should return the previous state", () => {
      const UnknownAction = { type: "testFail", payload: "" };

      const reducerReturn = uiReducer(previousTheme, UnknownAction);

      expect(reducerReturn).toStrictEqual(previousTheme);
    });
  });
});
