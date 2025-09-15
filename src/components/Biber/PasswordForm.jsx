import PropTypes from "prop-types";

const PasswordForm = ({ state, onInsertPassword, onPasswordSubmit }) => (
    <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label fw-bold">
            Gib den Zugangscode ein, welcher dir durch deinen Info- oder
            Mathelehrer mitgeteilt wurde.
        </label>
        <input
            type={!state.UI.HIDE_PASSWORD_SUBMIT_BUTTON ? 'text' : 'password'}
            className="form-control"
            id="passwordInput"
            placeholder="Zugangscode ..."
            value={state.INSERT_PASSWORD}
            onChange={(e) => onInsertPassword(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") onPasswordSubmit();
            }}
            autoComplete="off"
            readOnly={!state.UI.HIDE_PASSWORD_SUBMIT_BUTTON ? '' : 'readonly'}
        />
        {!state.UI.HIDE_PASSWORD_SUBMIT_BUTTON &&
            <button
                className="btn btn-success mt-3"
                type="button"
                id="submit_password_input"
                disabled={state.UI.ENABLE_PASSWORD_SUBMIT_BUTTON ? '' : 'disabled'}
                onClick={onPasswordSubmit}
            >
                Auswahl bestätigen
            </button>
        }

        {state.ERRORS.ENTRY_CODE && (
            <div className="alert alert-danger mt-3" role="alert">
                Der Zugangscode scheint falsch zu sein. Versuche es erneut. Lade
                ggf. die Seite neu.
            </div>
        )}
    </div>
);

PasswordForm.propTypes = {
    state: PropTypes.object.isRequired,
    onInsertPassword: PropTypes.func.isRequired,
    onPasswordSubmit: PropTypes.func.isRequired,
};

export default PasswordForm;
