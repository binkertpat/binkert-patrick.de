import PropTypes from "prop-types";

import { createContext, useReducer } from "react";
import { ACTIONS, THEMES } from "../src/constants/enums";

export const StateContext = createContext();

const DEFAULT_THEME = {
  THEME: THEMES.DARK,
};

const htmlElement = document.documentElement;

export const StateContextReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_DEFAULT_STATE:
      htmlElement.setAttribute("data-bs-theme", DEFAULT_THEME.THEME);
      localStorage.setItem("bsTheme", DEFAULT_THEME.THEME);
      return { ...state, ...DEFAULT_THEME };
    case ACTIONS.LOAD_USER_STATE:
      htmlElement.setAttribute("data-bs-theme", payload.THEME);
      return { ...state, ...payload };
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

StateContextProvider.propTypes = {
  children: PropTypes.node,
};
