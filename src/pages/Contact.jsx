import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [isBot, setIsBot] = useState("");
  const [searchParams, _] = useSearchParams();
  const [firstname, setFirstName] = useState(
    searchParams.get("firstname") ?? "",
  );
  const [lastname, setLastName] = useState(searchParams.get("lastname") ?? "");
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [reference, setReference] = useState(
    searchParams.get("reference") ?? "",
  );
  const [issue, setIssue] = useState(searchParams.get("issue") ?? "");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleReferenceChange(e) {
    setReference(e.target.value);
  }

  function handleIssueChange(e) {
    setIssue(e.target.value);
  }

  const handleBotCheck = () => {
    setIsBot("/contact_form.php");
  };

  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3">Kontaktformular</h1>
      <form
        className="row g-3"
        method="POST"
        action={isBot}
        onMouseMove={handleBotCheck}
      >
        <div className="col-md-6">
          <label htmlFor="firstname" className="form-label fw-bold">
            Vorname
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            placeholder="Max"
            value={firstname}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastname" className="form-label fw-bold">
            Nachname
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            placeholder="Mustermann"
            value={lastname}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label fw-bold">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="ntuzer@beispiel.de"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="reference" className="form-label fw-bold">
            Betreff
          </label>
          <input
            type="text"
            className="form-control"
            id="reference"
            name="reference"
            placeholder="Betreff ..."
            value={reference}
            onChange={handleReferenceChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="issue" className="form-label fw-bold">
            Dein Anliegen
          </label>
          <textarea
            className="form-control"
            id="issue"
            name="issue"
            rows="10"
            placeholder="Sehr geehrter Herr Binkert, ..."
            value={issue}
            onChange={handleIssueChange}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Abschicken
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
