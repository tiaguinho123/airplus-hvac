import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyFooter from './components/MobileStickyFooter';

// Pages matching airplushvac.com navigation exactly
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceRepairPage from './pages/ServiceRepairPage';
import MaintenancePage from './pages/MaintenancePage';
import InstallationPage from './pages/InstallationPage';
import MiniSplitsPage from './pages/MiniSplitsPage';
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:rounded-lg focus:shadow-lg focus:font-bold"
        style={{ color: '#E63946' }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/home/service" element={<ServiceRepairPage />} />
          <Route path="/home/maintenance" element={<MaintenancePage />} />
          <Route path="/home/installation" element={<InstallationPage />} />
          <Route path="/home/mini-splits" element={<MiniSplitsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <MobileStickyFooter />
    </BrowserRouter>
  );
}
