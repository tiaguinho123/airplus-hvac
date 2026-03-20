import { motion } from 'motion/react';
import { Phone, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';
import GoogleReviews from '../components/GoogleReviews';
import TrustBadges from '../components/TrustBadges';

// Real hero image from evolutionairllc.com
const HERO_IMAGE = 'https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-1.jpg';

// Real 6 services from evolutionairllc.com
const SERVICES = [
  {
    title: 'Residential',
    img: 'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-13.jpg',
    path: '/residential',
    desc: 'Evolution Air has been repairing and installing home air conditioning and heating units for over 10 years – more than enough time to know that when you want service, we need to be there – and we will!',
  },
  {
    title: 'HVAC Contractor',
    img: 'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-11.jpg',
    path: '/about-us',
    desc: 'We are a leading HVAC contractor in the area and have built our reputation for excellence, one job at a time. You can be sure that our technicians will customize the best heating and cooling solutions for your needs.',
  },
  {
    title: 'Commercial',
    img: 'https://evolutionairllc.com/wp-content/uploads/2020/09/condenser-repair.jpg',
    path: '/commercial',
    desc: 'Whether you are in need of an upfit, equipment change-out, service call, maintenance contract or diagnostic and design services to resolve chronic temperature, moisture or humidity issues, we have it covered.',
  },
  {
    title: 'Custom Duct Work',
    img: 'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg',
    path: '/commercial',
    desc: 'As a full-service HVAC company, we take our work to the next level by designing, fabricating, and installing customized setups, including the ductwork. Evolution Air is your expert source for custom ducting.',
  },
  {
    title: 'Repair Services',
    img: 'https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-3-e1598012087796.jpg',
    path: '/residential',
    desc: 'Do you need home furnace or air conditioning repair services? No problem. We offer same-day service in many cases. We extend our emergency commercial services to businesses as well.',
  },
  {
    title: 'Preventative Maintenance',
    img: 'https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-1.jpg',
    path: '/preventative-maintenance',
    desc: "Our maintenance program isn't just for specific customers: it's for everyone. Regular maintenance can greatly reduce costly repairs, increase efficiency, and extend the life of your system.",
  },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, businessName, colors } = useSiteConfig();

  return (
    <div>
      {/* ─── Hero ─────────────────────────────────────────── */}
      {/* pt-20 = fixed navbar height (h-20 = 80px) */}
      <section className="relative pt-20" aria-label="Hero">

        {/* Container grows with content; image is absolute background */}
        <div className="relative">

          {/* Background image — fills parent absolutely */}
          <img
            src={HERO_IMAGE}
            alt={`${businessName} — Heating & Air Conditioning Stamford CT`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/10" />

          {/* Content layer — relative so it drives the container height */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                          py-14 sm:py-20
                          min-h-[420px] sm:min-h-[500px]
                          flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl w-full"
            >
              {/* Google Review badge */}
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

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                Fairfield County's Trusted Provider
                <br />
                <span style={{ color: colors.primaryHex }}>of Best-in-Class HVAC Solutions</span>
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-white/85 mb-8 leading-relaxed">
                Full-service HVAC company based in Stamford, CT. Fully licensed &amp; insured.
                Serving Fairfield &amp; Westchester County. Call today for a free estimate!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/preventative-maintenance"
                  className="inline-flex items-center justify-center gap-2
                             px-6 py-3.5 text-white font-bold rounded-xl text-sm
                             shadow-lg transition-all duration-200
                             hover:-translate-y-1 hover:shadow-xl active:scale-95"
                  style={{ backgroundColor: colors.primaryHex }}
                >
                  <Calendar className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Request A Maintenance Agreement
                </Link>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2
                             px-6 py-3.5 bg-white text-slate-900 font-bold rounded-xl text-sm
                             shadow-lg whitespace-nowrap transition-all duration-200
                             hover:-translate-y-1 hover:shadow-xl active:scale-95"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                  {phoneFormatted}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <TrustBadges />

      {/* ─── About ─── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>About Us</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">EVOLUTION AIR LLC</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Evolution Air LLC is a tight-knit group of HVAC professionals with over <strong>100 years of combined experience</strong>. We are a full-service HVAC company based out of Stamford, CT.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Our company is fully licensed &amp; insured in CT, offering only the highest quality workmanship and competitive pricing. We proudly service Fairfield &amp; Westchester County.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We have satisfied customers in Greenwich, Stamford, Darien, New Canaan, and more! No job is too small – call today for a free estimate for any replacement or new installation!
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center font-bold transition-all duration-200 hover:gap-2 gap-1"
                style={{ color: colors.primaryHex }}
              >
                Learn More About Us <span className="transition-transform duration-200">→</span>
              </Link>
            </div>
            <img
              src="https://evolutionairllc.com/wp-content/uploads/2019/11/1.jpg"
              alt="Evolution Air LLC team"
              className="w-full rounded-2xl object-cover shadow-lg"
              style={{ maxHeight: '400px' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-20 bg-slate-50" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="text-3xl font-extrabold text-slate-900 mb-3">OUR SERVICES</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primaryHex }} aria-hidden="true" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">{svc.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <Link
                    to={svc.path}
                    className="inline-flex items-center gap-1 text-sm font-bold transition-all duration-200 hover:gap-2"
                    style={{ color: colors.primaryHex }}
                  >
                    Learn More <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Strip ─── */}
      <section className="py-10 text-white text-center" style={{ backgroundColor: colors.primaryHex }}>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg font-semibold mb-4">
            Want to learn more about our Preventative Maintenance Program? Why not visit our contact page, we would love to chat with you!
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-white font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            style={{ color: colors.primaryHex }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ─── Reviews ─── */}
      <GoogleReviews />

      {/* ─── Emergency CTA ─── */}
      <div className="py-12" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-extrabold text-white mb-2">24 Hour Emergency Service</p>
          <p className="text-white/80 mb-6">No heat or cooling? We respond fast — any time of day or night.</p>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold text-white border-2 border-white transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
          >
            <Phone className="w-5 h-5" />
            Emergency Call 24/7 — {phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}
