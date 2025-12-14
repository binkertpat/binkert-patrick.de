import PropTypes from "prop-types";

import { createContext, useReducer } from "react";
import {
  QUIZTIME_ACTIONS,
  QUIZTIME_LOCAL_STORAGE_KEY,
} from "../src/constants/enums";

export const PhysikQuiztimeContext = createContext();

const DEFAULT_STATE = {
  SETUP: {
    LAST_UPDATE: null,
    NAMES: {
      GROUP_A: "GRUPPE A",
      GROUP_B: "GRUPPE B",
      GROUP_C: "GRUPPE C",
      GROUP_D: "GRUPPE D",
    },
  },
  RUNTIME: {
    ALREADY_SHOWN_QUESTIONS: [],
    ACTUAL_QUESTION: null,
    POINTS: {
      GROUP_A: 0,
      GROUP_B: 0,
      GROUP_C: 0,
      GROUP_D: 0,
    },
  },
  BUTTON_COLORS: {
    10: '#00A651',
    20: '#2FB34A',
    30: '#5FBF43',
    40: '#8FCC3C',
    50: '#BFD835',
    60: '#E6C72E',
    7: '#E6A82A',
    80: '#E67A26',
    90: '#E64C22',
    100: '#D32F2F',
  },
  QUESTIONS: {
    PHY: 
    [
      {
        QUESTION : 'FRAGE 1',
        ANSWER: 'ANTWORT 1',
        POINTS: 10,
        ACTIVE: true,
      },
      {
        QUESTION : 'FRAGE 2',
        ANSWER: 'ANTWORT 2',
        POINTS: 10,
        ACTIVE: true,
      },
      {
        QUESTION : 'FRAGE 3',
        ANSWER: 'ANTWORT 3',
        POINTS: 10,
        ACTIVE: true,
      },
      {
        QUESTION : 'FRAGE 4',
        ANSWER: 'ANTWORT 4',
        POINTS: 20,
        ACTIVE: true,
      }
    ],
    LIFE: [
      {
        QUESTION : 'FRAGE 1',
        ANSWER: 'ANTWORT 1',
        POINTS: 10,
        ACTIVE: true,
      },
      {
        QUESTION : 'FRAGE 2',
        ANSWER: 'ANTWORT 2',
        POINTS: 10,
        ACTIVE: true,
      },
      {
        QUESTION : 'FRAGE 3',
        ANSWER: 'ANTWORT 3',
        POINTS: 10,
        ACTIVE: true,
      },
      {
        QUESTION : 'FRAGE 4',
        ANSWER: 'ANTWORT 4',
        POINTS: 20,
        ACTIVE: true,
      }
    ],
    MRB: [
      {
        QUESTION : 'FRAGE 1',
        ANSWER: 'ANTWORT 1',
        POINTS: 10,
        ACTIVE: true,
      },
      {
        QUESTION : 'FRAGE 4',
        ANSWER: 'ANTWORT 4',
        POINTS: 20,
        ACTIVE: true,
      }
    ]
  },
}




const syncLocalStorage = (STATE) => {
  const LAST_UPDATE = new Date().toISOString();
  localStorage.setItem(
    QUIZTIME_LOCAL_STORAGE_KEY,
    JSON.stringify({
      ...STATE,
      SETUP: {
        ...STATE.SETUP,
        LAST_UPDATE,
      },
    }),
  );
};

export const PhysikQuiztimeContextReducer = (STATE, { TYPE, PAYLOAD }) => {
  switch (TYPE) {
    case QUIZTIME_ACTIONS.SET_DEFAULT_STATE:
      syncLocalStorage({ ...STATE, ...DEFAULT_STATE, ...PAYLOAD });
      return { ...STATE, ...DEFAULT_STATE };
    case QUIZTIME_ACTIONS.PLAY_PHYSICS_QUESTION:
      var state = STATE;
      state.QUESTIONS.PHY[PAYLOAD].ACTIVE = false;
      state.RUNTIME.ACTUAL_QUESTION = state.QUESTIONS.PHY[PAYLOAD];
      syncLocalStorage({ ...STATE, ...state });
      return { ...STATE, ...state };
    default:
      syncLocalStorage({ ...STATE });
      return STATE;
  }
};

export const PhysikQuiztimeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    PhysikQuiztimeContextReducer,
    DEFAULT_STATE,
  );

  return (
    <PhysikQuiztimeContext.Provider value={{ state, dispatch }}>
      {children}
    </PhysikQuiztimeContext.Provider>
  );
};

PhysikQuiztimeContextProvider.propTypes = {
  children: PropTypes.node,
};
