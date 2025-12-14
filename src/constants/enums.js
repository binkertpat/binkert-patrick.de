export const ACTIONS = {
  SET_DEFAULT_STATE: "set-default-state",
  SET_STATE_FROM_DISK: "set-state",
  TOGGLE_STATE: "toggle-state",
  LOAD_USER_STATE: "load-user-state",
  BIBER_SET_API_KEY: "biber-set-api-key",
  BIBER_SET_LOADING_STATE: "biber-set-loading-state",
  BIBER_SET_BIBER_ERROR_STATE: "biber-set-error-state",
  BIBER_STORE_DATA: "biber-store-data",
  BIBER_STORE_CLASSES: "biber-store-classes",
  BIBER_STORE_USERS: "biber-store-users",
  BIBER_STORE_CREDENTIALS: "biber-store-credentials",
  BIBER_UPDATE_UI: "biber-update-ui",
};

export const QUIZTIME_ACTIONS = {
  SET_DEFAULT_STATE: "SET_DEFAULT_STATE",
  PLAY_PHYSICS_QUESTION: "PLAY_PHYSICS_QUESTION",
  PLAY_LIFE_QUESTION: "PLAY_LIFE_QUESTION",
  PLAY_MRB_QUESTION: "PLAY_MRB_QUESTION"
};

export const QUIZTIME_LOCAL_STORAGE_KEY = "PHYSIK_QUIZTIME_STATE";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};
