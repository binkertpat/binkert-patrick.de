import { MENU_STRUCTURE } from "../constants/menu";

const Breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb breadcrumb-chevron p-3 rounded-3">
        <li className="breadcrumb-item">
          <a className="link-body-emphasis" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
            <span className="visually-hidden">Startseite</span>
          </a>
        </li>

        <li className="breadcrumb-item">
          <a href="/" className="text-decoration-none">
            Startseite
          </a>
        </li>

        {Object.values(MENU_STRUCTURE).map((item) => {
          return (
            item.URL == window.location.pathname && (
              <li
                className="breadcrumb-item active"
                aria-current="page"
                key={item.URL}
              >
                {item.NAME}
              </li>
            )
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
