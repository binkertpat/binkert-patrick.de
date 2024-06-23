import IT_TOOLS_STOCK from '../img/it_tools_stock.jpeg'
import BOOK_IMAGE from '../img/book_image.png'

const LandingPage = () => {
    return (
        <>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={IT_TOOLS_STOCK} className="d-block mx-lg-auto img-fluid" alt="Tools und Apps" title="Tools und Apps" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Tools und Apps</h1>
                    <p className="lead">Die verlinkte <a href="/servertools" className='text-decoration-none'>Seite</a> enthält eine Vielzahl von Links zu verschiedenen Tools und Anwendungen, die speziell für den Einsatz im Unterricht konzipiert sind. 
                    Einige dieser Tools sind selbst gehostet, das heißt, sie werden auf meinem eigenen Servern betrieben, während andere extern über das Internet zugänglich sind. Keines dieser Tools ist kostenpflichtig oder sammelt unnötige personenbezogene Daten!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="/servertools">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Da will ich hin!</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={BOOK_IMAGE} className="d-block mx-lg-auto img-fluid" alt="Tools und Apps" title="Tools und Apps" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Schulbuch</h1>
                    <span class="badge bg-danger mb-3">work in progress</span>
                    <p className="lead">
                        Das Schulbuch wird sich kontinuierlich weiterentwickeln - sei es in den kommenden Tagen, Wochen, Jahren oder sogar Jahrzehnten. 
                        Regelmäßig werde ich neue Inhalte für dieses digitale Schulbuch erstellen und bereitstellen. Möchtest du mithelfen? 
                        Dann besuche mich gerne auf <a href="https://github.com/binkertpat/book.binkert-patrick.de" className='text-decoration-none'>GitHub</a>.</p>
                    <div className="d-grid gap-2 d-flex justify-content-md-start">
                        <a href="https://book.binkert-patrick.de">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Zeigs mir!</button>
                        </a>
                        <a href="https://github.com/binkertpat/book.binkert-patrick.de">
                            <button type="button" className="btn btn-secondary btn-lg px-4 me-md-2">GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
