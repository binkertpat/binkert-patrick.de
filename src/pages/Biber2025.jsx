import { useEffect, useState } from "react";
import CopyPasteSVG from "../components/SunSVG copy";

const Biber2025 = () => {
  // TODO: add error messages
  // TODO: add copy to clipboard button
  // TODO: add link to biber site
  // TODO: add typing or padding to birthday

  const GIVEN_PASSWORD_HASH = "n2bHazHjPp0MG4aACY5DssoJKi8NzYbYF4ofGpOVdd0=";
  const [passwordHash, setPasswordHash] = useState("");
  
  const [insertPassword, setInsertPassword] = useState("");
  const [insertClass, setInsertClass] = useState("");
  const [insertUser, setInsertUser] = useState("");
  const [insertBirthday, setInsertBirthday] = useState({ day: "", month: "", year: "" });

  const [classAreaVisible, setClassAreaVisible] = useState(false);
  const [studentAreaVisible, setStudentAreaVisible] = useState(false);
  const [birthDayAreaVisible, setBirthDayAreaVisible] = useState(false);
  const [credentialsVisible, setCredentialsVisible] = useState(false);

  const [avaiableClasses, setAvaiableClasses] = useState([]);
  const [avaiableUsers, setAvaiableUsers] = useState([]);

  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handlePasswordSubmit = () => {
    if (passwordHash === GIVEN_PASSWORD_HASH) {
      setClassAreaVisible(true);
    } else {
      alert("Falsches Passwort! Bitte versuche es erneut.");
    }
  }

  const handleClassSubmit = () => {
    if (insertClass !== "") {
      setStudentAreaVisible(true);
    }
  }

  const handleStudentSubmit = () => {
    if (insertUser !== "") {
      setBirthDayAreaVisible(true);
    }
  }

  const handleBirthdaySubmit = () => {
    if (insertBirthday.day != "" && insertBirthday.month != "" && insertBirthday.year != "") {
        let userData = avaiableUsers[insertClass].find((user) => user.USERNAME === insertUser)
        if (userData.DATE_OF_BIRTH_DAY == insertBirthday.day && userData.DATE_OF_BIRTH_MONTH == insertBirthday.month && userData.DATE_OF_BIRTH_YEAR == insertBirthday.year) {
          setCredentials({ username: userData.USERNAME, password: userData.PASSWORD });
          setCredentialsVisible(true)
        }
    }
  }

  async function sha256Base64(value) {
    const data = new TextEncoder().encode(value);
    const buf = await crypto.subtle.digest("SHA-256", data);
    const bytes = new Uint8Array(buf);
    let bin = "";
    for (let b of bytes) bin += String.fromCharCode(b);
    return btoa(bin);
  }

  const insertPasswordUpdate = async (value) => {
    setPasswordHash(await sha256Base64(value));
    setInsertPassword(value);
  }

  const fetchHelper = (type) => {
    const REQUEST_HEADER = new Headers();
    REQUEST_HEADER.append("Content-Type", "application/x-www-form-urlencoded");

    const URL_ENCODED = new URLSearchParams();
    URL_ENCODED.append("password", "ksr@MA@4dVa2ksr@MA@4dVa2");
    URL_ENCODED.append("requested_file", type);

    const API_ENDPOINT = "https://binkert-patrick.de/api/biber2025.php";

    const REQUEST_OPTIONS = {
      method: "POST",
      headers: REQUEST_HEADER,
      body: URL_ENCODED,
      redirect: "follow"
    };

    if (type == 'user' && avaiableUsers.length == 0) {
      fetch(API_ENDPOINT, REQUEST_OPTIONS)
        .then((response) => response.json())
        .then((result) => setAvaiableUsers(result))
        .catch((error) => console.error(error));
    } else if (type == 'class' && avaiableClasses.length == 0) {
      fetch(API_ENDPOINT, REQUEST_OPTIONS)
        .then((response) => response.json())
        .then((result) => setAvaiableClasses(result))
        .catch((error) => console.error(error));
    }
  }

  useEffect(() => {
    fetchHelper('user');
  }, []);

  useEffect(() => {
    fetchHelper('class');
  }, []);

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
          type="text"
          className="form-control"
          id="passwordInput"
          placeholder="Passwort ..."
          value={insertPassword}
          onChange={(e) => insertPasswordUpdate(e.target.value)}
        />
        <button className="btn btn-success mt-3" type="button" id="submit_password_input" onClick={handlePasswordSubmit}>
          Auswahl bestätigen
        </button>
      </div>

      {classAreaVisible && <> <hr />
        <div className="mb-3">
          <label htmlFor="classInput" className="form-label fw-bold">
            Wähle deine Klasse aus.
          </label>
          <select
            className="form-select"
            id="classInput"
            aria-label="Bitte wähle deine Klasse aus."
            value={insertClass}
            defaultValue=""
            onChange={(e) => setInsertClass(e.target.value)}
          >
            <option value="">Klasse auswählen</option>
            {avaiableClasses.map((avaiableClass, index) => (
              <option key={index} value={avaiableClass}>{avaiableClass}</option>
            ))}
          </select>
          <button className="btn btn-success mt-3" type="button" onClick={handleClassSubmit}>
            Auswahl bestätigen
          </button>
        </div>
      </>
      }

      {studentAreaVisible && <> <hr />
        <div className="mb-3">
          <label htmlFor="userInput" className="form-label fw-bold">
            Wähle den richtigen Schüler aus als dich selbst!
          </label>
          <select
            className="form-select"
            id="userInput"
            aria-label="Wähle dich aus."
            value={insertUser}
            onChange={(e) => setInsertUser(e.target.value)}
          >
            <option value="" selected>Schüler / Schülerin auswählen</option>
            {avaiableUsers[insertClass].map((avaiableUser, index) => (
              <option key={index} value={avaiableUser.USERNAME}>{avaiableUser.LASTNAME}, {avaiableUser.PRENAME}</option>
            ))}
          </select>
          <button className="btn btn-success mt-3" type="button" onClick={handleStudentSubmit}>
            Auswahl bestätigen
          </button>
        </div>
      </>
      }

      {birthDayAreaVisible && <> <hr />
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
              className="form-control me-1 text-center"
              placeholder="TT"
              value={insertBirthday.day}
              onChange={(e) => setInsertBirthday({ ...insertBirthday, day: e.target.value })}
            />
            <input
              type="number"
              className="form-control text-center"
              placeholder="MM"
              value={insertBirthday.month}
              onChange={(e) => setInsertBirthday({ ...insertBirthday, month: e.target.value })}
            />
            <input
              type="number"
              className="form-control ms-1 text-center"
              placeholder="JJJJ"
              value={insertBirthday.year}
              onChange={(e) => setInsertBirthday({ ...insertBirthday, year: e.target.value })}
            />
          </div>
          <button className="btn btn-success mt-3" type="button" onClick={handleBirthdaySubmit}>
            Auswahl bestätigen
          </button>
        </div>
      </>
      }

      {credentialsVisible && <> <hr />
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
        </div></>
      }
    </>
  );
};

export default Biber2025;
