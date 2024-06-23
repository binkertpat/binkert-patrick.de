import IT_TOOLS_STOCK from '../img/it_tools_stock.jpeg'

const LandingPage = () => {
    return (
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={IT_TOOLS_STOCK} className="d-block mx-lg-auto img-fluid" alt="Tools und Apps" title="Tools und Apps" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Tools und Apps</h1>
                <p className="lead">Die verlinkte Seite enthält eine Vielzahl von Links zu verschiedenen Tools und Anwendungen, die speziell für den Einsatz im Unterricht konzipiert sind. 
                Einige dieser Tools sind selbst gehostet, das heißt, sie werden auf meinem eigenen Servern betrieben, während andere extern über das Internet zugänglich sind.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a href="/servertools">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Da will ich hin!</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
