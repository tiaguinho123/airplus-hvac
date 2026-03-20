import { motion } from 'motion/react';
import { Phone, CheckCircle, Wrench, Zap, ArrowRight, Building2, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const BOILER_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/5ce6ba76-6205-43bb-a13f-af5e82e49ea0/boilers.jpg';

const COMMERCIAL_SERVICES = [
  { title: 'Emergency Service', icon: Zap, desc: 'Fast response for commercial HVAC emergencies — heating or cooling. We identify the issue and source replacement parts immediately.' },
  { title: 'Preventive Maintenance', icon: CheckCircle, desc: 'Regular maintenance cuts energy costs and prevents breakdowns. We keep your commercial systems running efficiently year-round.' },
  { title: 'Installation', icon: Wrench, desc: 'From single-split systems to complex multi-zone builds. We handle commercial installs from assessment through commissioning.' },
  { title: 'Replacements', icon: CheckCircle, desc: 'Full or partial system replacement with transparent pricing. We inspect first and recommend the most cost-effective solution.' },
  { title: 'Cooling Tower Service', icon: Wrench, desc: 'Scale removal, airflow inspection, line voltage checks, motor amperage testing — full cooling tower service packages.' },
  { title: 'Gas Boiler Service', icon: Wrench, desc: 'Error code analysis, burner cleaning, probe/strainer checks, and condensate system inspection for gas boilers.' },
  { title: 'Oil Boiler Service', icon: Wrench, desc: 'Oil tank and supply pipe inspection, safety compliance checks, and thorough boiler servicing for commercial properties.' },
  { title: 'Water Source Heat Pumps', icon: CheckCircle, desc: 'Installation and preventive maintenance for water source heat pump systems. Experienced in high-rise condominium applications.' },
  { title: 'Rooftop Units', icon: Building2, desc: 'Commercial RTU installation for heating and cooling in office, retail, and industrial properties.' },
  { title: 'DOAS Units', icon: Wrench, desc: 'Dedicated outdoor air systems for effective dehumidification and moisture control in commercial buildings.' },
  { title: 'Powered Exhaust Fans', icon: Wrench, desc: 'Inspection, service, and installation of powered exhaust fan systems to maintain proper ventilation in your facility.' },
];

const RESIDENTIAL_SERVICES = [
  { title: 'Emergency Service', icon: Zap, desc: 'HVAC down in extreme heat or cold? Call us immediately. We respond quickly to get your home comfortable again.' },
  { title: 'Installation', icon: Wrench, desc: 'PTAC and mini-split system installation. We assess your property and recommend the most cost-effective heating and cooling solution.' },
  { title: 'Replacements', icon: CheckCircle, desc: "System over 18 years old? We'll inspect it and recommend the best replacement — efficient, properly sized, and priced fairly." },
  { title: 'Oil to Gas Conversions', icon: Wrench, desc: "Higher upfront cost, long-term savings. We handle the full conversion and walk you through your options." },
  { title: 'Heat Pumps', icon: CheckCircle, desc: "Air source or ground source — we assess your current system and advise whether a heat pump fits your home." },
  { title: 'Hydro Air Install & Service', icon: Wrench, desc: "An efficient alternative to forced-air systems. Upgrading can lower energy costs and improve home comfort significantly." },
  { title: 'Boiler Service', icon: Wrench, desc: "Reduce heating costs and keep your home safe. We service boilers and notify you of any wear that needs attention." },
  { title: 'Oil-Fired Equipment', icon: Wrench, desc: "Experienced with older oil-fired heating systems. We ensure yours runs as efficiently and safely as possible." },
  { title: 'Humidifiers', icon: CheckCircle, desc: 'Ducted humidifier installation to keep proper moisture levels in your home during dry winter months.' },
  { title: 'Ductless Mini-Splits', icon: CheckCircle, desc: 'Independent zone heating and cooling — efficient, modern, and flexible. We install and service all major brands.' },
  { title: 'Underground Gas Piping', icon: Wrench, desc: 'New underground gas line installation and maintenance of existing distribution systems for residential properties.' },
  { title: 'On-Demand Water Heaters', icon: Wrench, desc: 'Dependable hot water on demand. Energy-efficient systems that reduce costs and provide consistent comfort.' },
];

export default function ServicesPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* ── Page Banner ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={BOILER_IMG} alt="AIRplus HVAC Services" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end max-w-7xl mx-auto px-6 sm:px-8 pb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Services</h1>
          <p className="text-white/75 mt-2 text-base">Commercial &amp; Residential — All Brands</p>
        </div>
      </div>

      {/* ── Commercial ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primaryHex}15` }}>
              <Building2 className="w-5 h-5" style={{ color: colors.primaryHex }} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Commercial Services</h2>
              <p className="text-slate-500 text-sm">For offices, retail, industrial, and multi-unit buildings</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMMERCIAL_SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${colors.primaryHex}12` }}>
                  <s.icon className="w-4 h-4" style={{ color: colors.primaryHex }} />
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Residential ── */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primaryHex}15` }}>
              <Home className="w-5 h-5" style={{ color: colors.primaryHex }} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Residential Services</h2>
              <p className="text-slate-500 text-sm">For homeowners across Fairfield &amp; New Haven County</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESIDENTIAL_SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${colors.primaryHex}12` }}>
                  <s.icon className="w-4 h-4" style={{ color: colors.primaryHex }} />
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 text-center text-white" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Ready to Get Started?</p>
          <h2 className="text-3xl font-extrabold mb-4">Talk to an HVAC Professional</h2>
          <p className="text-slate-400 mb-8">Call us or send a message and a project manager will follow up to schedule your service.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: colors.primaryHex }}>
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white border border-white/20 text-base hover:bg-white/10 transition">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
