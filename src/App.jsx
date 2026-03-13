/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import OffCanvas from "./components/OffCanvas.jsx";
import Header from "./components/Header.jsx";
import Breadcrumbs from "./components/Breadcrumbs.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Contact from "./pages/Contact.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import Benefizkonzert2026 from "./pages/Benefizkonzert2026.jsx";

// 1. Create a Layout component for your standard pages
const MainLayout = () => {
  return (
    <>
      <div className="container">
        <OffCanvas />
        <Header />
        <Breadcrumbs />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <BugReport />
      <Footer />
    </>
  );
};

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
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/self-hosted-tools" element={<SelfHostedTools />} />
          <Route path="/external-tools" element={<ExternalTools />} />
          <Route path="/external-programs" element={<ExternalPrograms />} />
          <Route path="/education" element={<EducationMaterial />} />
          <Route path="/pbm" element={<PortableBitmapEditor />} />
          <Route path="/Biber2025" element={<Biber2025 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/benefizkonzert2026@BvC" element={<Benefizkonzert2026 />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
