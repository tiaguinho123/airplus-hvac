import { motion } from 'motion/react';
import { Phone, Star, Zap, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';
import TrustBadges from '../components/TrustBadges';
import GoogleReviews from '../components/GoogleReviews';

const HERO_IMAGE = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/950388d1-ebcd-43b0-ac15-c67621092de3/IMG_2314.jpg';

const HOME_SECTIONS = [
  {
    title: 'Services',
    img: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233390629-A2F33QSSCEYII880SUSP/IMG_0633.jpg',
    path: '/home/service',
  },
  {
    title: 'Maintenance',
    img: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233311757-2XSB1RNV0A22U27MWHM5/IMG_3649.jpg',
    path: '/home/maintenance',
  },
  {
    title: 'Installation',
    img: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233334470-97P5FOW7M35S1U1EXU2E/IMG_4326.jpg',
    path: '/home/installation',
  },
  {
    title: 'Mini-Splits',
    img: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1647455781270-46XYQ7G16OQB16M09T9T/IMG_8517.jpeg',
    path: '/home/mini-splits',
  },
];

const BRAND_LOGOS = [
  { name: 'American Standard', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/598240cb-9647-413a-8c21-8fbe7e698418/American_Standard_Logo_Transparent.png' },
  { name: 'Trane HVAC', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/53041d00-ae10-4919-a8e7-f196c549ff17/Trane_Logo_transparent.png' },
  { name: 'Bryant HVAC', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/7bf0b83e-ac90-48d3-9be8-941c965f1314/Bryant_Logo_Transparent.png' },
  { name: 'Mitsubishi Electric', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/46538ed6-5359-437f-af91-83aa7d09db89/Mitsubishi_Logo_transparent.png' },
  { name: 'Carrier HVAC', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/2c7c7dc8-33d5-4a17-8113-8688b23ecee7/Carrier_Logo_transparent.png' },
  { name: 'Daikin', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/4d572a50-aa5c-4255-a181-ff5250db53ac/Daikin_Logo_Transparent.png' },
  { name: 'Fujitsu', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/73c81d49-30f6-44ae-be5c-71b77891047b/Fujitsu_Logo_transparent.png' },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, businessName, colors } = useSiteConfig();

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative pt-20" aria-label="Hero">
        <div className="relative">
          <img
            src={HERO_IMAGE}
            alt={`${businessName} — Commercial & Residential HVAC in Fairfield County CT`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/10" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                          py-14 sm:py-20 min-h-[420px] sm:min-h-[500px]
                          flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl w-full"
            >
              {/* Google Review Badge */}
              <a
                href={reviews.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-white/10 border border-white/20 backdrop-blur-sm
                           mb-6 hover:bg-white/15 transition-colors"
                aria-label={`${reviews.rating} stars — ${reviews.count} Google Reviews`}
              >
                <div className="flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white text-sm font-semibold">
                  {reviews.rating} · <span className="text-amber-300">{reviews.count} Google Reviews</span>
                </span>
              </a>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                Connecticut's Premier Choice for<br />
                <span style={{ color: colors.primaryHex }}>Commercial &amp; Residential</span><br />
                HVAC Solutions
              </h1>

              <p className="text-sm sm:text-base text-white/85 mb-3 font-semibold">Need Service now?</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2
                             px-6 py-3.5 text-white font-bold rounded-xl text-sm
                             shadow-lg transition-all duration-200
                             hover:-translate-y-1 hover:shadow-xl active:scale-95"
                  style={{ backgroundColor: colors.primaryHex }}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Call Us
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2
                             px-6 py-3.5 bg-white text-slate-900 font-bold rounded-xl text-sm
                             shadow-lg whitespace-nowrap transition-all duration-200
                             hover:-translate-y-1 hover:shadow-xl active:scale-95"
                >
                  <Zap className="w-4 h-4 flex-shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                  Emergency Service — 24/7
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <TrustBadges />

      {/* ─── About Strip ─── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Dedicated HVAC Professionals.</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            From emergency service, heating and cooling system replacements, to new construction, we'll handle all your residential and commercial HVAC needs. Trust <em>AIRplus Heating &amp; Cooling</em> to deliver quality work in a timely and professional manner. Please see below for examples of the services we provide.
          </p>
          <a
            href="https://maps.app.goo.gl/dwpT2yatpveXgW7c8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/d0dec2ee-c696-49b4-bcf4-f20772c06901/Google_Reviews.png"
              alt="AIRplus Heating & Cooling Google Reviews"
              className="h-20 mx-auto object-contain hover:opacity-80 transition-opacity"
              loading="lazy"
            />
          </a>
        </div>
      </section>

      {/* ─── 4 Service Category Cards ─── */}
      <section className="py-16 bg-slate-50" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_SECTIONS.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  to={s.path}
                  className="block relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 right-4 text-white font-bold text-xl">{s.title}</h2>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Strip ─── */}
      <section className="py-12 text-white text-center" style={{ backgroundColor: colors.primaryHex }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">Connecticut's HVAC Choice</h2>
          <p className="text-white/90 mb-6 text-lg">
            We're experienced working with residential and commercial clients. Please get in touch and one of our project managers will contact you about beginning the proposal process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              style={{ color: colors.primaryHex }}
            >
              <Wrench className="w-4 h-4" />
              View Our Services
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              {phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* ─── Brands ─── */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-10">Brands we work with</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {BRAND_LOGOS.map((brand) => (
              <img
                key={brand.name}
                src={brand.src}
                alt={brand.name}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reviews ─── */}
      <GoogleReviews />

      {/* ─── Instagram CTA ─── */}
      <div className="py-12" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-extrabold text-white mb-2">Follow us on Instagram</p>
          <p className="text-white/80 mb-6">Stay up to date with our latest projects and tips.</p>
          <a
            href="https://www.instagram.com/airplusheatingcoolingllc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white border-2 border-white transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
          >
            @airplusheatingcoolingllc
          </a>
        </div>
      </div>
    </div>
  );
}
