import ToolsCard from "../components/ToolsCard";
import { SERVER_TOOLS_COLLECTION } from "../content/serverToolsCollection";
import { EXTERNAL_TOOLS_COLLECTION } from "../content/serverToolsCollection";

const ServerTools = () => {
  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3"> Self-Hosted Tools</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(SERVER_TOOLS_COLLECTION).map((item, i) => {
          return <ToolsCard key={i} props={item} />;
        })}
      </div>
      <h2 className="display-5 fw-bold lh-1 mb-3 mt-5">
        {" "}
        Weitere nützliche Tools
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(EXTERNAL_TOOLS_COLLECTION).map((item, i) => {
          return <ToolsCard key={i} props={item} />;
        })}
      </div>
    </>
  );
};

export default ServerTools;
