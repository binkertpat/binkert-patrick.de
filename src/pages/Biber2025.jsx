import CopyPasteSVG from "../components/SunSVG copy";

/* eslint-disable react-hooks/exhaustive-deps */
const Biber2025 = () => {
  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3">Informatikbiber@BvC 2025</h1>

      <div className="mb-3">
        <label
          htmlFor="passwordInput"
          className="form-label fw-bold"
          aria-label="Gib das Passwort ein, welches dir durch deinen Info- oder Mathelehrer mitgeteilt wurde."
        >
          Gib das Passwort ein, welches dir durch deinen Info- oder Mathelehrer
          mitgeteilt wurde.
        </label>
        <input
          type="password"
          className="form-control fs-5"
          id="passwordInput"
          placeholder="Passwort ..."
        />
        <button className="btn btn-success mt-3" type="button">
          Auswahl bestätigen
        </button>
      </div>

      <hr />

      <div className="mb-3">
        <label htmlFor="classInput" className="form-label fw-bold">
          Wähle deine Klasse aus.
        </label>
        <select
          className="form-select fs-5"
          id="classInput"
          aria-label="Bitte wähle deine Klasse aus."
        >
          <option selected>Klasse auswählen</option>
          <option value="1">7a</option>
          <option value="2">7b</option>
          <option value="3">7c</option>
        </select>
        <button className="btn btn-success mt-3" type="button">
          Auswahl bestätigen
        </button>
      </div>

      <hr />

      <div className="mb-3">
        <label htmlFor="userInput" className="form-label fw-bold">
          Wähle den richtigen Schüler aus als dich selbst!
        </label>
        <select
          className="form-select fs-5"
          id="userInput"
          aria-label="Wähle dich aus."
        >
          <option selected>Schüler / Schülerin auswählen</option>
          <option value="1">Maxi Mustermann</option>
          <option value="2">Zax Zustermann</option>
        </select>
        <button className="btn btn-success mt-3" type="button">
          Auswahl bestätigen
        </button>
      </div>

      <hr />

      <div className="mb-3">
        <label
          htmlFor="dateOfBirthInput"
          className="form-label fw-bold"
          aria-label="Gib dein Geburtsdatum ein."
        >
          Gib dein Geburtsdatum ein.
        </label>
        <div className="d-flex flex-row text-center" id="dateOfBirthInput">
          <input
            type="number"
            className="form-control me-1 text-center fs-5"
            placeholder="TT"
          />
          <input
            type="number"
            className="form-control text-center fs-5"
            placeholder="MM"
          />
          <input
            type="number"
            className="form-control ms-1 text-center fs-5"
            placeholder="JJJJ"
          />
        </div>
        <button className="btn btn-success mt-3" type="button">
          Auswahl bestätigen
        </button>
      </div>

      <hr />

      <div className="mb-3 fw-bold">
        <p className="fw-bold">Geschafft! Hier sind deine Zugangsdaten! 🥳</p>
        <div className="row">
          <div className="col">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control shadow-none fs-5"
                placeholder="Nutzername"
                aria-label="Nutzername"
                aria-describedby="addon-wrapping"
                id="explicit_credentials_holder_username"
                readOnly=""
              />
              <CopyPasteSVG />
            </div>
          </div>
          <div className="col">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control shadow-none fs-5"
                placeholder="Passwort"
                aria-label="Passwort"
                aria-describedby="addon-wrapping"
                id="explicit_credentials_holder_password"
                readOnly=""
              />
              <CopyPasteSVG />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Biber2025;
