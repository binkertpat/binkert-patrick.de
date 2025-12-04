import PropTypes from "prop-types";
import { usePhysikQuiztimeContext } from "../../hooks/usePhysikQuiztimeContext";
import { useEffect } from "react";
import { QUIZTIME_ACTIONS } from "../constants/enums";

const Quiz = () => {
  const { state, dispatch } = usePhysikQuiztimeContext();

  useEffect(() => {
    dispatch({ type: QUIZTIME_ACTIONS.SET_DEFAULT_STATE });
    console.dir(state);
  }, [dispatch, state]);

  const FULLSCREEN_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 9999,
    overflow: "auto",
    padding: "20px",
    backgroundColor: "var(--bs-body-bg)",
  };

  return (
    <div style={FULLSCREEN_STYLE}>
      <h1 className="display-5 fw-bold lh-1 mb-4 text-center">
        {state.SETUP.NAMES.GROUP_A} <br />
        {state.SETUP.NAMES.GROUP_B} <br />
        {state.SETUP.NAMES.GROUP_C} <br />
        {state.SETUP.NAMES.GROUP_D} <br />
      </h1>
      <p>Zeige Frage</p>
      <p>zeige Lösung</p>
      <p>nächste Frage</p>
      <p>Points to A</p>
      <p>Points to B</p>
      <p>Points to C</p>
      <p>Points to D</p>
      <p>Leaderboard</p>
      <p>DATA</p>
    </div>
  );
};

export default Quiz;

Quiz.propTypes = {
  searchParams: PropTypes.object,
};
