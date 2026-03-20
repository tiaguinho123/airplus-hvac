// MobileStickyFooter — appears only on mobile (md:hidden), fixed at bottom
// Shows a prominent "Call Now" CTA for local service conversion
import { Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function MobileStickyFooter() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2 pointer-events-none"
      aria-label="Mobile call CTA"
    >
      <a
        href={`tel:${phone}`}
        className="pointer-events-auto flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-bold text-lg shadow-2xl transition-transform active:scale-95"
        style={{ backgroundColor: colors.primaryHex }}
        aria-label={`Call ${phoneFormatted}`}
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
        Call Now — {phoneFormatted}
      </a>
    </div>
  );
}
