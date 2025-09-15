import IT_TOOLS_STOCK from "../img/it_tools_stock.png";
import BOOK_IMAGE from "../img/book_image.png";
import BIBER_2025 from "../img/biber_am_bvc_2025.png";

const LandingPage = () => {
  return (
    <>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={IT_TOOLS_STOCK}
            className="d-block mx-lg-auto img-fluid"
            alt="Tools und Apps"
            title="Tools und Apps"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">Tools und Apps</h2>
          <p className="lead">
            Die verlinkten Seiten enthalten eine Vielzahl von Links zu
            verschiedenen Tools und Anwendungen, die speziell für den Einsatz im
            Unterricht konzipiert sind. Einige dieser Tools sind selbst
            gehostet, das heißt, sie werden auf meinem eigenen Servern
            betrieben, während andere extern über das Internet zugänglich sind.
            Keines dieser Tools ist kostenpflichtig oder sammelt unnötige
            personenbezogene Daten!
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="/self-hosted-tools">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                self-hosted Tools
              </button>
            </a>
            <a href="/external-tools">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                externe Tools
              </button>
            </a>
            {/* <a href="/external-programs">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Programme
              </button>
            </a> */}
          </div>
        </div>
      </div>

      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={BIBER_2025}
            className="d-block mx-lg-auto img-fluid"
            alt="Tools und Apps"
            title="Tools und Apps"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">
            Informatikbiber@BvC 2025
          </h2>
          <span className="badge bg-success mb-3">Wettbewerb</span>
          <p className="lead">
            Auf der nachfolgenden Seite könnt ihr euch eure Zugangsdaten für
            Informatikbiber zusammen klicken. Das Passwort wird euch im
            Unterricht mitgeteilt. Viel Erfolg!
            <br />
            <br />
            Nach dem Wettbewerb könnt ihr mit diesem Zugang eure Ergebnisse auf
            der Seite einsehen und die Aufgaben noch einmal durchgehen.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://biber.binkert-patrick.de/">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                zu den Zugangsdaten
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={BOOK_IMAGE}
            className="d-block mx-lg-auto img-fluid"
            alt="Tools und Apps"
            title="Tools und Apps"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">Schulbuch</h2>
          <span className="badge bg-danger mb-3 me-2">work in progress</span>
          <span className="badge bg-success mb-3">take a look</span>
          <p className="lead">
            Das Schulbuch wird sich kontinuierlich weiterentwickeln - sei es in
            den kommenden Tagen, Wochen, Jahren oder sogar Jahrzehnten.
            Regelmäßig werde ich neue Inhalte für dieses digitale Schulbuch
            erstellen und bereitstellen. Möchtest du mithelfen? Dann besuche
            mich gerne auf{" "}
            <a
              href="https://github.com/binkertpat/book.binkert-patrick.de"
              className="text-decoration-none"
            >
              GitHub
            </a>
            .
          </p>
          <div className="d-grid gap-2 d-flex justify-content-md-start">
            <a href="https://book.binkert-patrick.de/">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Zeigs mir!
              </button>
            </a>
            <a href="https://github.com/binkertpat/teaching">
              <button
                type="button"
                className="btn btn-secondary btn-lg px-4 me-md-2"
              >
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={PBM_EDITOR_IMAGE}
            className="d-block mx-lg-auto img-fluid"
            alt="Tools und Apps"
            title="Tools und Apps"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3">PBM-Editor</h2>
          <span className="badge bg-danger mb-3 me-2">work in progress</span>
          <span className="badge bg-danger mb-3">beta</span>
          <p className="lead">
            Ein kleiner Online-Editor, der das Erstellen und Rendern von Portable Bitmap Dateien in 3 Modi erlaubt. Zur Einführung stehen 3 Beispieldokumente zur Verfügung.
          </p>
          <div className="d-grid gap-2 d-flex justify-content-md-start">
            <a href="/pbm">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Rein da!
              </button>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LandingPage;
