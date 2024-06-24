import { createContext, useReducer } from "react";
import { ACTIONS, THEMES } from "../src/constants/enums";

export const StateContext = createContext();

const DEFAULT_THEME = {
  THEME: localStorage.getItem("bsTheme"),
};

const htmlElement = document.documentElement;

export const StateContextReducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ACTIONS.SET_DEFAULT_STATE:
      htmlElement.setAttribute("data-bs-theme", DEFAULT_THEME.THEME);
      localStorage.setItem("bsTheme", DEFAULT_THEME.THEME);
      return { ...DEFAULT_THEME };
    case ACTIONS.SET_STATE_FROM_DISK:
      return { ...state };
    case ACTIONS.TOGGLE_STATE:
      if (state.THEME == THEMES.DARK) {
        htmlElement.setAttribute("data-bs-theme", THEMES.LIGHT);
        localStorage.setItem("bsTheme", THEMES.LIGHT);
        return { ...state, ...{ THEME: THEMES.LIGHT } };
      }
      htmlElement.setAttribute("data-bs-theme", THEMES.DARK);
      localStorage.setItem("bsTheme", THEMES.DARK);
      return { ...state, ...{ THEME: THEMES.DARK } };
    default:
      console.log("Action " + type + " has no state change defined.");
      return state;
  }
};

export const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StateContextReducer, DEFAULT_THEME);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
