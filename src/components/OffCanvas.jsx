import { MENU_STRUCTURE } from "../constants/menu";
import baseImage from "../img/signal-2024-06-22-135220_002.png";

const OffCanvas = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Menü
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column mb-3 justify-content-center">
          <ul className="list-group flex-grow-1">
            {Object.values(MENU_STRUCTURE).map((item, i) => {
              return (
                <a
                  href={item.URL}
                  key={i}
                  {...(item.ENABLED
                    ? { className: "list-group-item" }
                    : { className: "list-group-item disabled" })}
                >
                  {item.NAME}
                </a>
              );
            })}
          </ul>
          <div className="d-flex flex-wrap flex-column  justify-content-between align-items-center  border-top mt-5">
            <a href="/">
              <img
                src={baseImage}
                className="img-fluid col-md-4 d-flex align-items-center justify-content-center"
                style={{ width: "150px" }}
                alt="Unterricht bei Patrick Binkert"
                title="Unterricht bei Patrick Binkert"
              />
            </a>
            <p className="text-center text-body-secondary mt-1 mb-0">
              © 2024 Patrick Binkert
            </p>
            <p className="text-center text-body-secondary mt-1 mb-0">
              <a className="text-decoration-none text-body-secondary" href={__GITHUB_REPO__}>
                v{ __PACKAGE__.version }-{ __COMMIT_HASH__ }
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
