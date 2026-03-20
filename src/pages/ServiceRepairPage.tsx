import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const REPAIR_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1639861758645-13EL4F5JSCJ6OP6FL2U6/AIRplus+HVAC+about.jpg';

export default function ServiceRepairPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      <div className="relative pt-20 h-56 md:h-72 overflow-hidden">
        <img src={REPAIR_IMG} alt="Reliable HVAC Services — Fairfield County, CT" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Reliable HVAC Services — Fairfield County, CT</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate max-w-none">
        <p>Think about surviving through summer with a faulty air conditioner or a faulty furnace in winter. It must be hectic. However, with the right repair services, you will be able to enjoy some cool air amidst the heatwave. Consider hiring our services today to get your air conditioner repaired. Below are some of the signs that could indicate a need for HVAC repair services.</p>

        <ul>
          <li>Higher electricity bills</li>
          <li>You notice a musty odor</li>
          <li>You hear strange noisy sounds</li>
          <li>Absence of cool or warm air</li>
          <li>Your house fails to maintain the temperature set on the thermostat</li>
        </ul>

        <p>If you experience some of the above signs, it might be time to call in our experienced company. We will perform a thorough inspection of your unit to identify the root of the breakdown.</p>

        <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Our Fairfield County, CT HVAC services include:</h2>

        <h3>Furnace repair</h3>
        <p>If you suspect that your furnace is causing your system to malfunction, consider hiring our professionals to identify the problem. We will inspect and repair some of the following units.</p>

        <h3>Thermostats</h3>
        <p>Is the temperature of your house lower than what you set on the thermostat? Well, it might indicate a defect in your system. It could be that your thermostat is malfunctioning, causing inaccurate readings. Our furnace repair services will cater to your repairs.</p>

        <h3>Air filters</h3>
        <p>How is the airflow in your home? Are you experiencing little or no air from your vents? Well, it could be that the air filters in your system are dirty and clogged. This could cause your system to overwork, fail, and most certainly cause you high bills. However, our professionals will inspect your air filters and replace them to prevent further damage.</p>

        <h3>Air conditioner repairs</h3>
        <p>We repair all types of air conditioning equipment, including filters, condenser units, condenser coils, evaporator coils, and many other problems.</p>

        <h3>Water leaks</h3>
        <p>You might notice moisture collecting around your AC unit. The cause of this could be a blocked drain hole or a defective condensation pump. When the condensed water fails to exit the unit, the water begins leaking. Additionally, mold and mildew might form, clogging the AC system.</p>
        <p>At <em>AIRplus Heating &amp; Cooling</em>, we have a skilled and reliable team that could restore the normal functioning of your air conditioner. Therefore, if you have a leaking AC system don't hesitate to contact us today.</p>

        <h3>Humidity control</h3>
        <p>There could be high levels of humidity in your home. These humid conditions could prove uncomfortable and also cause respiratory problems. Luckily, our team of experts is skilled when it comes to air conditioner repair. Our personnel could check the following aspects to determine the problem.</p>
        <ul>
          <li>Evaporator coils</li>
          <li>Fan speed</li>
          <li>Refrigerant charge</li>
        </ul>
        <p>Our <em>AIRplus Heating &amp; Cooling</em> repair services will go a long way in helping you save on replacement costs. We have a diligent and dedicated team that will act in your best interests to ensure your system is working flawlessly. For all your HVAC repairs, get in touch with us today.</p>

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

      <div className="text-center py-6">
        <Link to="/home/maintenance" className="inline-flex items-center gap-1 font-bold" style={{ color: colors.primaryHex }}>
          Next: Maintenance →
        </Link>
      </div>
    </div>
  );
}
