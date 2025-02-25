import ToolsCard from "../components/ToolsCard";
import { EXTERNAL_PROGRAMS } from "../content/externalPrograms";

const ExternalPrograms = () => {
  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3"> Programme</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(EXTERNAL_PROGRAMS).map((item, i) => {
          return <ToolsCard key={i} props={item} />;
        })}
      </div>
    </>
  );
};

export default ExternalPrograms;
