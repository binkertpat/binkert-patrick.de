/* eslint-disable no-undef */
import { useEffect } from "react";
import { useStateContext } from "../../hooks/useStateContext";
import MoonSVG from "../components/MoonSVG";
import PayPal from "../components/PayPal";
import SunSVG from "../components/SunSVG";
import { ACTIONS, THEMES } from "../constants/enums";
import BVC_LOGO from "../img/bvc_logo.svg";
import PROGRAM from "../files/2026_03_17_programm_benefiz.pdf";
import PRICE_LIST from "../files/2026_03_17_preisliste_benefiz.pdf";

const Benefizkonzert2026 = () => {
  const { state, dispatch } = useStateContext();

  const handleDarkModeToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE_STATE });
  };

  useEffect(() => {
    const TITLE_META_TAG = document.querySelector("title");
    if (TITLE_META_TAG) {
      TITLE_META_TAG.innerText = "Benefizkonzert 2026";
    }
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-4 p-2"></div>
        <div className="col-4 p-2">
          <a
            href="https://www.cottagym.de/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <img src={BVC_LOGO} className="img-fluid" alt="..."></img>
          </a>
        </div>
        <div className="col-4 p-2">
          <div
            className="d-flex flex-column me-2 justify-content-center align-items-end"
            role="button"
            tabIndex="0"
            aria-label="Dark- und Light-Mode umschalten"
            onClick={handleDarkModeToggle}
          >
            <p className="m-0 pe-2">
              {state.THEME == THEMES.DARK ? <SunSVG /> : <MoonSVG />}
            </p>
          </div>
        </div>
      </div>
      <div className="container py-3 my-0 px-2 m-auto text-center">
        <h1 className="display-5 fw-bold lh-1 mb-3 text-uppercase">
          Benefizkonzert
        </h1>
        <p className="fs-6 text-body-secondary">
          → präsentiert vom Abiturjahrgang 2026 ←
        </p>

        <hr />

        <div className="row g-3">
          <div className="col-12 col-sm-auto">
            <a
              type="button"
              className="btn btn-outline-primary fw-bolder"
              href={PROGRAM}
              download={"2026_03_17_programm_benefiz.pdf"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-filetype-pdf me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
                />
              </svg>
              Programm
              <small className="ms-1 fw-normal" style={{ fontSize: "0.6rem" }}>
                als PDF downlaoden
              </small>
            </a>
          </div>
          <div className="col">
            <a
              type="button"
              className="btn btn-outline-success fw-bolder"
              href={PRICE_LIST}
              download={"2026_03_17_preisliste_benefiz.pdf"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-filetype-pdf me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
                />
              </svg>
              Preisliste
              <small className="ms-1 fw-normal" style={{ fontSize: "0.6rem" }}>
                als PDF downloaden
              </small>
            </a>
          </div>
        </div>

        <hr />

        <div className="accordion" id="program_and_price_list">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#program"
                aria-expanded="true"
                aria-controls="program"
              >
                <div className="text-normal">
                  <p className="d-block mt-0 mb-0 text-uppercase fw-bolder">
                    💃 Programm
                  </p>
                  <p
                    className="d-block mt-0 mb-0 fw-light"
                    style={{ fontSize: "0.6rem" }}
                  >
                    Online-Version
                  </p>
                </div>
              </button>
            </h2>
            <div
              id="program"
              className="accordion-collapse collapse show"
              data-bs-parent="#program_and_price_list"
            >
              <div className="accordion-body">
                <div className="text-start">
                  <p className="mb-0 fw-bolder">
                    Lay All Your Love On Me{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (ABBA)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert vom Jahrgangschor
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Shallow{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Lady Gaga)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von Shirin & Levi
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Van Gogh{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Virginio Aiello)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von Paula
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Let It Be{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Beatles)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von der Jahrgansband
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Tanzchoreografie
                    <span className="fw-normal"></span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}></small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Juli{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Fynr)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von Anna-Julia & Shirin
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Heart Of Courage{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Thomas Bergersen)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von Simon
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    I Don’t Care Much{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (John Kander)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von Levi
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Rope-Skipping-Einlage
                    <span className="fw-normal"></span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}></small>
                </div>

                <hr />

                <div className="text-start">
                  <p className="mb-0 fw-bolder">
                    Akrobatikeinlage
                    <span
                      className="fw-normal"
                      style={{ fontSize: "0.7rem" }}
                    ></span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}></small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Nur ein Wort{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Wir sind Helden)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von der Jahrgansband
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Valerie{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Amy Winehouse)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von der Jahrgansband
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Falling Apart{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Michael Schulte)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von Paula
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Mamma Mia{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (ABBA)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert vom Jahrgangschor
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Piraten der Karibik{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Klaus Badelt)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert von Lena & Till
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Olsenbande{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Bent Fabricius-Bjerre)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert vom Schulorchester
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    The Winner Takes It All{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (ABBA)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert vom Schulorchester
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    Kleiner grüner Kaktus{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Bert Reisfeld)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert vom Schulorchester und dem Lehrerchor
                  </small>
                </div>

                <div className="text-start mt-4">
                  <p className="mb-0 fw-bolder">
                    An der schönen blauen Donau{" "}
                    <span className="fw-normal" style={{ fontSize: "0.7rem" }}>
                      (Johann Strauss)
                    </span>
                  </p>
                  <small style={{ fontSize: "0.7rem" }}>
                    präsentiert vom Schulorchester
                  </small>
                </div>

                <hr />
                <p className="fw-bolder fs-6 text-center text-uppercase mb-0">
                  Vielen Dank für Ihr Erscheinen und Ihre Unterstützung!
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#price_list"
                aria-expanded="false"
                aria-controls="price_list"
              >
                <div className="text-normal">
                  <p className="d-block mt-0 mb-0 text-uppercase fw-bolder">
                    💸 Preisliste
                  </p>
                  <p
                    className="d-block mt-0 mb-0 fw-light"
                    style={{ fontSize: "0.6rem" }}
                  >
                    Online-Version
                  </p>
                </div>
              </button>
            </h2>
            <div
              id="price_list"
              className="accordion-collapse collapse"
              data-bs-parent="#program_and_price_list"
            >
              <div className="accordion-body">
                {/* <img src={PRICE_LIST} className="img-fluid" /> */}

                <p className="fw-bolder text-uppercase text-start mb-1">
                  Bratwurst
                </p>
                <hr className="mt-2 mb-2" />
                <div className="row text-start">
                  <div className="col col-8">Bratwurst mit Brötchen</div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    3,50 €
                  </div>
                </div>
                <div className="row text-start ">
                  <div className="col col-8">
                    Bratwurst mit Kartoffelsalat / Nudelsalat
                  </div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    4,50 €
                  </div>
                </div>
                <div className="row text-start ">
                  <div className="col col-8">Bratwurst mit Salat</div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    4,00 €
                  </div>
                </div>

                <p className="fw-bolder text-uppercase text-start mb-1 mt-4">
                  Hotdog
                </p>
                <hr className="mt-2 mb-2" />
                <div className="row text-start ">
                  <div className="col col-8">Hotdog</div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    3,00 €
                  </div>
                </div>
                <div className="row text-start ">
                  <div className="col col-8">Veganer Hotdog</div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    3,00 €
                  </div>
                </div>

                <p className="fw-bolder text-uppercase text-start mb-1 mt-4">
                  Suppen
                </p>
                <hr className="mt-2 mb-2" />
                <div className="row text-start ">
                  <div className="col col-8">Sojanka</div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    4,00 €
                  </div>
                </div>
                <div className="row text-start ">
                  <div className="col col-8">Linsensuppe</div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    4,00 €
                  </div>
                </div>

                <p className="fw-bolder text-uppercase text-start mb-1 mt-4">
                  Waffeln
                </p>
                <hr className="mt-2 mb-2" />
                <div className="row text-start ">
                  <div className="col col-8">Waffeln mit Puderzucker</div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    3,50 €
                  </div>
                </div>
                <div className="row text-start ">
                  <div className="col col-8">
                    Waffeln mit Puderzucker und Nutella
                  </div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    4,00 €
                  </div>
                </div>
                <div className="row text-start ">
                  <div className="col col-8">
                    Waffeln mit Puderzucker und Apfelmus
                  </div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    4,50 €
                  </div>
                </div>

                <p className="fw-bolder text-uppercase text-start mb-1 mt-4">
                  Kuchen
                </p>
                <hr className="mt-2 mb-2" />
                <div className="row text-start ">
                  <div className="col col-8">pro Stück</div>
                  <div className="col col-4 text-end fw-bolder font-monospace">
                    1,50 €
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <PayPal />
        <hr />
        <a
          href="https://binkert-patrick.de/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <img
            src={BVC_LOGO}
            style={{ width: "60%", maxWidth: "400px" }}
            className="img-fluid"
            alt="..."
          ></img>
        </a>

        <p className="text-center mt-3 mb-0 font-monospace fs-6 text-body-secondary">
          &copy; 2026 Patrick Binkert
        </p>
        <p className="">
          <a
            className="text-decoration-none text-center  font-monospace fs-6 text-body-secondary"
            href={__GITHUB_REPO__}
          >
            v{__PACKAGE__.version}-{__COMMIT_HASH__}
          </a>
        </p>
      </div>
    </>
  );
};

export default Benefizkonzert2026;
