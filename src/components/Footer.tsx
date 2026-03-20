import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real logo from evolutionairllc.com
const LOGO_URL = 'https://evolutionairllc.com/wp-content/uploads/2019/11/evolution-air-logo_horizontal-3-300x82.png';

// Real footer nav matching evolutionairllc.com
const FOOTER_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Residential', path: '/residential' },
  { label: 'Commercial', path: '/commercial' },
  { label: 'Preventative Maintenance', path: '/preventative-maintenance' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact Us', path: '/contact-us' },
];

export default function Footer() {
  const { businessName, colors, phone, phoneFormatted, email, address, hours } = useSiteConfig();
  const logoUrl = LOGO_URL;

  return (
    <footer className="border-t border-slate-800" id="footer" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block mb-5" aria-label={`${businessName} — Home`}>
              <img
                src={logoUrl}
                alt={`${businessName} — Heating & Cooling Stamford CT`}
                className="h-12 object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A full-service HVAC company based in Stamford, CT. Fully licensed &amp; insured. Serving Fairfield &amp; Westchester County.
            </p>
            {/* Real social links from evolutionairllc.com */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/evolutionairllc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-70"
                style={{ backgroundColor: '#1877F2' }}
                aria-label="Evolution Air on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/evolutionairllc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-70"
                style={{ background: 'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}
                aria-label="Evolution Air on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — real info from evolutionairllc.com */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span className="text-sm">
                  {address.street}<br />
                  {address.city}, {address.state} {address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`tel:${phone}`} className="hover:text-white transition-colors font-semibold">{phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors text-sm">{email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <div className="text-sm">
                  <p>{hours.weekdays}</p>
                  {hours.emergency && (
                    <p className="font-semibold mt-1" style={{ color: colors.primaryHex }}>24/7 Emergency Response</p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <p>Stamford, CT — Serving Fairfield &amp; Westchester County</p>
        </div>
      </div>
    </footer>
  );
}
