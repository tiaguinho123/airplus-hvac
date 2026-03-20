import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real copy & images from evolutionairllc.com/cooling-heating-maintenance/
const AC_CHECKLIST = [
  'Drain Lines',
  'Refrigerant Charge',
  'Blower Compartment',
  'Evaporator Coil',
  'Condenser Coil',
];
const BOILER_CHECKLIST = [
  'Water Pressures',
  'Burner Tubes',
  'Water Feeder',
  'Pilots',
  'Controls',
];
const FURNACE_CHECKLIST = [
  'Burner Tubes',
  'Ignition',
  'Flame Sensors',
  'Safeties',
  'Inducer Motor',
];
const HUMIDIFIER_CHECKLIST = [
  'Start-Up',
  'Water Lines',
  'Tray Cleaning',
  'Replacement of Pads/Canisters',
];

export default function PreventativeMaintenancePage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div>
      {/* Banner */}
      <div className="relative pt-20 h-64 md:h-80 overflow-hidden">
        <img
          src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg"
          alt="Evolution Air LLC — Preventative Maintenance in Fairfield County CT"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">Preventative Maintenance</h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-slate-500">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700 font-medium">Preventative Maintenance</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Preventative Maintenance Agreement</h2>
              <div className="w-12 h-1 rounded-full mb-8" style={{ backgroundColor: colors.primaryHex }} />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our maintenance program isn't just for specific customers: it's for everyone. Whether we have done work for you previously or you are looking for the best heating and air maintenance service in the area, we are here for you and we are proud to serve the best maintenance program around.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Not only do you get access to preferred pricing and priority service, but regular maintenance and upkeep of your system can greatly reduce costly repairs, increase efficiency, keep your units in warranty, and even extend the life of your system.
              </p>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold mb-6 mr-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                style={{ backgroundColor: colors.primaryHex }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {phoneFormatted}
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                style={{ borderColor: colors.primaryHex, color: colors.primaryHex }}
              >
                Request An Agreement
              </Link>
            </div>
            <img
              src="https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-11.jpg"
              alt="Evolution Air technician performing preventative maintenance"
              className="w-full rounded-2xl object-cover shadow-lg"
              style={{ maxHeight: '420px' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">What's Included</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-12" style={{ backgroundColor: colors.primaryHex }} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'A/C Tune-Up', items: AC_CHECKLIST, image: 'https://evolutionairllc.com/wp-content/uploads/2020/09/condenser-repair.jpg' },
              { title: 'Boiler Tune-Up', items: BOILER_CHECKLIST, image: 'https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-1.jpg' },
              { title: 'Furnace Tune-Up', items: FURNACE_CHECKLIST, image: 'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-13.jpg' },
              { title: 'Humidifier Service', items: HUMIDIFIER_CHECKLIST, image: 'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg' },
            ].map((section) => (
              <div key={section.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <img src={section.image} alt={section.title} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4" style={{ color: colors.primaryHex }}>{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 text-center">
            <p className="text-slate-600 text-lg">
              Evolution Air has partnered with{' '}
              <strong className="text-slate-900">Best Air Cleaning Services</strong>
              {' '}to offer our customers a <strong>free video duct inspection</strong> and{' '}
              <strong>dryer vent cleaning</strong> with their maintenance agreements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Frequently Asked Questions</h2>
          <div className="w-12 h-1 rounded-full mx-auto mb-12" style={{ backgroundColor: colors.primaryHex }} />
          <div className="space-y-6">
            {[
              {
                q: 'My air conditioner is leaking refrigerant. What should I do?',
                a: 'A refrigerant leak is a serious problem that should be addressed immediately. Contact us and we will dispatch a technician to diagnose and fix the leak, then recharge your system to the correct level.',
              },
              {
                q: 'Why is my air conditioner freezing up?',
                a: 'A frozen A/C is typically caused by low refrigerant, poor airflow from a dirty filter, or a dirty evaporator coil. Turn the system off and call us — running a frozen unit can damage the compressor.',
              },
              {
                q: 'What is the value of preventative maintenance?',
                a: 'Regular maintenance reduces the likelihood of unexpected breakdowns, extends the life of your equipment, keeps your units in warranty, and improves energy efficiency — saving you money in the long run.',
              },
              {
                q: 'How often should I service my HVAC system?',
                a: 'We recommend servicing your heating system in the fall before winter, and your air conditioning system in the spring before summer. Our maintenance agreements automate this with reminder notifications.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
