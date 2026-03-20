// MobileStickyFooter — appears only on mobile (lg:hidden), fixed at bottom
// Shows a prominent "Call Now" CTA for local service conversion
import { Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function MobileStickyFooter() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Mobile call CTA"
    >
      <a
        href={`tel:${phone}`}
        className="flex items-center justify-center gap-3 w-full py-4 text-white font-bold text-base shadow-2xl transition-transform active:scale-[0.98]"
        style={{ backgroundColor: colors.primaryHex }}
        aria-label={`Call ${phoneFormatted}`}
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
        Call Now — {phoneFormatted}
      </a>
    </div>
  );
}
