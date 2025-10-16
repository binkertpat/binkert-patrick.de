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
import { useEffect } from "react";
import { ACTIONS } from "./constants/enums.js";
import BugReport from "./components/BugReport.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import EducationMaterial from "./pages/EducationMaterial.jsx";
import SelfHostedTools from "./pages/SelfHostedTools.jsx";
import ExternalTools from "./pages/ExternalTools.jsx";
import ExternalPrograms from "./pages/ExternalPrograms.jsx";
import NotFound from "./pages/NotFound.jsx";
import PortableBitmapEditor from "./pages/PortableBitmapEditor.jsx";
import SurfaceWin11UpgradeBooking from "./pages/SurfaceWin11UpgradeBooking.jsx";
import Biber2025 from "./pages/Biber2025.jsx";
import { BiberContextProvider } from "../context/BiberContext.jsx";

function App() {
  const { _, dispatch } = useStateContext();

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
  }, []);

  return (
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
            Einen guten und erfolgreichen Start ins neue Schuljahr! 📖👨‍🏫
          </div>
        </div> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/self-hosted-tools" element={<SelfHostedTools />} />
            <Route path="/external-tools" element={<ExternalTools />} />
            <Route path="/external-programs" element={<ExternalPrograms />} />
            <Route path="/education" element={<EducationMaterial />} />
            <Route path="/pbm" element={<PortableBitmapEditor />} />
            {/* <Route
              path="/SurfaceWin11UpgradeBooking"
              element={<SurfaceWin11UpgradeBooking />}
            /> */}
            <Route path="/Biber2025" element={<Biber2025 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <BugReport />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
