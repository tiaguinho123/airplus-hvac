import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real copy and images from evolutionairllc.com/commercial/
const TABS = [
  {
    id: 'commercial',
    label: 'Commercial',
    title: 'Commercial HVAC',
    content: `Whether you are in need of an upfit, equipment change-out, service call, maintenance contract or diagnostic and design services to resolve chronic temperature, moisture or humidity issues, we have it covered. Evolution Air extends all our residential emergency and preventative maintenance services to commercial customers as well.`,
    image: 'https://evolutionairllc.com/wp-content/uploads/2020/09/condenser-repair.jpg',
  },
  {
    id: 'custom-duct-work',
    label: 'Custom Duct Work',
    title: 'Custom Duct Work',
    content: `As a full-service HVAC company, we take our work to the next level by designing, fabricating, and installing customized setups, including the ductwork. Evolution Air is your expert source for custom ducting and sheet metal services for HVAC projects of all sizes. Our duct systems are fabricated to last for decades without gaps or leaks.`,
    image: 'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg',
  },
  {
    id: 'new-construction',
    label: 'New Construction',
    title: 'New Construction',
    content: `Evolution Air has the experience and expertise to meet the needs of new construction projects of all sizes. Our team of experienced technicians is able to design and install HVAC systems for new construction projects, ensuring that your new building is comfortable and energy efficient from day one.`,
    image: 'https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-3-e1598012087796.jpg',
  },
];

// Brands from evolutionairllc.com/commercial/
const BRANDS = ['Carrier', 'Amana', 'Trane', 'Lennox', 'Bryant', 'York'];

export default function CommercialPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div>
      {/* Banner */}
      <div className="relative pt-20 h-64 md:h-80 overflow-hidden">
        <img
          src="https://evolutionairllc.com/wp-content/uploads/2020/09/condenser-repair.jpg"
          alt="Evolution Air LLC — Commercial HVAC in Fairfield County CT"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">Commercial</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700 font-medium">Commercial</span>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Commercial HVAC Services</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-12" style={{ backgroundColor: colors.primaryHex }} />

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`px-5 py-3 text-sm font-semibold rounded-t-lg transition-colors ${
                  active === i ? 'text-white' : 'text-slate-600 bg-slate-100 hover:text-slate-900'
                }`}
                style={active === i ? { backgroundColor: colors.primaryHex } : {}}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{tab.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{tab.content}</p>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                style={{ backgroundColor: colors.primaryHex }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {phoneFormatted}
              </a>
            </div>
            <img
              src={tab.image}
              alt={tab.title}
              className="w-full rounded-2xl object-cover shadow-lg"
              style={{ maxHeight: '380px' }}
              loading="lazy"
            />
          </div>

          {/* Brands */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Brands We Service & Install</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {BRANDS.map((brand) => (
                <span key={brand} className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 shadow-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
