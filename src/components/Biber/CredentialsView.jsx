import PropTypes from "prop-types";
import CopyPasteSVG from "../CopyPasteSVG";

const CredentialsView = ({ credentials, onCopyUsername, onCopyPassword }) => (
  <div className="mb-3 fw-bold">
    <p className="fw-bold">Geschafft! Hier sind deine Zugangsdaten! 🥳</p>
    <div className="row">
      <div className="col">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control shadow-none fs-5 text-center"
            placeholder="Nutzername"
            aria-label="Nutzername"
            id="explicit_credentials_holder_username"
            readOnly
            value={credentials.USERNAME}
          />
          <CopyPasteSVG onClick={() => onCopyUsername(credentials.USERNAME)} />
        </div>
      </div>
      <div className="col">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control shadow-none fs-5 text-center"
            placeholder="Passwort"
            aria-label="Passwort"
            id="explicit_credentials_holder_password"
            readOnly
            value={credentials.PASSWORD}
          />
          <CopyPasteSVG onClick={() => onCopyPassword(credentials.PASSWORD)} />
        </div>
      </div>
    </div>
  </div>
);

CredentialsView.propTypes = {
  credentials: PropTypes.object.isRequired,
  onCopyUsername: PropTypes.func.isRequired,
  onCopyPassword: PropTypes.func.isRequired,
};

export default CredentialsView;
