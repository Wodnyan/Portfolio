import { Window } from "../../types";

export const ADD_WINDOW = (window: Window) => ({
  type: "ADD_WINDOW",
  payload: window,
});

export const REMOVE_WINDOW = (windowId: number) => ({
  type: "REMOVE_WINDOW",
  payload: windowId,
});

export const TOGGLE_WINDOW = (windowId: number) => ({
  type: "TOGGLE_WINDOW",
  payload: windowId,
});
