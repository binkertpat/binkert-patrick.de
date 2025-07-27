import ToolsCard from "../components/ToolsCard";
import {
  EXTERNAL_TOOLS_EVERYDAYLIFE_AND_EDU,
  EXTERNAL_TOOLS_INFORMATIK,
  EXTERNAL_TOOLS_PHYSIK,
} from "../content/externalTools";

const ExternalTools = () => {
  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3"> Externe Tools</h1>
      <div className="container">
        <div className="row gy-2 mb-3">
          <div className="col-md-4">
            <div className="d-grid">
              <a
                href="#tools_fuer_den_alltag_und_unterricht"
                className="btn btn-primary"
                type="button"
              >
                Alltagshelfer und Unterricht
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-grid">
              <a href="#physik" className="btn btn-primary" type="button">
                Physik
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-grid">
              <a href="#informatik" className="btn btn-primary" type="button">
                Informatik
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      <h3
        id="tools_fuer_den_alltag_und_unterricht"
        className="display-6 fw-bold"
      >
        Alltagshelfer und Unterricht
      </h3>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(EXTERNAL_TOOLS_EVERYDAYLIFE_AND_EDU).map((item, i) => {
          return <ToolsCard key={i} props={item} />;
        })}
      </div>

      <hr className="mt-4 mb-4" />

      <h3 id="physik" className="display-6 fw-bold">
        Physik
      </h3>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(EXTERNAL_TOOLS_PHYSIK).map((item, i) => {
          return <ToolsCard key={i} props={item} />;
        })}
      </div>

      <hr className="mt-4 mb-4" />

      <h3 id="informatik" className="display-6 fw-bold">
        Informatik
      </h3>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(EXTERNAL_TOOLS_INFORMATIK).map((item, i) => {
          return <ToolsCard key={i} props={item} />;
        })}
      </div>
    </>
  );
};

export default ExternalTools;
