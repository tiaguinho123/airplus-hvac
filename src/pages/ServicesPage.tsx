import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const BOILER_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/5ce6ba76-6205-43bb-a13f-af5e82e49ea0/boilers.jpg';

const COMMERCIAL_SERVICES = [
  { title: 'Emergency Service', desc: 'AIRplus will immediately consider which replacement parts are needed to address your HVAC emergency. Our team will provide you with fast and effective solutions for your heating and cooling needs. Please call us as soon as possible if there is an emergency.' },
  { title: 'Maintenance', desc: 'Preventative HVAC maintenance will ensure that you\'ll cut down on energy expenses and will regulate temperatures in your commercial property with efficiency.' },
  { title: 'Install', desc: 'We\'re experienced with installing commercial HVAC systems. From single split systems to more complex implementations, we\'re confident our team will provide a great experience for our commercial clients.' },
  { title: 'Replacements', desc: 'Whether you need a whole or partial replacement, we\'ll inspect your systems to provide you with a replacement solution at a reasonable price.' },
  { title: 'Cooling Tower Service', desc: 'We\'ll remove scale deposits, ensure the air flow is running properly, and do a proper inspection on your cooling tower. We\'ll check the line voltage, motor amperage and all aspects of your tower to ensure your systems are operating smoothly.' },
  { title: 'Gas Boiler Service', desc: "We'll read and analyze any error codes, check and clean the burner, and clean all aspects of your gas boiler to ensure that it's functioning properly. Checking probes, strainers, and the condensate system are a part of our service package." },
  { title: 'Oil Boiler Service', desc: "Our techs are ready to take care of your heating systems to ensure they're functioning properly in the colder months. We'll check the oil tank, supply pipe, and make sure your commercial boiler is up to safety regulations." },
  { title: 'Water Source Heat Pumps', desc: "We'll install or provide preventative maintenance on your water source heat pump systems. We have experience working in high rise condominiums with these heating systems in place." },
  { title: 'Rooftop Units', desc: "We'll install commercial rooftop units used to either heat or cool your commercial property. These are the most commonly applied systems for larger office and industrial applications." },
  { title: 'DOAS Units', desc: 'We have experience with dedicated outdoor air systems. DOAS units are effective dehumidifiers and can help mitigate moisture related damage in your commercial property.' },
  { title: 'Powered Exhaust Fans', desc: "Exhaust fans play an important role in your business' building. We'll inspect, service, and install new powered exhaust fans systems in your building." },
];

const RESIDENTIAL_SERVICES = [
  { title: 'Emergency Service', desc: 'If your home HVAC system isn\'t working properly during hotter summer months or below freezing winter months, your best option is to contact a reputable company to deal with your needs as fast as possible. Call us immediately if emergency assistance is needed.' },
  { title: 'Install', desc: "We'll install PTAC or mini-split systems to heat and cool your residential home. We'll assess what the best option is for your property and discuss cost-effective solutions with all of our clients." },
  { title: 'Replacements', desc: 'If your HVAC system is older than 18 years old, it might be time to consider a newer, more efficient system. AIRplus HVAC will inspect your current system and will provide you with the best solution for your residential property.' },
  { title: 'Oil to Gas Conversions', desc: 'The initial costs of switching to a gas furnace are high, but you\'re guaranteed to see return on your investment in short time. Contact us to discuss your conversion options.' },
  { title: 'Heat Pumps', desc: 'Whether its an air source or ground source heat pump, we can inspect your current system and suggest whether a heat pump system will suit your needs.' },
  { title: 'Hydro Air Install Service', desc: 'Hydro-air systems are efficient and could be a good alternative to a more dated forced-air furnace. Upgrading your systems can help you save money in the long run.' },
  { title: 'Boiler Service', desc: "Cut down on your heating costs and ensure that you're using energy efficiently in your home. We'll service your boiler and notify clients if any upgrade is needed due to wear and tear." },
  { title: 'Oil-fired Equipment Service', desc: "Oil-fired systems are older heating solutions that we have experience with servicing. We'll ensure your oil-fired system is running as efficiently as possible." },
  { title: 'Humidifiers', desc: "Add humidity to your residential home with ducted humidifiers or other solutions. We'll install humidifiers to ensure your home has enough moisture in the dry winter season." },
  { title: 'Ductless Splits', desc: 'These mini-split systems operate independently of a central system allowing for a more modular and efficient solution for heating and cooling.' },
  { title: 'Underground Gas Piping', desc: "AIRplus HVAC can install new underground HVAC piping and maintain existing underground distribution systems." },
  { title: 'On Demand Water Heaters', desc: "You can enjoy dependable home comfort with these water heater systems. These heated water solutions warm the air in your home and typically minimize energy costs." },
];

export default function ServicesPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative pt-20 h-56 md:h-72 overflow-hidden">
        <img
          src={BOILER_IMG}
          alt="AIRplus Heating & Cooling — Services"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Services</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Commercial */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 pb-3 border-b-2" style={{ borderColor: colors.primaryHex }}>Commercial</h2>
          <ul className="space-y-6">
            {COMMERCIAL_SERVICES.map((s) => (
              <li key={s.title}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Residential */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 pb-3 border-b-2" style={{ borderColor: colors.primaryHex }}>Residential</h2>
          <ul className="space-y-6">
            {RESIDENTIAL_SERVICES.map((s) => (
              <li key={s.title}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: colors.primaryHex }}
          >
            <Phone className="w-5 h-5" />
            Call Us — {phoneFormatted}
          </a>
        </div>
      </div>

      {/* Get in touch */}
      <div className="relative py-20" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Get in touch with HVAC professionals.</h2>
          <Link
            to="/contact"
            className="inline-block bg-white font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            style={{ color: colors.primaryHex }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
