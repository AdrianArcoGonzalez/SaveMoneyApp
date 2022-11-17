import { UserLoged } from "../../interfaces/interfaces";
import { Theme } from "../uiContext/uiContext";
import { ActionType } from "./actionTypes";

export interface Action {
  type: ActionType;
}

export interface AnyAction {
  type: any;
}

export interface UnknownAction extends AnyAction {
  type: string;
}

export interface LoginAction extends Action {
  payload: UserLoged;
}

export interface ThemeAction extends Action {
  payload: Theme;
}
