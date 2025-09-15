import PropTypes from "prop-types";

const UserSelect = ({ users = [], value, onChange, onConfirm }) => (
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
    >
      <option value="">Schüler / Schülerin auswählen</option>
      {users.map((u) => (
        <option key={u.USERNAME} value={u.USERNAME}>
          {u.PRENAME} {u.LASTNAME}
        </option>
      ))}
    </select>
    <button className="btn btn-success mt-3" type="button" onClick={onConfirm}>
      Auswahl bestätigen
    </button>
  </div>
);

UserSelect.propTypes = {
  users: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default UserSelect;
