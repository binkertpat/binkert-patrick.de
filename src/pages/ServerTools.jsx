import ToolsCard from "../components/ToolsCard";
import { SERVER_TOOLS_COLLECTION } from "../content/serverToolsCollection";
import { EXTERNAL_TOOLS_COLLECTION } from "../content/serverToolsCollection";

const ServerTools = () => {
    return (
        <>
            <h2 className="mb-3"> Self-Hosted Tools</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {Object.values(SERVER_TOOLS_COLLECTION).map((item, i) => {
                    return (
                        <ToolsCard key={i} props={item} />
                    );
                })}
            </div>
            <h2 className="mt-5 mb-3"> Weitere nützliche Tools</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {Object.values(EXTERNAL_TOOLS_COLLECTION).map((item, i) => {
                    return (
                        <ToolsCard key={i} props={item} />
                    );
                })}
            </div>
        </>
    );
};

export default ServerTools;
