import { Theme } from "../../uiContext/uiContext";
import { Action, ThemeAction, UnknownAction } from "../../types/actions";

export const uiReducer = (
  previousTheme: "light" | "dark",
  action: Action | UnknownAction
) => {
  let theme: Theme;

  switch (action.type) {
    case "toggleTheme":
      theme = (action as ThemeAction).payload;
      break;

    default:
      theme = previousTheme;
      break;
  }
  return theme;
};
