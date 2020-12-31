import { Window } from "../../types";

type State = Window[] | [];

type Action =
  | { type: "ADD_WINDOW"; payload: Window }
  | { type: "REMOVE_WINDOW"; payload: number }
  | { type: "TOGGLE_WINDOW"; payload: number };

function windowReducer(state: State = [], action: Action) {
  switch (action.type) {
    case "ADD_WINDOW":
      return [...state, action.payload];
    case "REMOVE_WINDOW":
      return state.filter((window) => window.id !== action.payload);
    case "TOGGLE_WINDOW":
      return (state as Window[]).map((window) => {
        if (window.id === action.payload) {
          window.show = !window.show;
        }
        return window;
      });
    default:
      return state;
  }
}

export default windowReducer;
