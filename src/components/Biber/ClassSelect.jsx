import PropTypes from "prop-types";

const ClassSelect = ({ classes, value, onChange, onConfirm, state = {} }) => (
  <div className="mb-3">
    <label htmlFor="classInput" className="form-label fw-bold">
      Wähle deine Klasse aus.
    </label>
    <select
      className="form-select"
      id="classInput"
      aria-label="Bitte wähle deine Klasse aus."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={!state.UI.HIDE_CLASS_SUBMIT_BUTTON ? "" : "disabled"}
    >
      <option value="">Klasse auswählen</option>
      {classes.map((c, i) => (
        <option key={i} value={c}>
          {c}
        </option>
      ))}
    </select>
    {!state.UI.HIDE_CLASS_SUBMIT_BUTTON && (
      <button
        className="btn btn-success mt-3"
        type="button"
        onClick={onConfirm}
        disabled={state.UI.ENABLE_CLASS_SUBMIT_BUTTON ? "" : "disabled"}
      >
        Auswahl bestätigen
      </button>
    )}
  </div>
);

ClassSelect.propTypes = {
  classes: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default ClassSelect;
