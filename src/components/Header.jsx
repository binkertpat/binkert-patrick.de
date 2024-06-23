import baseImage from '../img/signal-2024-06-22-135220_002.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar ">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={ baseImage } alt="Unterricht bei Patrick Binkert" title="Unterricht bei Patrick Binkert" width="80" className="d-inline-block align-text-top me-3"/>
                    </a>
                    
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    </button>
                </div>
                <h1 className="m-0">Unterricht bei Herrn Binkert</h1>
            </nav>
        </header>        
    );
};

export default Header;
