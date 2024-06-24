import { MENU_STRUCTURE } from "../constants/menu";

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
        <div className="offcanvas-body">
          <ul className="list-group">
            {Object.values(MENU_STRUCTURE).map((item) => {
              return (
                <a className="list-group-item" href={item.URL} key={item.URL}>
                  {item.NAME}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
