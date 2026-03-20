import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const INSTALL_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1639794845341-4SV3V1DZ77TB68Q3VOJV/Heat+Pump+Replacement.jpg';

export default function InstallationPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      <div className="relative pt-20 h-56 md:h-72 overflow-hidden">
        <img src={INSTALL_IMG} alt="Most Trusted HVAC Installation Services — Fairfield County, CT" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Most Trusted HVAC Installation Services — Fairfield County, CT</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate max-w-none">
        <p>You might have experienced an uncomfortable summer or winter due to a failing HVAC system. Maybe the heat in your home was too much or too little to handle. Replacing your HVAC system could go a long way in reducing your discomfort.</p>

        <p>Effective HVAC installation services will improve indoor air quality and overall comfort to a great deal. Therefore, consider hiring us to install that unit for you. Some of the types of systems we install for our Bridgeport, CT customers are:</p>

        <h3>Heating and cooling split systems</h3>
        <p>This unit is divided into two separate units, one used for heating and the other for cooling purposes. The system comes with outdoor and indoor units that are easily identifiable.</p>

        <h3>Hybrid split system</h3>
        <p>This system has similar characteristics to those of a heating and cooling split system. It does, however, possess a unique feature. The unit carries a hybrid heating system which helps lower energy costs in your home.</p>

        <h3>Duct free system</h3>
        <p>This type of system allows you to control the temperature of specific areas. Each room will have an individual fan and evaporator unit. Another feature of a duct-free system is that it doesn't need ductwork.</p>

        <h3>Packaged heating and air conditioning system</h3>
        <p>This type of system contains a compressor, condenser, and evaporator all in one unit. It performs both heating and cooling functions in your home.</p>

        <p>Each unit has its benefits. If you require assistance in choosing the best HVAC system suited for your house, contact us today.</p>

        <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">The procedure of an HVAC system installation in your Connecticut business or home</h2>

        <p>Installation of an HVAC system requires great skills and precision. More importantly, you must be a certified technician. The following are some of the steps we follow when mounting your unit.</p>

        <h3>Calculating the load</h3>
        <p>We assess the space needed for your unit by conducting the necessary measurements. Additionally, we must match the size of your home to an appropriate system. Improper calculation and sizing could lead to inefficient operation of the system.</p>

        <h3>Finding a location for the units</h3>
        <p>At Airplus HVAC, we determine the appropriate location to install the elements of your unit. The location depends on the structure of your home.</p>

        <h3>Installation of HVAC components</h3>
        <p>This is where we install your system elements. Some of these elements include:</p>
        <ul>
          <li>Proper furnace installation</li>
          <li>Central air conditioning installation</li>
        </ul>
        <p><em>AIRplus Heating &amp; Cooling</em> will also ensure proper connection of your system to the ductwork and power source.</p>

        <h3>Inspection of the system</h3>
        <p>Once the installation is complete, we inspect and test your system to ascertain that it functions effectively.</p>

        <p>Installing an AC system is crucial if you need to improve the air quality in your home. Choosing a system that suits your home and proper installation will determine the effectiveness of your system. Call us today to have your Bridgeport, CT residential system accurately installed.</p>

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
        <Link to="/home/maintenance" className="inline-flex items-center gap-1 font-bold" style={{ color: colors.primaryHex }}>
          ← Maintenance
        </Link>
        <Link to="/home/mini-splits" className="inline-flex items-center gap-1 font-bold" style={{ color: colors.primaryHex }}>
          Next: Mini-Splits →
        </Link>
      </div>
    </div>
  );
}
