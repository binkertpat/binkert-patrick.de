/* eslint-disable no-undef */
import { useEffect } from "react";
import { useStateContext } from "../../hooks/useStateContext";
import MoonSVG from "../components/MoonSVG";
import PayPal from "../components/PayPal";
import SunSVG from "../components/SunSVG";
import { ACTIONS, THEMES } from "../constants/enums";
import BVC_LOGO from "../img/bvc_logo.svg";

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
        <h1 className="display-5 fw-bold lh-1 mb-3">Benefizkonzert 2026</h1>
        <p className="fs-6 text-body-secondary">
          → präsentiert vom Abiturjahrgang 2026 ←
        </p>
        <hr />
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
