let windowId = 0;

export const ADD_WINDOW = (window: any) => ({
  type: "ADD_WINDOW",
  payload: {
    id: windowId++,
    ...window,
  },
});

export const REMOVE_WINDOW = (windowId: number) => ({
  type: "REMOVE_WINDOW",
  payload: windowId,
});

export const TOGGLE_WINDOW = (windowId: number) => ({
  type: "TOGGLE_WINDOW",
  payload: windowId,
});
