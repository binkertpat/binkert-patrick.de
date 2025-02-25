import ToolsCard from "../components/ToolsCard";
import { EXTERNAL_TOOLS } from "../content/externalTools";

const ExternalTools = () => {
  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3"> Externe Tools</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(EXTERNAL_TOOLS).map((item, i) => {
          return <ToolsCard key={i} props={item} />;
        })}
      </div>
    </>
  );
};

export default ExternalTools;
