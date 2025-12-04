import PropTypes from "prop-types";

import { createContext, useReducer } from "react";
import { QUIZTIME_ACTIONS, QUIZTIME_LOCAL_STORAGE_KEY } from "../src/constants/enums";

export const PhysikQuiztimeContext = createContext();

const DEFAULT_STATE = {
  SETUP: {
    LAST_UPDATE: null,
    NAMES: {
      GROUP_A: 'GRUPPE A',
      GROUP_B: 'GRUPPE B',
      GROUP_C: 'GRUPPE C',
      GROUP_D: 'GRUPPE D',
    }
  },
  RUNTIME: {
    ALREADY_SHOWN_QUESTIONS: [],
    ACTUAL_QUESTION: null,
    POINTS: {
      GROUP_A: 0,
      GROUP_B: 0,
      GROUP_C: 0,
      GROUP_D: 0,
    }
  },
  QUESTIONS: {
    1: {
      QUESTION: "Was ist die Einheit der Kraft?",
      ANSWER: "Newton",
      POINTS: 10
    }
  }
};

const syncLocalStorage = (STATE) => {
  const LAST_UPDATE = new Date().toISOString();
  localStorage.setItem(QUIZTIME_LOCAL_STORAGE_KEY, JSON.stringify(
    {
      ...STATE,
      SETUP: {
        ...STATE.SETUP,
        LAST_UPDATE
      }
    }
  ));
}

export const PhysikQuiztimeContextReducer = (STATE, { TYPE, PAYLOAD }) => {
  switch (TYPE) {
    case QUIZTIME_ACTIONS.SET_DEFAULT_STATE:
      syncLocalStorage({ ...STATE, ...DEFAULT_STATE, ...PAYLOAD })
      return { ...STATE, ...DEFAULT_STATE };
    default:
      syncLocalStorage({ ...STATE })
      return STATE;
  }
};

export const PhysikQuiztimeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PhysikQuiztimeContextReducer, DEFAULT_STATE);

  return (
    <PhysikQuiztimeContext.Provider value={{ state, dispatch }}>
      {children}
    </PhysikQuiztimeContext.Provider>
  );
};

PhysikQuiztimeContextProvider.propTypes = {
  children: PropTypes.node,
};
