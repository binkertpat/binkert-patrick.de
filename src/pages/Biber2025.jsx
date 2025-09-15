import { useCallback, useEffect, useMemo } from "react";
import Spinner from "../components/Spinner";
import UserSelect from "../components/Biber/UserSelect";
import BirthdayForm from "../components/Biber/BirthdayForm";
import ClassSelect from "../components/Biber/ClassSelect";
import CredentialsView from "../components/Biber/CredentialsView";
import {
  API_CONCRETE_LOGIN_ENDPOINT,
  API_DATA_ENDPOINT,
  API_VALIDATION_ENDPOINT,
} from "../constants/BiberEndpoints";
import { useBiberContext } from "../../hooks/useBiberContext";
import { ACTIONS } from "../constants/enums";
import { sha256 } from "../utils/hashUtils";
import { doFetch } from "../utils/fetchPostJson";
import PasswordForm from "../components/Biber/PasswordForm";

const Biber2025 = () => {
  const { state, dispatch } = useBiberContext();

  const handleHardReload = () => {
    dispatch({
      type: ACTIONS.SET_DEFAULT_STATE,
    });
  };

  const usersForSelectedClass = useMemo(() => {
    return state.AVAIVABLE_USERS[state.INSERT_CLASS] || [];
  }, [state.AVAIVABLE_USERS, state.INSERT_CLASS]);

  const handleInsertPasswordChange = useCallback(
    (value) => {
      dispatch({
        type: ACTIONS.BIBER_STORE_DATA,
        payload: {
          INSERT_PASSWORD: value,
        },
      });
    },
    [dispatch],
  );

  const handleClassConfirm = useCallback(() => {
    if (state.INSERT_CLASS) {
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          SHOW_STUDENT_AREA: true,
        },
      });
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          HIDE_CLASS_SUBMIT_BUTTON: true,
        },
      });
    }
  }, [state.INSERT_CLASS, dispatch]);

  const handleStudentConfirm = useCallback(() => {
    if (state.INSERT_USER) {
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          SHOW_BIRTHDAY_AREA: true,
        },
      });
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          HIDE_STUDENT_SUBMIT_BUTTON: true,
        },
      });
    }
  }, [state.INSERT_USER, dispatch]);

  const handleCopyUsername = useCallback(
    (username) => {
      if (!username) return;
      navigator.clipboard.writeText(username);
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          USER_NAME_COPIED: true,
        },
      });
      setTimeout(
        () =>
          dispatch({
            type: ACTIONS.BIBER_UPDATE_UI,
            payload: {
              USER_NAME_COPIED: false,
            },
          }),
        2000,
      );
    },
    [dispatch],
  );

  const handleCopyPassword = useCallback(
    (password) => {
      if (!password) return;
      navigator.clipboard?.writeText(password);
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          PASSWORD_COPIED: true,
        },
      });
      setTimeout(
        () =>
          dispatch({
            type: ACTIONS.BIBER_UPDATE_UI,
            payload: {
              PASSWORD_COPIED: false,
            },
          }),
        2000,
      );
    },
    [dispatch],
  );

  const requestApiKey = useCallback(
    async (password) => {
      dispatch({
        type: ACTIONS.BIBER_SET_LOADING_STATE,
        payload: {
          API_QUERY: true,
        },
      });
      try {
        const formdata = new FormData();
        formdata.append("PASSWORD", password);
        const text = await doFetch(API_VALIDATION_ENDPOINT, {
          body: formdata,
          as: "text",
        });
        const parsed = JSON.parse(text);
        dispatch({
          type: ACTIONS.BIBER_SET_API_KEY,
          payload: parsed,
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: ACTIONS.BIBER_SET_BIBER_ERROR_STATE,
          payload: {
            ENTRY_CODE: true,
          },
        });
        dispatch({
          type: ACTIONS.BIBER_SET_LOADING_STATE,
          payload: {
            API_QUERY: false,
          },
        });
      }
    },
    [dispatch],
  );

  const fetchHelper = useCallback(
    async (type) => {
      if (type === "class" && state.AVAIVABLE_CLASSES.length > 0) return;
      if (type === "user" && Object.keys(state.AVAIVABLE_USERS).length > 0)
        return;

      const formdata = new FormData();
      formdata.append("API_KEY", state.API_KEY?.API_KEY ?? "");
      formdata.append("REQUESTED_FILE", type);

      try {
        if (type === "class") {
          const result = await doFetch(API_DATA_ENDPOINT, {
            body: formdata,
            as: "json",
          });
          dispatch({
            type: ACTIONS.BIBER_STORE_CLASSES,
            payload: result,
          });
        } else if (type === "user") {
          const result = await doFetch(API_DATA_ENDPOINT, {
            body: formdata,
            as: "json",
          });
          if (Array.isArray(result)) {
            const usersObj = {};
            for (let i = 0; i < result.length; i++) {
              const cls = state.AVAIVABLE_CLASSES[i] || String(i);
              usersObj[cls] = result[i];
            }
            Object.entries(usersObj).forEach(([className, users]) => {
              dispatch({
                type: ACTIONS.BIBER_STORE_USERS,
                payload: {
                  className: className,
                  classes: users,
                },
              });
            });
          } else {
            Object.entries(result).forEach(([className, users]) => {
              dispatch({
                type: ACTIONS.BIBER_STORE_USERS,
                payload: {
                  className: className,
                  classes: users,
                },
              });
            });
          }
        }
      } catch (e) {
        console.error(e);
        dispatch({
          type: ACTIONS.BIBER_SET_BIBER_ERROR_STATE,
          payload: {
            ENTRY_CODE: true,
          },
        });
        dispatch({
          type: ACTIONS.BIBER_SET_LOADING_STATE,
          payload: {
            API_QUERY: false,
          },
        });
      }
    },
    [
      dispatch,
      state.API_KEY?.API_KEY,
      state.AVAIVABLE_CLASSES,
      state.AVAIVABLE_USERS,
    ],
  );

  const getUserCredentials = useCallback(async () => {
    dispatch({
      type: ACTIONS.BIBER_SET_LOADING_STATE,
      payload: {
        CREDENTIALS: true,
      },
    });
    try {
      const combined =
        state.INSERT_BIRTHDAY.DAY +
        "." +
        state.INSERT_BIRTHDAY.MONTH +
        "." +
        state.INSERT_BIRTHDAY.YEAR;
      const hashed = await sha256(combined);
      const formdata = new FormData();
      formdata.append("API_KEY", state.API_KEY?.API_KEY ?? "");
      formdata.append("USER_SECRET", state.INSERT_USER + hashed);

      const text = await doFetch(API_CONCRETE_LOGIN_ENDPOINT, {
        body: formdata,
        as: "text",
      });
      const pwd = String(text).replace(/'/g, "");
      dispatch({
        type: ACTIONS.BIBER_STORE_CREDENTIALS,
        payload: {
          PASSWORD: pwd,
        },
      });
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          HIDE_BIRTHDAY_SUBMIT_BUTTON: true,
        },
      });
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          SHOW_CREDENTIALS_AREA: true,
        },
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: ACTIONS.BIBER_SET_BIBER_ERROR_STATE,
        payload: {
          ENTRY_CODE: true,
        },
      });
    } finally {
      dispatch({
        type: ACTIONS.BIBER_SET_LOADING_STATE,
        payload: {
          CREDENTIALS: false,
        },
      });
    }
  }, [
    dispatch,
    state.API_KEY?.API_KEY,
    state.INSERT_BIRTHDAY.DAY,
    state.INSERT_BIRTHDAY.MONTH,
    state.INSERT_BIRTHDAY.YEAR,
    state.INSERT_USER,
  ]);

  useEffect(() => {
    if (!state.API_KEY?.SUCCESS) return;
    (async () => {
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: { SHOW_CLASS_AREA: true, HIDE_PASSWORD_SUBMIT_BUTTON: true },
      });
      await fetchHelper("class");
      await fetchHelper("user");
    })();
  }, [state.API_KEY, fetchHelper, dispatch]);

  const handlePasswordSubmit = useCallback(() => {
    dispatch({
      type: ACTIONS.BIBER_SET_LOADING_STATE,
      payload: {
        API_QUERY: true,
      },
    });
    if (state.INSERT_PASSWORD) {
      requestApiKey(state.INSERT_PASSWORD);
    } else {
      dispatch({
        type: ACTIONS.BIBER_SET_LOADING_STATE,
        payload: {
          API_QUERY: false,
        },
      });
    }
  }, [dispatch, requestApiKey, state.INSERT_PASSWORD]);

  const handleBirthdaySubmit = useCallback(async () => {
    const { DAY, MONTH, YEAR } = state.INSERT_BIRTHDAY;
    if (!(DAY && MONTH && YEAR)) {
      dispatch({
        type: ACTIONS.BIBER_SET_BIBER_ERROR_STATE,
        payload: {
          BIRTHDAY: "Das eingebene Geburtsdatum ist unvollständig.",
        },
      });
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          SHOW_CREDENTIALS_AREA: false,
        },
      });
      return;
    }

    const userList = state.AVAIVABLE_USERS[state.INSERT_CLASS] || [];
    const userData = userList.find((u) => u.USERNAME === state.INSERT_USER);
    if (!userData) {
      dispatch({
        type: ACTIONS.BIBER_SET_BIBER_ERROR_STATE,
        payload: {
          BIRTHDAY: "Benutzer nicht gefunden.",
        },
      });
      return;
    }

    const combined = DAY + "." + MONTH + "." + YEAR;
    const hashed = await sha256(combined);
    if (userData.DATE_OF_BIRTH === hashed) {
      dispatch({
        type: ACTIONS.BIBER_STORE_CREDENTIALS,
        payload: {
          USERNAME: userData.USERNAME,
          PASSWORD: "",
        },
      });
      dispatch({
        type: ACTIONS.BIBER_SET_BIBER_ERROR_STATE,
        payload: {
          BIRTHDAY: "",
        },
      });
      await getUserCredentials();
    } else {
      dispatch({
        type: ACTIONS.BIBER_SET_BIBER_ERROR_STATE,
        payload: {
          BIRTHDAY:
            "Benutzer und Geburtsdatum stimmen nicht überein. Korrigiere deine Eingabe oder wende dich mit Hilfe deiner LernSax-E-Mail an: it@cottagym.lernsax.de",
        },
      });
      dispatch({
        type: ACTIONS.BIBER_UPDATE_UI,
        payload: {
          SHOW_CREDENTIALS_AREA: false,
        },
      });
      console.error(
        "Benutzer und Geburtsdatum stimmen nicht überein. Korrigiere deine Eingabe oder wende dich mit Hilfe deiner LernSax-E-Mail an: it@cottagym.lernsax.de",
      );
    }
  }, [
    dispatch,
    state.INSERT_BIRTHDAY,
    state.AVAIVABLE_USERS,
    state.INSERT_CLASS,
    state.INSERT_USER,
    getUserCredentials,
  ]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3 mt-3 pt-3 pb-3">
        Informatikbiber@BvC 2025
      </h1>
      <PasswordForm
        state={state}
        onInsertPassword={(value) => {
          dispatch({
            type: ACTIONS.BIBER_UPDATE_UI,
            payload: {
              ENABLE_PASSWORD_SUBMIT_BUTTON: value !== "" ? true : false,
            },
          });
          handleInsertPasswordChange(value);
        }}
        onPasswordSubmit={handlePasswordSubmit}
      />

      {state.LOADING.API_QUERY && (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      )}

      {state.UI.SHOW_CLASS_AREA && state.AVAIVABLE_CLASSES.length > 0 && <hr />}

      <div className="container p-0">
        <div className="row">
          <div className="col col-12 col-md-6">
            {state.UI.SHOW_CLASS_AREA && state.AVAIVABLE_CLASSES.length > 0 && (
              <ClassSelect
                classes={state.AVAIVABLE_CLASSES}
                value={state.INSERT_CLASS}
                onChange={(value) => {
                  dispatch({
                    type: ACTIONS.BIBER_UPDATE_UI,
                    payload: {
                      ENABLE_CLASS_SUBMIT_BUTTON: value !== "" ? true : false,
                    },
                  });
                  dispatch({
                    type: ACTIONS.BIBER_STORE_DATA,
                    payload: {
                      INSERT_CLASS: value,
                    },
                  });
                }}
                onConfirm={handleClassConfirm}
                state={state}
              />
            )}
          </div>

          <div className="col col-12 col-md-6">
            {state.UI.SHOW_STUDENT_AREA && (
              <UserSelect
                users={usersForSelectedClass}
                value={state.INSERT_USER}
                onChange={(value) => {
                  dispatch({
                    type: ACTIONS.BIBER_UPDATE_UI,
                    payload: {
                      ENABLE_STUDENT_SUBMIT_BUTTON: value !== "" ? true : false,
                    },
                  });
                  dispatch({
                    type: ACTIONS.BIBER_STORE_DATA,
                    payload: {
                      INSERT_USER: value,
                    },
                  });
                }}
                onConfirm={handleStudentConfirm}
                state={state}
              />
            )}
          </div>
        </div>
      </div>

      {state.UI.SHOW_BIRTHDAY_AREA && (
        <>
          <hr />
          <BirthdayForm
            birthday={state.INSERT_BIRTHDAY}
            setBirthday={(value) => {
              dispatch({
                type: ACTIONS.BIBER_STORE_DATA,
                payload: {
                  INSERT_BIRTHDAY: value,
                },
              });
              dispatch({
                type: ACTIONS.BIBER_UPDATE_UI,
                payload: {
                  ENABLE_BIRTHDAY_SUBMIT_BUTTON:
                    value.DAY !== "" && value.MONTH !== "" && value.YEAR !== ""
                      ? true
                      : false,
                },
              });
            }}
            onConfirm={handleBirthdaySubmit}
            error={state.ERRORS.BIRTHDAY}
            state={state}
          />
        </>
      )}

      {state.UI.SHOW_CREDENTIALS_AREA && (
        <>
          <hr />
          <CredentialsView
            credentials={state.CREDENTIALS}
            onCopyUsername={handleCopyUsername}
            onCopyPassword={handleCopyPassword}
          />
          <div className="d-grid gap-2">
            <a
              className="btn btn-success mt-1 mb-1"
              role="button"
              href="https://wettbewerb.informatik-biber.de/index.php?action=login"
              target="_blank"
            >
              Zum Informatikbiber! 🚀
            </a>
          </div>
        </>
      )}

      {state.API_KEY?.SUCCESS && (
        <>
          <hr />
          <button
            className="btn btn-danger mt-1"
            type="button"
            onClick={handleHardReload}
          >
            Neu Beginnen!
          </button>
        </>
      )}
    </>
  );
};

export default Biber2025;
