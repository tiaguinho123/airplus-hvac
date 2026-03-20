import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyFooter from './components/MobileStickyFooter';

// Pages matching evolutionairllc.com navigation exactly
import HomePage from './pages/HomePage';
import ResidentialPage from './pages/ResidentialPage';
import CommercialPage from './pages/CommercialPage';
import PreventativeMaintenancePage from './pages/PreventativeMaintenancePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:rounded-lg focus:shadow-lg focus:font-bold"
        style={{ color: '#1A73C8' }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/residential" element={<ResidentialPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/preventative-maintenance" element={<PreventativeMaintenancePage />} />
          <Route path="/cooling-heating-maintenance" element={<PreventativeMaintenancePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <MobileStickyFooter />
    </BrowserRouter>
  );
}
