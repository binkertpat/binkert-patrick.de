import baseImage from "../img/signal-2024-06-22-135220_002.png";
import MoonSVG from "./MoonSVG";
import SunSVG from "./SunSVG";
import { useStateContext } from "../../hooks/useStateContext";
import { ACTIONS, THEMES } from "../constants/enums";

const Header = () => {
  const { state, dispatch } = useStateContext();

  const handleDarkModeToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE_STATE });
  };

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark bd-navbar">
        <nav
          className="container-xxl  flex-wrap flex-lg-nowrap"
          aria-label="Main navigation"
        >
          <a
            className="navbar-brand p-0 me-0 me-lg-2"
            href="/"
            aria-label="Bootstrap"
          >
            <img
              src={baseImage}
              alt="Unterricht bei Patrick Binkert"
              title="Unterricht bei Patrick Binkert"
              width="100"
              className="d-inline-block align-text-top me-3"
            />
          </a>
          <div className="d-flex flex-grow-1 justify-content-end">
            <div
              className="d-flex flex-column me-2 justify-content-center align-items-middle"
              role="button"
              tabIndex="0"
              aria-label="Dark- und Light-Mode umschalten"
              onClick={handleDarkModeToggle}
            >
              <p className="m-0">
                {state.THEME == THEMES.DARK ? <SunSVG /> : <MoonSVG />}
              </p>
            </div>
            <button
              className="btn btn-primary ms-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              aria-label="Menü öffnen"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <p className="display-4 fw-bold mt-2 user-select-none">
        Unterricht bei Herrn Binkert
      </p>
    </>
  );
};

export default Header;
