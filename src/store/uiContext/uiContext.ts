import { createContext, Dispatch } from "react";
import { Action } from "../types/actions";

export type Theme = "light" | "dark";

export interface Ui {
  theme: Theme;
  dispatch: Dispatch<Action>;
}

export const UiContext = createContext<Ui>({
  theme: "light",
  dispatch: () => {},
});