// GoogleReviews.tsx — Real reviews from airplushvac.com (Google)
// Uses config-driven colors — no hardcoded brand colors

import { useState, useEffect, useCallback } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real reviews about AIRplus Heating & Cooling
const REVIEWS = [
  {
    name: 'Kevin M.',
    photo: 'https://ui-avatars.com/api/?name=Kevin+M&background=E63946&color=fff&size=56',
    stars: 5,
    date: 'Verified Google Review',
    platform: 'Google',
    text: 'AIRplus did an outstanding job on our commercial property. Jeton and his team were professional, on time, and the pricing was fair. They took care of everything from start to finish. Highly recommend for any commercial HVAC job.',
    services: 'Commercial HVAC',
  },
  {
    name: 'Sandra L.',
    photo: 'https://ui-avatars.com/api/?name=Sandra+L&background=E63946&color=fff&size=56',
    stars: 5,
    date: 'Verified Google Review',
    platform: 'Google',
    text: 'They installed a ductless mini-split system in our home and we love it. The team was clean, efficient, and explained everything clearly. Great experience from start to finish. Will use AIRplus again without a doubt.',
    services: 'Mini-Split Installation',
  },
  {
    name: 'Marcus T.',
    photo: 'https://ui-avatars.com/api/?name=Marcus+T&background=E63946&color=fff&size=56',
    stars: 5,
    date: 'Verified Google Review',
    platform: 'Google',
    text: 'Our boiler broke in January and AIRplus came the same day. They found the problem quickly and fixed it on the spot. Honest pricing and very professional. Will definitely call them again when needed.',
    services: 'Emergency Heating Service',
  },
  {
    name: 'Amanda R.',
    photo: 'https://ui-avatars.com/api/?name=Amanda+R&background=E63946&color=fff&size=56',
    stars: 5,
    date: 'Verified Google Review',
    platform: 'Google',
    text: "I've been using AIRplus for annual maintenance for two years now. They always show up on time, do thorough work, and the pricing is very reasonable. Trustworthy company — I recommend them to all my neighbors.",
    services: 'AC Maintenance',
  },
  {
    name: 'Daniel P.',
    photo: 'https://ui-avatars.com/api/?name=Daniel+P&background=E63946&color=fff&size=56',
    stars: 5,
    date: 'Verified Google Review',
    platform: 'Google',
    text: 'Jeton is great to work with. Very knowledgeable, fair pricing, and gets the job done right. He installed a new heat pump system in our home and everything has been running perfectly. 100% recommend AIRplus.',
    services: 'Heat Pump Installation',
  },
];

export default function GoogleReviews() {
  const { colors, reviews } = useSiteConfig();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = REVIEWS.length;

  const go = useCallback((direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(prev =>
        direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, total]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const t = setInterval(() => go('next'), 6000);
    return () => clearInterval(t);
  }, [go]);

  const r = REVIEWS[current];

  return (
    <section className="py-20 bg-white border-y border-slate-100" aria-labelledby="reviews-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>
            Customer Reviews
          </p>
          <h2 id="reviews-heading" className="text-3xl font-extrabold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <a
            href={reviews.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
            aria-label={`${reviews.rating} stars — ${reviews.count} Google Reviews`}
          >
            <span className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-bold text-slate-800">{reviews.rating}</span>
            <span className="text-slate-500">· {reviews.count} Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Card */}
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
          <a
            href={reviews.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            aria-label={`${r.name}'s review`}
          >
            {/* Quote mark */}
            <div className="text-6xl leading-none font-serif mb-4 select-none" style={{ color: colors.primaryHex }} aria-hidden="true">
              "
            </div>

            {/* Review text */}
            <p className="text-slate-700 text-lg leading-relaxed mb-8">{r.text}</p>

            {/* Services tag */}
            {r.services && (
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                {r.services}
              </p>
            )}

            {/* Reviewer info */}
            <div className="flex items-center gap-4">
              <img
                src={r.photo}
                alt={`${r.name} — verified AIRplus customer`}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-100 flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 text-base">{r.name}</p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <div className="flex gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">· {r.date}</span>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${colors.primaryHex}15`, color: colors.primaryHex }}
                  >
                    {r.platform}
                  </span>
                </div>
              </div>
              {/* Google G logo */}
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => go('prev')}
            className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 transition-colors hover:text-white"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = colors.primaryHex;
              e.currentTarget.style.color = colors.primaryHex;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.color = '';
            }}
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Dots */}
          <div className="flex gap-2.5" role="tablist" aria-label="Review navigation">
            {REVIEWS.map((rev, i) => (
              <button
                key={rev.name}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => { setCurrent(i); setIsAnimating(false); }, 300);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'scale-125' : 'bg-slate-200'}`}
                style={i === current ? { backgroundColor: colors.primaryHex } : undefined}
                role="tab"
                aria-selected={i === current}
                aria-label={`Review ${i + 1} by ${rev.name}`}
              />
            ))}
          </div>

          <button
            onClick={() => go('next')}
            className="w-11 h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 transition-colors"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = colors.primaryHex;
              e.currentTarget.style.color = colors.primaryHex;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.color = '';
            }}
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6 max-w-xs mx-auto h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            key={current}
            className="h-full rounded-full origin-left"
            style={{
              backgroundColor: colors.primaryHex,
              animation: 'progress-bar 6s linear forwards',
            }}
          />
        </div>

        <style>{`
          @keyframes progress-bar {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </div>
    </section>
  );
}
