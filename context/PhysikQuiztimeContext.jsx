/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import {
  QUIZTIME_ACTIONS,
  QUIZTIME_LOCAL_STORAGE_KEY,
} from "../src/constants/enums";

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
    10: "#00A651",
    20: "#2FB34A",
    30: "#5FBF43",
    40: "#8FCC3C",
    50: "#BFD835",
    60: "#E6C72E",
    70: "#E6A82A",
    80: "#E67A26",
    90: "#E64C22",
    100: "#D32F2F",
  },
  QUESTIONS: {
    PHY: [
      { QUESTION: "FRAGE 1", ANSWER: "ANTWORT 1", POINTS: 10, ACTIVE: true },
      { QUESTION: "FRAGE 2", ANSWER: "ANTWORT 2", POINTS: 10, ACTIVE: true },
      { QUESTION: "FRAGE 3", ANSWER: "ANTWORT 3", POINTS: 10, ACTIVE: true },
      { QUESTION: "FRAGE 4", ANSWER: "ANTWORT 4", POINTS: 20, ACTIVE: true },
    ],
    LIFE: [
      { QUESTION: "FRAGE 1", ANSWER: "ANTWORT 1", POINTS: 10, ACTIVE: true },
      { QUESTION: "FRAGE 2", ANSWER: "ANTWORT 2", POINTS: 10, ACTIVE: true },
      { QUESTION: "FRAGE 3", ANSWER: "ANTWORT 3", POINTS: 10, ACTIVE: true },
      { QUESTION: "FRAGE 4", ANSWER: "ANTWORT 4", POINTS: 20, ACTIVE: true },
    ],
    MRB: [
      { QUESTION: "FRAGE 1", ANSWER: "ANTWORT 1", POINTS: 10, ACTIVE: true },
      { QUESTION: "FRAGE 4", ANSWER: "ANTWORT 4", POINTS: 20, ACTIVE: true },
    ],
  },
};

const _saveStateToLocalStorage = (currentState) => {
  const LAST_UPDATE = new Date().toISOString();

  const STATE_TO_SAVE = {
    ...currentState,
    SETUP: {
      ...currentState.SETUP,
      LAST_UPDATE,
    },
  };

  try {
    localStorage.setItem(
      QUIZTIME_LOCAL_STORAGE_KEY,
      JSON.stringify(STATE_TO_SAVE),
    );
  } catch (error) {
    console.error("COULD NOT SAVE TO LOCAL STORAGE: ", error);
  }
};

export const _getInitialState = () => {
  const SAVED_STATE_AS_JSON_STRING = localStorage.getItem(
    QUIZTIME_LOCAL_STORAGE_KEY,
  );
  if (!SAVED_STATE_AS_JSON_STRING) {
    return DEFAULT_STATE;
  }

  try {
    const SAVED_STATE_AS_PARSED_OBJECT = JSON.parse(SAVED_STATE_AS_JSON_STRING);
    const INITIAL_STATE = { ...DEFAULT_STATE };

    const SHALLOW_COPY_AND_MERGED_STATE = {
      ...DEFAULT_STATE,
      ...SAVED_STATE_AS_PARSED_OBJECT,
      SETUP: {
        ...DEFAULT_STATE.SETUP,
        ...SAVED_STATE_AS_PARSED_OBJECT.SETUP,
      },
      RUNTIME: {
        ...DEFAULT_STATE.RUNTIME,
        ...SAVED_STATE_AS_PARSED_OBJECT.RUNTIME,
      },
      QUESTIONS: { ...DEFAULT_STATE.QUESTIONS },
    };

    if (SAVED_STATE_AS_PARSED_OBJECT.QUESTIONS) {
      INITIAL_STATE.QUESTIONS = Object.keys(DEFAULT_STATE.QUESTIONS).reduce(
        (acc, category) => {
          acc[category] = (DEFAULT_STATE.QUESTIONS[category] || []).map(
            (defaultQ, index) => {
              const savedQ =
                SAVED_STATE_AS_PARSED_OBJECT.QUESTIONS[category]?.[index];
              return savedQ ? { ...defaultQ, ...savedQ } : defaultQ;
            },
          );
          return acc;
        },
        {},
      );
    }

    const FULLY_MERGED_STATE = {
      ...SHALLOW_COPY_AND_MERGED_STATE,
      QUESTIONS: INITIAL_STATE.QUESTIONS,
    };

    _saveStateToLocalStorage(FULLY_MERGED_STATE);
    return FULLY_MERGED_STATE;
  } catch (error) {
    console.error(
      "ERROR WHILE PARSING SAVED STATE. USED FALLBACK DEFAULT STATE. MESSAGE: ",
      error,
    );
    return DEFAULT_STATE;
  }
};

export const PhysikQuiztimeContextReducer = (STATE, { TYPE, PAYLOAD }) => {
  let newState;

  switch (TYPE) {
    case QUIZTIME_ACTIONS.PLAY_PHYSICS_QUESTION:
      newState = { ...STATE };
      newState.QUESTIONS = {
        ...STATE.QUESTIONS,
        PHY: [...STATE.QUESTIONS.PHY],
      };

      newState.QUESTIONS.PHY[PAYLOAD] = {
        ...STATE.QUESTIONS.PHY[PAYLOAD],
        ACTIVE: false,
      };

      newState.RUNTIME = {
        ...STATE.RUNTIME,
        ACTUAL_QUESTION: newState.QUESTIONS.PHY[PAYLOAD],
      };

      _saveStateToLocalStorage(newState);
      return newState;
    case QUIZTIME_ACTIONS.RESET_STATE:
      try {
        localStorage.removeItem(QUIZTIME_LOCAL_STORAGE_KEY);
      } catch (error) {
        console.error(
          "COULD NOT CLEAR LOCAL STORAGE FOR OVERWRITE WITH NEW STATE: ",
          error,
        );
      }
      return { ...DEFAULT_STATE };
    default:
      return STATE;
  }
};

export const PhysikQuiztimeContext = createContext();

export const PhysikQuiztimeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    PhysikQuiztimeContextReducer,
    null,
    _getInitialState,
  );

  return (
    <PhysikQuiztimeContext.Provider value={{ state, dispatch }}>
      {children}
    </PhysikQuiztimeContext.Provider>
  );
};

PhysikQuiztimeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
