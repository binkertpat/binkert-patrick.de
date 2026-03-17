/* eslint-disable no-undef */
import { useEffect } from "react";
import { useStateContext } from "../../hooks/useStateContext";
import MoonSVG from "../components/MoonSVG";
import PayPal from "../components/PayPal";
import SunSVG from "../components/SunSVG";
import { ACTIONS, THEMES } from "../constants/enums";
import BVC_LOGO from "../img/bvc_logo.svg";
// import PRICE_LIST from "../img/pricelist_benefiz_2026.png";

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

        <div className="accordion" id="program_and_price_list">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button text-uppercase fw-bolder"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#program"
                aria-expanded="true"
                aria-controls="program"
              >
                💃 Abendprogramm
              </button>
            </h2>
            <div
              id="program"
              className="accordion-collapse collapse show"
              data-bs-parent="#program_and_price_list"
            >
              <div className="accordion-body">... coming soon ...</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed text-uppercase fw-bolder"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#price_list"
                aria-expanded="false"
                aria-controls="price_list"
              >
                💸 Preisliste
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
