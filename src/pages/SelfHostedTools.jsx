import ToolsCard from "../components/ToolsCard";
import { SELF_HOSTED_TOOLS } from "../content/selfHostedTools";

const SelfHostedTools = () => {
  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3"> self-hosted Tools</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(SELF_HOSTED_TOOLS).map((item, i) => {
          return <ToolsCard key={i} props={item} />;
        })}
      </div>
    </>
  );
};

export default SelfHostedTools;
