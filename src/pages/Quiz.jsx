import PropTypes from "prop-types";
import { usePhysikQuiztimeContext } from "../../hooks/usePhysikQuiztimeContext";
import { useEffect } from "react";
import { QUIZTIME_ACTIONS } from "../constants/enums";

const Quiz = () => {
  const { state, dispatch } = usePhysikQuiztimeContext();

  const handlePhysicsQuestionClick = (e) => {
    const QUESTION_INDEX = e.target.getAttribute("data-question-index");
    dispatch({ TYPE: QUIZTIME_ACTIONS.PLAY_PHYSICS_QUESTION, PAYLOAD: QUESTION_INDEX });
  }

  const handleResetState = () => {
    dispatch({
      TYPE: QUIZTIME_ACTIONS.RESET_STATE,
    });
  }

  useEffect(() => {
    dispatch({ TYPE: QUIZTIME_ACTIONS.INIT_STATE_FROM_DISK });
    console.dir(state);
  }, []);

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
      <div className="scoreboard">
        <div className="cat-phy">
          <h1 className="cat-phy-heading">PHYSIK</h1>
          {state.QUESTIONS.PHY.map((QUESTION, INDEX) => {
            return (
              <button
                key={INDEX}
                data-question-index={INDEX}
                style={{ backgroundColor: state.BUTTON_COLORS[QUESTION.POINTS] }}
                disabled={!QUESTION.ACTIVE}
                data-active={QUESTION.ACTIVE}
                type="button"
                className="btn btn-primary"
                onClick={handlePhysicsQuestionClick}
              >
                {QUESTION.POINTS}
              </button>
            )
          })}
        </div>
        <div className="cat-life">
          <h1 className="cat-life-heading">DAS LEBEN</h1>
        </div>
        <div className="cat-mr-b">
          <h1 className="cat-mr-b-heading">MR. B</h1>
        </div>
        <div className="scoring">
          <h1>{state.SETUP.NAMES.GROUP_A}</h1>
          <h1>{state.SETUP.NAMES.GROUP_B}</h1>
          <h1>{state.SETUP.NAMES.GROUP_C}</h1>
          <h1>{state.SETUP.NAMES.GROUP_D}</h1>
        </div>
        <div className="controls">
          {state.RUNTIME.ACTUAL_QUESTION && (
            <>
              <h1>{state.RUNTIME.ACTUAL_QUESTION.QUESTION}</h1>
              <div className="btn btn-primary" onClick={handleResetState}>TEST</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

Quiz.propTypes = {
  searchParams: PropTypes.object,
};
