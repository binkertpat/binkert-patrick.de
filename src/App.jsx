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
          <svg class="bi flex-shrink-0 me-2" role="img" width="20px" height="20px" aria-label="Danger:" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
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
      {/* <PWABadge /> */}
    </>
  )
}

export default App
