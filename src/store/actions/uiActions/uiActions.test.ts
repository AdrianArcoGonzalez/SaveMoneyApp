import { Theme } from "../../../interfaces/interfaces";
import { ThemeAction } from "../../types/actions";
import { themeToggleActionCreator } from "./uiActions";

describe("Given a function themeToggleActionCreatorr", () => {
  describe("When it's invoked with a theme", () => {
    test("Then it should return an action with the correct type and payload", () => {
      const theme: Theme = "light";

      const expectedAction: ThemeAction = {
        type: "toggleTheme",
        payload: theme,
      };

      const actionReturned = themeToggleActionCreator(theme);

      expect(actionReturned).toStrictEqual(expectedAction);
    });
  });
});
