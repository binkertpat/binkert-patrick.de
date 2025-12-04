/* eslint-disable no-undef */
import baseImage from "../img/signal-2024-06-22-135220_002.png";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap flex-column  justify-content-between align-items-center  border-top mt-5">
      <a href="/">
        <img
          src={baseImage}
          className="img-fluid col-md-4 d-flex align-items-center justify-content-center"
          style={{ width: "150px" }}
          alt="Unterricht bei Patrick Binkert"
          title="Unterricht bei Patrick Binkert"
        />
      </a>
      <p className="text-center text-body-secondary mt-1 mb-0">
        © 2025 Patrick Binkert
      </p>
      <p className="text-center text-body-secondary">
        <a
          className="text-decoration-none text-body-secondary"
          href={__GITHUB_REPO__}
        >
          v{__PACKAGE__.version}-{__COMMIT_HASH__}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
