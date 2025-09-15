import PropTypes from "prop-types";
import { DAYS, MONTHS, MONTHS_NAMING, YEARS } from "../../constants/DateUtils";

const BirthdayForm = ({ birthday, setBirthday, onConfirm, error }) => (
  <div className="mb-3">
    <label htmlFor="dateOfBirthInput" className="form-label fw-bold">
      Gib dein Geburtsdatum ein.
    </label>
    <div className="d-flex flex-row text-center" id="dateOfBirthInput">
      <select
        className="form-select"
        value={birthday.DAY}
        onChange={(e) => setBirthday({ ...birthday, DAY: e.target.value })}
      >
        <option value="">Tag auswählen</option>
        {DAYS.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        className="form-select me-3 ms-3"
        value={birthday.MONTH}
        onChange={(e) => setBirthday({ ...birthday, MONTH: e.target.value })}
      >
        <option value="">Monat auswählen</option>
        {MONTHS.map((m, i) => (
          <option key={m} value={m}>
            {MONTHS_NAMING[i]}
          </option>
        ))}
      </select>

      <select
        className="form-select"
        value={birthday.YEAR}
        onChange={(e) => setBirthday({ ...birthday, YEAR: e.target.value })}
      >
        <option value="">Jahr auswählen</option>
        {YEARS.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>

    <button className="btn btn-success mt-3" type="button" onClick={onConfirm}>
      Auswahl bestätigen
    </button>

    {error && (
      <div className="alert alert-danger mt-3" role="alert">
        {error}
      </div>
    )}
  </div>
);

BirthdayForm.propTypes = {
  birthday: PropTypes.object.isRequired,
  setBirthday: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default BirthdayForm;
