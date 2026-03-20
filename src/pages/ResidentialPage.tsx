import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real copy and images from evolutionairllc.com/residential/
const TABS = [
  {
    id: 'service-installation',
    label: 'Service & Installation',
    title: 'Service & Installation',
    content: `When you turn on your heating or air-conditioning you want it to WORK. If your units are unreliable, inefficient, or downright unresponsive, we can help. Evolution Air has been repairing and installing home air conditioning and heating units for over 10 years – more than enough time to know that when you want service, we need to be there – and we will!`,
    image: 'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-13.jpg',
  },
  {
    id: 'emergency-service',
    label: 'Emergency Service',
    title: 'Help...I Really Need Somebody!',
    content: `Do you need home furnace or air conditioning repair services? No problem. We offer same-day service in many cases. Can't get home for a service appointment until the evening? We also offer extended winter and summer hours for emergencies. We know you can't control when your air conditioner or central heating will decide to go on the fritz. We even take appointments on holidays and weekends. We encourage all our customers to make use of preventative maintenance plans to reduce the likelihood of an inopportune systems failure.`,
    image: 'https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-3-e1598012087796.jpg',
  },
  {
    id: 'preventative-maintenance',
    label: 'Preventative Maintenance',
    title: 'Heating & Air Conditioning Maintenance',
    content: `Our maintenance program isn't just for specific customers: it's for everyone. Whether we have done work for you previously or you are looking for the best heating and air maintenance service in the area, we are here for you and we are proud to serve the best maintenance program around. Not only do you get access to preferred pricing and priority service, but regular maintenance and upkeep of your system can greatly reduce costly repairs, increase efficiency, keep your units in warranty, and even extend the life of your system. Give us a call today for more information on the additional benefits of our amazing maintenance program. If you're looking for one of CT/NY's best local HVAC companies, you've landed in the right spot!`,
    image: 'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg',
  },
];

export default function ResidentialPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div>
      {/* Banner */}
      <div className="relative pt-20 h-64 md:h-80 overflow-hidden">
        <img
          src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-11.jpg"
          alt="Evolution Air LLC — Residential HVAC in Fairfield County CT"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">Residential</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700 font-medium">Residential</span>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">We Offer a Vast Array of Top-Notch HVAC Services</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-12" style={{ backgroundColor: colors.primaryHex }} />

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-0">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`px-5 py-3 text-sm font-semibold rounded-t-lg transition-colors -mb-px border-b-2 ${
                  active === i ? 'text-white border-transparent' : 'text-slate-600 border-transparent hover:text-slate-900 bg-slate-100'
                }`}
                style={active === i ? { backgroundColor: colors.primaryHex } : {}}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
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

          {/* CTA Banner */}
          <div className="mt-16 rounded-2xl p-8 text-center text-white" style={{ backgroundColor: colors.primaryHex }}>
            <p className="text-lg font-semibold mb-4">
              An Ounce of Prevention... Costs much less than emergency repairs of your HVAC system. Learn more about our Preventative Maintenance Program.
            </p>
            <Link
              to="/preventative-maintenance"
              className="inline-block bg-white font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              style={{ color: colors.primaryHex }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
