import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real copy from evolutionairllc.com/about-us/
const DIFFERENTIATORS = [
  'ONE CALL FOR ALL — Residential, Commercial, Industrial & Institutional',
  'Over 100 years of combined HVAC experience',
  'Full-service: Sales, Service & Installation in one call',
  'Licensed & insured in CT — serving Fairfield & Westchester County since 2010',
  'Specialists in retrofits, new construction, and custom duct work',
  'All major brands: Carrier, Amana, Trane, Lennox, Bryant, York',
  '24-Hour Emergency Service — including holidays and weekends',
  'Transparent pricing — free estimates for any replacement or installation',
];

export default function AboutPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div>
      {/* Banner */}
      <div className="relative pt-20 h-64 md:h-80 overflow-hidden">
        <img
          src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-11.jpg"
          alt="Evolution Air LLC — About Us"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">About Us</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700 font-medium">About Us</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Text */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Evolution Air LLC</h2>
              <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: colors.primaryHex }} />

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Evolution Air LLC is a tight-knit group of HVAC professionals with over <strong>100 years of combined experience</strong>. We are a full-service HVAC company based out of Stamford, CT, fully licensed & insured.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We specialize in retrofits and maintaining equipment for residential, commercial, industrial, and institutional sectors throughout Fairfield & Westchester County.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our mission is to be a leading HVAC contractor in the area, building our reputation for excellence one job at a time. You can be sure that our technicians will be able to customize the best heating and cooling solutions for your specific needs.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed font-medium italic" style={{ color: colors.primaryHex }}>
                "If you're not comfortable, we're not comfortable."
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">What Sets Us Apart:</h3>
              <ul className="space-y-3 mb-10">
                {DIFFERENTIATORS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                style={{ backgroundColor: colors.primaryHex }}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Us: {phoneFormatted}
              </a>
            </motion.div>

            {/* Right — Photos & Stats */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <img
                src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg"
                alt="Evolution Air LLC technicians at work in Fairfield County"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ maxHeight: '360px' }}
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <p className="text-4xl font-extrabold mb-1" style={{ color: colors.primaryHex }}>100+</p>
                  <p className="text-slate-600 text-sm font-medium">Years Combined Experience</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                  <p className="text-4xl font-extrabold mb-1" style={{ color: colors.primaryHex }}>15+</p>
                  <p className="text-slate-600 text-sm font-medium">Years Serving Fairfield & Westchester</p>
                </div>
              </div>
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: colors.dark }}>
                <h4 className="font-bold text-lg mb-2">Fully Licensed & Insured</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Evolution Air is a fully licensed and insured HVAC contractor in Connecticut. We carry full liability insurance and workers' compensation — documentation available upon request.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://evolutionairllc.com/wp-content/uploads/2019/11/1.jpg"
              alt="Evolution Air LLC team"
              className="w-full rounded-2xl object-cover shadow-lg"
              style={{ maxHeight: '400px' }}
              loading="lazy"
            />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Commitment</h2>
              <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: colors.primaryHex }} />
              <p className="text-slate-600 leading-relaxed mb-6">
                We are a leading HVAC contractor in the area and have built our reputation for excellence, one job at a time. Whether you need residential service, commercial HVAC work, or a full new installation, we approach every project with the same attention to detail.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We focus on long-term equipment life and energy efficiency, not on being the lowest bidder. Our technicians are trained, licensed, and committed to leaving your property clean and your system working.
              </p>
              <Link
                to="/contact-us"
                className="inline-block font-bold px-8 py-4 rounded-xl text-white"
                style={{ backgroundColor: colors.primaryHex }}
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
