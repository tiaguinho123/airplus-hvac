import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const MAINTENANCE_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1639800500431-JAQPQPGASWS4JU599JJT/Maintenance.jpg';

export default function MaintenancePage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      <div className="relative pt-20 h-56 md:h-72 overflow-hidden">
        <img src={MAINTENANCE_IMG} alt="Preventive Maintenance for HVAC Units — Fairfield County, CT" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Preventive Maintenance for HVAC Units — Fairfield County, CT</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate max-w-none">
        <p>Have you recently had an HVAC system installed in your home? If yes, you might need to consider performing preventive maintenance on the unit. Why? Maintaining your system will help you cut repair or replacement costs. Additionally, it will help your unit last longer. Following a maintenance schedule also ensures that your warranty stays intact.</p>

        <p>Our team is well equipped to perform maintenance on your HVAC unit. If you need preventive maintenance, do not hesitate to call us today. Some of the services we offer include the following.</p>

        <ul>
          <li>Cleaning and replacement of air filters to improve energy efficiency</li>
          <li>Inspection and cleaning of outdoor and indoor appliances to get rid of dirt and other debris</li>
          <li>Checking for leaks in your unit</li>
          <li>Inspection and replacement of thermostat batteries to optimize temperature and system performance</li>
          <li>Cleaning and examination of water drain to make sure there is no obstruction</li>
          <li>Replacement of worn-out pulleys and belts</li>
          <li>Cleaning of condensers and evaporator coils</li>
        </ul>

        <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Importance of preventive maintenance for your unit in Connecticut</h2>

        <p>Think about the inconvenience your air conditioner would cause when it broke down at the onset of summer. You might not be financially prepared to install a new unit. Therefore, it is important to regularly maintain your system. The following are some of the benefits of preventive maintenance.</p>

        <h3>Saves money</h3>
        <p>Maintaining your HVAC system will help you reduce your energy bills. How? By ensuring your system runs efficiently. Additionally, preventive maintenance will extend your unit's life, helping you save installation and repair costs. Invest in our maintenance services, to save a coin!</p>

        <h3>Improves air quality</h3>
        <p>If you have asthma or other respiratory issues, you should consider investing in maintenance services. Our preventive services will improve your air quality by getting rid of mold, pollen, dust, and other allergens. Maintenance ensures that the cold or warm air pumping through your vents is clean and adequately filtered. <em>AIRplus HVAC</em> services will go a long way to ensure you get quality air.</p>

        <h3>Keeps your household safe</h3>
        <p>Think about coming back home to find frozen or burst pipes after your travels. It would cause major inconveniences to you and your loved ones. The cost of repairing that damage is most likely to be high.</p>
        <p>Moreover, taking preventive measures will safeguard you and your family from exposure to dangerous substances like carbon monoxide. This gas could cause potential health complications when inhaled. At <em>AIRplus Heating &amp; Cooling</em>, we will make your safety a priority.</p>

        <p>The performance of preventive maintenance to your HVAC system is crucial to its lifespan. It will also ensure your safety and cut costs. If you need preventative HVAC maintenance, contact us today.</p>

        <div className="mt-10 text-center not-prose">
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

      <div className="flex justify-between max-w-4xl mx-auto px-4 pb-8">
        <Link to="/home/service" className="inline-flex items-center gap-1 font-bold" style={{ color: colors.primaryHex }}>
          ← Services
        </Link>
        <Link to="/home/installation" className="inline-flex items-center gap-1 font-bold" style={{ color: colors.primaryHex }}>
          Next: Installation →
        </Link>
      </div>
    </div>
  );
}
