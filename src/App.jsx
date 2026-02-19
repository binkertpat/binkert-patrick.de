/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import OffCanvas from "./components/OffCanvas.jsx";
import Header from "./components/Header.jsx";
import Breadcrumbs from "./components/Breadcrumbs.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Contact from "./pages/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import { useStateContext } from "../hooks/useStateContext.jsx";
import { useEffect, useState } from "react";
import { ACTIONS } from "./constants/enums.js";
import BugReport from "./components/BugReport.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import EducationMaterial from "./pages/EducationMaterial.jsx";
import SelfHostedTools from "./pages/SelfHostedTools.jsx";
import ExternalTools from "./pages/ExternalTools.jsx";
import ExternalPrograms from "./pages/ExternalPrograms.jsx";
import NotFound from "./pages/NotFound.jsx";
import PortableBitmapEditor from "./pages/PortableBitmapEditor.jsx";
import Biber2025 from "./pages/Biber2025.jsx";
import Snowfall from "react-snowfall";

function App() {
  const { _, dispatch } = useStateContext();
  const [daysUntilWinterVacation, setDaysUntilWinterVacation] = useState(-1);

  const calculateDaysUntilWinterVacation = () => {
    const today = new Date();
    const lastSchoolDay = new Date("2026-02-06");
    const diff = lastSchoolDay - today;
    const diffInDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysUntilWinterVacation(diffInDays);
  };

  const darkModeDefaultLogic = () => {
    if (localStorage.getItem("bsTheme") == null) {
      dispatch({ type: ACTIONS.SET_DEFAULT_STATE });
    } else {
      dispatch({
        type: ACTIONS.LOAD_USER_STATE,
        payload: { THEME: localStorage.getItem("bsTheme") },
      });
    }
  };

  useEffect(() => {
    darkModeDefaultLogic();
    calculateDaysUntilWinterVacation();
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <Snowfall /> */}
        <>
          <div className="container">
            <OffCanvas />
            <Header />
            <Breadcrumbs />
          </div>
          <div className="container">
            {/* <div
              className="alert alert-success d-flex align-items-center justify-content-center text-center"
              role="alert"
            >
              <div className="text-center">
                <span
                  className="mb-3"
                  style={{
                    display: "block",
                    fontWeight: "bolder",
                    fontSize: "2rem",
                  }}
                >
                  🔜 Winterferien ⛷️{" "}
                </span>

                <span
                  className="mb-1"
                  style={{
                    display: "block",
                    fontWeight: "bolder",
                    fontSize: "1.4rem",
                    lineHeight: "2rem",
                  }}
                >
                  Nur noch {daysUntilWinterVacation} Tage bis zu den
                  Winterferien, den Halbjahresinformationen bzw. Zeugnissen und
                  damit dem Ende des ersten Halbjahres des Schuljahres 2025/26!
                  🥳
                </span>

                <a
                  href="https://www.youtube.com/watch?v=xdmJ2WMvpD4"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <button type="button" className="btn btn-success btn-lg mt-3">
                    Woah, we&apos;re halfway there! 🥳
                  </button>
                </a>
              </div>
            </div> */}

            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/self-hosted-tools" element={<SelfHostedTools />} />
              <Route path="/external-tools" element={<ExternalTools />} />
              <Route path="/external-programs" element={<ExternalPrograms />} />
              <Route path="/education" element={<EducationMaterial />} />
              <Route path="/pbm" element={<PortableBitmapEditor />} />
              <Route path="/Biber2025" element={<Biber2025 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <BugReport />
          <ScrollToTop />
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
