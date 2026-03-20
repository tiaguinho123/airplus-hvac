import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real Evolution Air logo from evolutionairllc.com
const LOGO_URL = 'https://evolutionairllc.com/wp-content/uploads/2019/11/evolution-air-logo_horizontal-3-300x82.png';

// Exact navigation from evolutionairllc.com
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Residential', path: '/residential' },
  { label: 'Commercial', path: '/commercial' },
  { label: 'Preventative Maintenance', path: '/preventative-maintenance' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export default function Navbar() {
  const cfg = useSiteConfig();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors px-1 pb-1 border-b-2 ${
      isActive
        ? `border-[${cfg.colors.primaryHex}] text-[${cfg.colors.primaryHex}]`
        : 'text-slate-700 border-transparent hover:text-slate-900'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Company Logo */}
          <Link to="/" aria-label={`${cfg.businessName} — Home`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0">
            <img
              src={cfg.logoUrl ?? LOGO_URL}
              alt={`${cfg.businessName} — Heating & Cooling`}
              className="h-14 w-auto object-contain"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={navLinkClass}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href={`tel:${cfg.phone}`}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: cfg.colors.primaryHex }}
            aria-label={`Call ${cfg.phoneFormatted}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {cfg.phoneFormatted}
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-700"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={navLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${cfg.phone}`}
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white"
              style={{ backgroundColor: cfg.colors.primaryHex }}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {cfg.phoneFormatted}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
