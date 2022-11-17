import { ThemeAction } from "../../types/actions";
import { Theme } from "../../uiContext/uiContext";

export const themeToggleActionCreator = (newTheme: Theme): ThemeAction => ({
  type: "toggleTheme",
  payload: newTheme,
});
