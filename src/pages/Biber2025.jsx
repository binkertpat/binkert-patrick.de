import { useEffect, useState } from "react";
import CopyPasteSVG from "../components/SunSVG copy";
import Spinner from "../components/Spinner";

const Biber2025 = () => {
  // TODO: add error messages
  // TODO: add copy to clipboard button
  // TODO: add link to biber site
  // TODO: add typing or padding to birthday

  const DAYS = []
  for (let i = 1; i <= 31; i++) DAYS.push(i)
  const MONTHS = []
  for (let i = 1; i <= 12; i++) MONTHS.push(i)
  const MONTHS_NAMING = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ]
  const YEARS = []
  for (let i = 2000; i <= 2025; i++) YEARS.push(i)

  const API_VALIDATION_ENDPOINT =
    "https://binkert-patrick.de/api/biber2025Validate.php";
  const API_DATA_ENDPOINT = "https://binkert-patrick.de/api/biber2025.php";
  const [apiKey, setApiKey] = useState("");

  const [apiQueryIsRunning, setApiQueryIsRunning] = useState(false);
  const [entryCodeError, setEntryCodeError] = useState(false)
  const [birthdayInputError, setBirthdayErrorInput] = useState('')

  const [insertPassword, setInsertPassword] = useState("");
  const [insertClass, setInsertClass] = useState("");
  const [insertUser, setInsertUser] = useState("");
  const [insertBirthday, setInsertBirthday] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [classAreaVisible, setClassAreaVisible] = useState(false);
  const [studentAreaVisible, setStudentAreaVisible] = useState(false);
  const [birthDayAreaVisible, setBirthDayAreaVisible] = useState(false);
  const [credentialsVisible, setCredentialsVisible] = useState(false);

  const [avaiableClasses, setAvaiableClasses] = useState([]);
  const [avaiableUsers, setAvaiableUsers] = useState([]);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handlePasswordSubmit = () => {
    setApiQueryIsRunning(true);
    if (insertPassword != "") {
      requestApiKey(insertPassword);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (apiKey.success) {
        console.info('Zugang gewährt. API-Key erhalten. Lade Daten im Hintergrund.')
        await fetchHelper("class");
        await fetchHelper("user");
      }
    }
    fetchData();
  }, [apiKey]);

  useEffect(() => {
    if (avaiableClasses.length > 0) {
      setClassAreaVisible(true);
      setApiQueryIsRunning(false)
      setEntryCodeError(false)
    }
  }, [avaiableClasses]);

  const handleClassSubmit = () => {
    if (insertClass !== "") {
      console.info('Klasse wurde erfolgreich ausgewählt: ' + insertClass)
      setStudentAreaVisible(true);
    }
  };

  const handleStudentSubmit = () => {
    if (insertUser !== "") {
      console.info('Nutzer wurde erfolgreich ausgewählt. Der Nutzername ist: ' + insertUser)
      setBirthDayAreaVisible(true);
    }
  };

  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  const handleBirthdaySubmit = async () => {
    if (
      insertBirthday.day != "" &&
      insertBirthday.month != "" &&
      insertBirthday.year != ""
    ) {
      console.info('Ein vollständiges Geburtsdatum wurde übergeben.')
      let userData = avaiableUsers[insertClass].find(
        (user) => user.USERNAME === insertUser,
      );
      const combinedInsertBirthday = insertBirthday.day + '.' + insertBirthday.month + '.' + insertBirthday.year
      const combinedInsertBirthdayHashed = await sha256(combinedInsertBirthday)
      console.info('Das Geburtsdatum wurde vor dem Überprüfen gehashed.')
      if (userData.DATE_OF_BIRTH == combinedInsertBirthdayHashed) {
        console.info('Die gehashte Eingabe stimmt mit dem gespeicherten Hash überein. Nutzer erfolgreich validiert. Zeige Credentials.')
        setCredentials({
          username: userData.USERNAME,
          password: userData.PASSWORD,
        });
        setBirthdayErrorInput('')
        setCredentialsVisible(true);
      } else {
        setCredentialsVisible(false)
        setBirthdayErrorInput('Passwort und Benutzer stimmen nicht überein. Korrigiere deine Eingabe oder wende dich an: it@cottagym.lernsax.de')
        console.error('Passwort und Benutzer stimmen nicht überein. Korrigiere deine Eingabe oder wende dich an it@cottagym.lernsax.de.')
      }
    } else {
      setCredentialsVisible(false)
      setBirthdayErrorInput('Das eingebene Geburtsdatum ist unvollständig.')
      console.error('Das eingebene Geburtsdatum ist unvollständig.')
    }
  };

  const insertPasswordUpdate = async (value) => {
    setInsertPassword(value);
  };

  const fetchHelper = async (type) => {
    const REQUEST_HEADER = new Headers();
    REQUEST_HEADER.append("Content-Type", "application/x-www-form-urlencoded");

    const URL_ENCODED = new URLSearchParams();
    URL_ENCODED.append("apiKey", apiKey.apiKey);
    URL_ENCODED.append("requested_file", type);

    const REQUEST_OPTIONS = {
      method: "POST",
      headers: REQUEST_HEADER,
      body: URL_ENCODED,
      redirect: "follow",
    };

    if (type == "user" && avaiableUsers.length == 0) {
      fetch(API_DATA_ENDPOINT, REQUEST_OPTIONS)
        .then((response) => response.json())
        .then((result) => setAvaiableUsers(result))
        .catch(() => setEntryCodeError(true));
    } else if (type == "class" && avaiableClasses.length == 0) {
      fetch(API_DATA_ENDPOINT, REQUEST_OPTIONS)
        .then((response) => response.json())
        .then((result) => setAvaiableClasses(result))
        .catch(() => setEntryCodeError(true));
    }
  };

  useEffect(() => {
    setApiQueryIsRunning(false)
  }, [entryCodeError])

  const requestApiKey = async (insertPassword) => {
    const formdata = new FormData();
    formdata.append("password", insertPassword);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(API_VALIDATION_ENDPOINT, requestOptions)
      .then((response) => response.text())
      .then((result) => setApiKey(JSON.parse(result)))
      .catch(() => setEntryCodeError(true));
  };

  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3">Informatikbiber@BvC 2025</h1>

      <div className="mb-3">
        <label
          htmlFor="passwordInput"
          className="form-label fw-bold"
          aria-label="Gib den Zugangscode ein, welches dir durch deinen Info- oder Mathelehrer mitgeteilt wurde."
        >
          Gib den Zugangscode ein, welches dir durch deinen Info- oder Mathelehrer
          mitgeteilt wurde.
        </label>
        <input
          type="text"
          className="form-control"
          id="passwordInput"
          placeholder="Zugangscode ..."
          value={insertPassword}
          onChange={(e) => insertPasswordUpdate(e.target.value)}
          autoComplete="off"
        />
        <button
          className="btn btn-success mt-3"
          type="button"
          id="submit_password_input"
          onClick={handlePasswordSubmit}
        >
          Auswahl bestätigen
        </button>
        {entryCodeError &&
          <div className="alert alert-danger mt-3" role="alert">
            Der Zugangscode scheint falsch zu sein. Versuche es erneut. Lade ggf. die Seite neu.
          </div>
        }
      </div>

      {apiQueryIsRunning && (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      )}

      {((classAreaVisible && avaiableClasses.length > 0) || studentAreaVisible) && <hr />}

      <div className="container p-0">
        <div className="row">
          <div className="col col-12 col-md-6">
            {classAreaVisible && avaiableClasses.length > 0 && (
              <>
                <div className="mb-3">
                  <label htmlFor="classInput" className="form-label fw-bold">
                    Wähle deine Klasse aus.
                  </label>
                  <select
                    className="form-select"
                    id="classInput"
                    aria-label="Bitte wähle deine Klasse aus."
                    value={insertClass}
                    onChange={(e) => setInsertClass(e.target.value)}
                  >
                    <option value="">Klasse auswählen</option>
                    {avaiableClasses.map((avaiableClass, index) => (
                      <option key={index} value={avaiableClass}>
                        {avaiableClass}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-success mt-3"
                    type="button"
                    onClick={handleClassSubmit}
                  >
                    Auswahl bestätigen
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="col col-12 col-md-6">
            {studentAreaVisible && (
              <>
                <div className="mb-3">
                  <label htmlFor="userInput" className="form-label fw-bold">
                    Wähle dich selsbt aus!
                  </label>
                  <select
                    className="form-select"
                    id="userInput"
                    aria-label="Wähle dich aus."
                    value={insertUser}
                    onChange={(e) => setInsertUser(e.target.value)}
                  >
                    <option value="">Schüler / Schülerin auswählen</option>
                    {avaiableUsers[insertClass].map((avaiableUser, index) => (
                      <option key={index} value={avaiableUser.USERNAME}>
                        {avaiableUser.PRENAME} {avaiableUser.LASTNAME}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-success mt-3"
                    type="button"
                    onClick={handleStudentSubmit}
                  >
                    Auswahl bestätigen
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {birthDayAreaVisible && (
        <>
          {" "}
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
              <select
                className="form-select"
                id="birthdayDayInput"
                aria-label="Wähle den Tag deines Geburtstages aus."
                value={insertBirthday.day}
                onChange={(e) => setInsertBirthday({ ...insertBirthday, day: e.target.value })}
              >
                <option value="">Tag auswählen</option>
                {Array.from(DAYS).map((day, index) => (
                  <option key={index} value={String(day).padStart(2, '0')}>
                    {String(day).padStart(2, '0')}
                  </option>
                ))}
              </select>


              <select
                className="form-select me-3 ms-3"
                id="birthdayMonthInput"
                aria-label="Wähle den Monat deines Geburtstages aus."
                value={insertBirthday.month}
                onChange={(e) => setInsertBirthday({ ...insertBirthday, month: e.target.value })}
              >
                <option value="">Monat auswählen</option>
                {Array.from(MONTHS).map((month, index) => (
                  <option key={index} value={String(month).padStart(2, '0')}>
                    {MONTHS_NAMING[month - 1]}
                  </option>
                ))}
              </select>

              <select
                className="form-select"
                id="birthdayYearInput"
                aria-label="Wähle das Jahr deines Geburtstages aus."
                value={insertBirthday.year}
                onChange={(e) =>
                  setInsertBirthday({ ...insertBirthday, year: e.target.value })
                }
              >
                <option value="">Jahr auswählen</option>
                {Array.from(YEARS).map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="btn btn-success mt-3"
              type="button"
              onClick={handleBirthdaySubmit}
            >
              Auswahl bestätigen
            </button>
            {birthdayInputError != '' &&
              <div className="alert alert-danger mt-3" role="alert">
                {birthdayInputError}
              </div>
            }
          </div>
        </>
      )}

      {credentialsVisible && (
        <>
          {" "}
          <hr />
          <div className="mb-3 fw-bold">
            <p className="fw-bold">
              Geschafft! Hier sind deine Zugangsdaten! 🥳
            </p>
            <div className="row">
              <div className="col">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control shadow-none fs-5 text-center"
                    placeholder="Nutzername"
                    aria-label="Nutzername"
                    aria-describedby="addon-wrapping"
                    id="explicit_credentials_holder_username"
                    readOnly=""
                    defaultValue={credentials.username}
                  />
                  <CopyPasteSVG />
                </div>
              </div>
              <div className="col">
                <div className="input-group flex-nowrap">
                  <input
                    type="text"
                    className="form-control shadow-none fs-5 text-center"
                    placeholder="Passwort"
                    aria-label="Passwort"
                    aria-describedby="addon-wrapping"
                    id="explicit_credentials_holder_password"
                    readOnly=""
                    defaultValue={credentials.password}
                  />
                  <CopyPasteSVG />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Biber2025;
