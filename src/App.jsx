import PWABadge from './PWABadge.jsx'
import './App.css'
import OffCanvas from './components/OffCanvas.jsx'
import Header from './components/Header.jsx'
import Breadcrumbs from './components/Breadcrumbs.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServerTools from './pages/ServerTools.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      
      <div className="container">
        <OffCanvas />
        <Header />
        <Breadcrumbs />
      </div>
      <div className="container">
        <div class="alert alert-danger d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" role="img" width="20px" height="20px" aria-label="Danger:">
            <use xlink:href="#exclamation-triangle-fill" />
          </svg>
          <div>
            Diese Seite befindet sich derzeit im Aufbau. Melde dich gern, wenn dir Fehler auffallen!
          </div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/servertools" element={<ServerTools />}/>
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
      <PWABadge />
    </>
  )
}

export default App
