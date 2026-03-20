import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/27d8f851-1cc8-4c55-93e5-226a2cd6e755/AirPlus+Logo+big-01.png?format=1500w';

const FOOTER_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Repair Services', path: '/home/service' },
  { label: 'Maintenance', path: '/home/maintenance' },
  { label: 'Installation', path: '/home/installation' },
  { label: 'Mini-Splits', path: '/home/mini-splits' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  const { businessName, colors, phone, phoneFormatted, email, address, hours, facebookUrl, instagramUrl } = useSiteConfig() as any;

  return (
    <footer className="border-t border-slate-800" id="footer" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block mb-5" aria-label={`${businessName} — Home`}>
              <img
                src={LOGO_URL}
                alt={`${businessName} — Heating & Cooling`}
                className="h-12 object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              AIRplus Heating &amp; Cooling is a licensed &amp; insured HVAC company based in Bridgeport, CT. Serving Fairfield &amp; New Haven County with commercial and residential HVAC solutions.
            </p>
            <div className="flex gap-3 mt-4">
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-70"
                  style={{ backgroundColor: '#1877F2' }}
                  aria-label="AIRplus on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-70"
                  style={{ background: 'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}
                  aria-label="AIRplus on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
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

          {/* Contact */}
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
                    <p className="font-semibold mt-1" style={{ color: colors.primaryHex }}>Emergency Service Available</p>
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
          <p>Bridgeport, CT — Serving Fairfield &amp; New Haven County</p>
        </div>
      </div>
    </footer>
  );
}
