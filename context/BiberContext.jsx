import PropTypes from "prop-types";

import { createContext, useReducer } from "react";
import { ACTIONS } from "../src/constants/enums";

export const BiberContext = createContext();

const DEFAULT_STATE = {
  API_KEY: null,
  LOADING: {
    API_QUERY: false,
    CREDENTIALS: false,
  },
  ERRORS: {
    ENTRY_CODE: false,
    BIRTHDAY: "",
  },
  INSERT_PASSWORD: "",
  INSERT_CLASS: "",
  INSERT_USER: "",
  INSERT_BIRTHDAY: {
    DAY: "",
    MONTH: "",
    YEAR: "",
  },
  AVAIVABLE_CLASSES: [],
  AVAIVABLE_USERS: {},
  CREDENTIALS: {
    USERNAME: "",
    PASSWORD: "",
  },
  UI: {
    SHOW_CLASS_AREA: false,
    SHOW_STUDENT_AREA: false,
    SHOW_BIRTHDAY_AREA: false,
    SHOW_CREDENTIALS_AREA: false,
    USER_NAME_COPIED: false,
    PASSWORD_COPIED: false,
  },
};

export const BiberContextReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_DEFAULT_STATE:
      return { ...state, ...DEFAULT_STATE };
    case ACTIONS.BIBER_SET_API_KEY:
      return { ...state, API_KEY: payload };
    case ACTIONS.BIBER_SET_LOADING_STATE:
      return { ...state, LOADING: { ...state.LOADING, ...payload } };
    case ACTIONS.BIBER_SET_BIBER_ERROR_STATE:
      return { ...state, ERRORS: { ...state.ERRORS, ...payload } };
    case ACTIONS.BIBER_STORE_DATA:
      return { ...state, ...payload };
    case ACTIONS.BIBER_STORE_CLASSES:
      return {
        ...state,
        AVAIVABLE_CLASSES: payload,
        UI: { ...state.ui, SHOW_CLASS_AREA: payload && payload.length > 0 },
        LOADING: { ...state.LOADING, API_QUERY: false },
        ERRORS: { ...state.ERRORS, ENTRY_CODE: false },
      };
    case ACTIONS.BIBER_STORE_USERS:
      return {
        ...state,
        AVAIVABLE_USERS: {
          ...state.AVAIVABLE_USERS,
          [payload.className]: payload.classes,
        },
        LOADING: { ...state.LOADING, API_QUERY: false },
        ERRORS: { ...state.ERRORS, ENTRY_CODE: false },
      };
    case ACTIONS.BIBER_STORE_CREDENTIALS:
      return { ...state, CREDENTIALS: { ...state.CREDENTIALS, ...payload } };
    case ACTIONS.BIBER_UPDATE_UI:
      return { ...state, UI: { ...state.UI, ...payload } };
    default:
      return state;
  }
};

export const BiberContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BiberContextReducer, DEFAULT_STATE);

  return (
    <BiberContext.Provider value={{ state, dispatch }}>
      {children}
    </BiberContext.Provider>
  );
};

BiberContextProvider.propTypes = {
  children: PropTypes.node,
};
