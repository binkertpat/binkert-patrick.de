import PropTypes from "prop-types";

const UserSelect = ({ users = [], value, onChange, onConfirm, state = {} }) => (
  <div className="mb-3">
    <label htmlFor="userInput" className="form-label fw-bold">
      Wähle dich selbst aus!
    </label>
    <select
      className="form-select"
      id="userInput"
      aria-label="Wähle dich aus."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={!state.UI.HIDE_STUDENT_SUBMIT_BUTTON ? '' : 'disabled'}
    >
      <option value="">Schüler / Schülerin auswählen</option>
      {users.map((u) => (
        <option key={u.USERNAME} value={u.USERNAME}>
          {u.PRENAME} {u.LASTNAME}
        </option>
      ))}
    </select>
    {!state.UI.HIDE_STUDENT_SUBMIT_BUTTON &&
      <button className="btn btn-success mt-3" type="button" onClick={onConfirm} disabled={state.UI.ENABLE_STUDENT_SUBMIT_BUTTON ? '' : 'disabled'}>
        Auswahl bestätigen
      </button>
    }
  </div>
);

UserSelect.propTypes = {
  users: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default UserSelect;
