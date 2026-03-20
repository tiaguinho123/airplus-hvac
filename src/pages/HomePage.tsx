import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone, Star, Zap, Wrench, CheckCircle, ChevronDown, MapPin,
  ShieldCheck, Award, Clock, Users, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';
import GoogleReviews from '../components/GoogleReviews';

const HERO_IMAGE = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/950388d1-ebcd-43b0-ac15-c67621092de3/IMG_2314.jpg';

const SERVICE_CARDS = [
  {
    title: 'Repair & Service',
    img: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233390629-A2F33QSSCEYII880SUSP/IMG_0633.jpg',
    path: '/home/service',
    desc: 'Emergency breakdowns, partial or full repairs — we respond fast.',
  },
  {
    title: 'Maintenance',
    img: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233311757-2XSB1RNV0A22U27MWHM5/IMG_3649.jpg',
    path: '/home/maintenance',
    desc: 'Annual tune-ups that cut energy costs and prevent breakdowns.',
  },
  {
    title: 'Installation',
    img: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233334470-97P5FOW7M35S1U1EXU2E/IMG_4326.jpg',
    path: '/home/installation',
    desc: 'New systems installed right — from single splits to complex builds.',
  },
  {
    title: 'Mini-Splits',
    img: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1647455781270-46XYQ7G16OQB16M09T9T/IMG_8517.jpeg',
    path: '/home/mini-splits',
    desc: 'Ductless zone control — specialty installation and service.',
  },
];

const BRAND_LOGOS = [
  { name: 'American Standard', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/598240cb-9647-413a-8c21-8fbe7e698418/American_Standard_Logo_Transparent.png' },
  { name: 'Trane', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/53041d00-ae10-4919-a8e7-f196c549ff17/Trane_Logo_transparent.png' },
  { name: 'Bryant', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/7bf0b83e-ac90-48d3-9be8-941c965f1314/Bryant_Logo_Transparent.png' },
  { name: 'Mitsubishi Electric', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/46538ed6-5359-437f-af91-83aa7d09db89/Mitsubishi_Logo_transparent.png' },
  { name: 'Carrier', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/2c7c7dc8-33d5-4a17-8113-8688b23ecee7/Carrier_Logo_transparent.png' },
  { name: 'Daikin', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/4d572a50-aa5c-4255-a181-ff5250db53ac/Daikin_Logo_Transparent.png' },
  { name: 'Fujitsu', src: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/73c81d49-30f6-44ae-be5c-71b77891047b/Fujitsu_Logo_transparent.png' },
];

const PROCESS_STEPS = [
  { num: '01', icon: Phone, title: 'Call or Contact Us', desc: 'Call (203) 296-1119 or fill out the form below. For emergencies, we respond as fast as possible.' },
  { num: '02', icon: Users, title: 'Project Manager Reaches Out', desc: 'One of our project managers contacts you to schedule and begin the proposal process.' },
  { num: '03', icon: Wrench, title: 'Expert Technician Arrives', desc: 'Our licensed tech performs a thorough inspection and diagnoses the root cause.' },
  { num: '04', icon: CheckCircle, title: 'Quality Work Done', desc: 'Work completed cleanly and professionally — on time, every time. Follow-up included.' },
];

const STATS = [
  { value: '20+', label: 'Years of Experience', icon: Award },
  { value: '4.9★', label: '32 Google Reviews', icon: Star },
  { value: '100%', label: 'Licensed & Insured', icon: ShieldCheck },
  { value: '24/7', label: 'Emergency Service', icon: Zap },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const { colors } = useSiteConfig();
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full text-left py-5 px-1 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 group-hover:text-inherit transition-colors" style={open ? { color: colors.primaryHex } : undefined}>
          {question}
        </span>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-200"
          style={{ color: colors.primaryHex, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  const { phone, phoneFormatted, reviews, businessName, colors, faqs, serviceAreaTowns } = useSiteConfig() as any;

  return (
    <div>
      {/* ── Emergency Banner ── */}
      <div className="pt-20">
        <div
          className="py-2.5 px-4 text-center text-sm font-bold text-white flex items-center justify-center gap-2"
          style={{ backgroundColor: colors.primaryHex }}
        >
          <Zap className="w-4 h-4 flex-shrink-0" />
          Emergency HVAC Service Available — We Respond Fast
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative" aria-label="Hero">
        <div className="relative min-h-[580px] sm:min-h-[640px] flex items-center">
          <img
            src={HERO_IMAGE}
            alt={`${businessName} — Commercial & Residential HVAC in Fairfield County CT`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-lg">

              {/* Review badge */}
              <a
                href={reviews.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm mb-6 hover:bg-white/20 transition-colors"
              >
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                </span>
                <span className="text-white text-xs font-semibold">{reviews.rating} · {reviews.count} Google Reviews</span>
              </a>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-4">
                Heating &amp; Cooling<br />
                <span style={{ color: colors.primaryHex }}>Done Right.</span>
              </h1>
              <p className="text-white/75 text-base sm:text-lg mb-8 leading-relaxed">
                Licensed HVAC specialists serving Fairfield &amp; New Haven County.
                Commercial and residential — 20+ years of experience.
              </p>

              {/* Primary CTA */}
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 px-8 py-4 text-white font-extrabold rounded-2xl text-lg shadow-xl mb-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl active:scale-95 w-full sm:w-auto justify-center"
                style={{ backgroundColor: colors.primaryHex }}
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                {phoneFormatted}
              </a>

              {/* Secondary ghost */}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-xl border border-white/50 backdrop-blur-sm hover:bg-white/15 transition-all"
                >
                  <Zap className="w-4 h-4" style={{ color: colors.primaryHex }} />
                  Emergency Service — 24/7
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-slate-100 py-8" aria-label="Key stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primaryHex}1A` }}>
                  <Icon className="w-5 h-5" style={{ color: colors.primaryHex }} />
                </div>
                <div>
                  <p className="font-extrabold text-xl text-slate-900 leading-none">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 bg-slate-50" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>What We Do</p>
            <h2 id="services-heading" className="text-3xl font-extrabold text-slate-900">Full-Service HVAC — Commercial &amp; Residential</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CARDS.map((s) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link
                  to={s.path}
                  className="block relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <img src={s.img} alt={s.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-lg mb-1">{s.title}</h3>
                    <p className="text-white/80 text-xs leading-snug">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 transition-all hover:-translate-y-0.5" style={{ borderColor: colors.primaryHex, color: colors.primaryHex }}>
              <Wrench className="w-4 h-4" /> View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works (Process) ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>Simple & Transparent</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">How It Works</h2>
            <p className="text-slate-600 max-w-xl mx-auto">From your first call to a finished job — here's exactly what to expect.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm" style={{ backgroundColor: `${colors.primaryHex}15` }}>
                  <step.icon className="w-7 h-7" style={{ color: colors.primaryHex }} />
                </div>
                <div className="text-xs font-black text-slate-300 mb-1 tracking-widest">{step.num}</div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency CTA ── */}
      <section className="py-12 text-white text-center" style={{ backgroundColor: colors.primaryHex }}>
        <div className="max-w-4xl mx-auto px-4">
          <Zap className="w-10 h-10 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-extrabold mb-3">No Heat? No AC? We Come Today.</h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            HVAC emergency in Fairfield or New Haven County? Call us immediately. We respond fast — any season, any system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 bg-white font-extrabold px-8 py-4 rounded-xl text-lg shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95" style={{ color: colors.primaryHex }}>
              <Phone className="w-5 h-5" /> {phoneFormatted}
            </a>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/10 active:scale-95">
              <Wrench className="w-5 h-5" /> View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trusted Brands ── */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-slate-400 mb-8">Brands We Work With</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {BRAND_LOGOS.map((brand) => (
              <img key={brand.name} src={brand.src} alt={brand.name} className="h-8 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <GoogleReviews />

      {/* ── About Strip ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>About Us</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">20+ Years Serving Connecticut</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                AIRplus was founded by Jeton Krasniqi, who has been in the HVAC industry since 2006, working commercially and industrially with top Connecticut contractors. Today, AIRplus serves both residential and commercial clients across Fairfield &amp; New Haven County from our shop in Bridgeport, CT.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Licensed & Insured HVAC Contractor — CT State Certified',
                  'Commercial & residential — all brands serviced',
                  'Fair, transparent pricing — no surprise fees',
                  'Emergency service available — we respond fast',
                  'Serving Fairfield & New Haven County',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white rounded-xl transition hover:-translate-y-0.5" style={{ backgroundColor: colors.primaryHex }}>
                  <Phone className="w-4 h-4" /> Call Us
                </a>
                <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl border-2 transition hover:-translate-y-0.5" style={{ borderColor: colors.primaryHex, color: colors.primaryHex }}>
                  About AIRplus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1639794547275-KCGI3KZF109158LXR3JL/Boiler+Replacement.jpg"
                alt="AIRplus HVAC technician at work in Connecticut"
                className="rounded-3xl shadow-xl w-full object-cover h-96"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>Common Questions</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-6 py-2">
            {faqs?.map((faq: { question: string; answer: string }) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-slate-500">
            Still have questions?{' '}
            <a href={`tel:${phone}`} className="font-bold transition-opacity hover:opacity-70" style={{ color: colors.primaryHex }}>
              Call us at {phoneFormatted}
            </a>
          </p>
        </div>
      </section>

      {/* ── Service Area ── */}
      {serviceAreaTowns && serviceAreaTowns.length > 0 && (
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>Service Area</p>
              <h2 className="text-2xl font-extrabold text-slate-900">Serving Fairfield &amp; New Haven County, CT</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreaTowns.map((town: string) => (
                <span key={town} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: `${colors.primaryHex}30`, color: colors.primaryHex, backgroundColor: `${colors.primaryHex}08` }}>
                  <MapPin className="w-3.5 h-3.5" />
                  {town}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-slate-500 mt-6">
              Not sure if we cover your area? <a href={`tel:${phone}`} className="font-semibold hover:opacity-70" style={{ color: colors.primaryHex }}>Call us</a> — we'll let you know.
            </p>
          </div>
        </section>
      )}

      {/* ── Instagram CTA ── */}
      <div className="py-10 border-t" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-extrabold text-white mb-2">Follow Us on Instagram</p>
          <p className="text-white/70 mb-5 text-sm">See our latest projects and tips.</p>
          <a
            href="https://www.instagram.com/airplusheatingcoolingllc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white border-2 border-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
          >
            @airplusheatingcoolingllc
          </a>
        </div>
      </div>
    </div>
  );
}
