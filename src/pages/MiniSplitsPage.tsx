import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const MINISPLIT_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1647455781270-46XYQ7G16OQB16M09T9T/IMG_8517.jpeg';

export default function MiniSplitsPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      <div className="relative pt-20 h-56 md:h-72 overflow-hidden">
        <img src={MINISPLIT_IMG} alt="We are experts in mini-split installations" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">We are experts in mini-split installations</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate max-w-none">
        <p>Have you been exploring different types of HVAC systems wondering which one to choose? Well, you could consider picking a ductless mini-split system. Why? It is a system that will allow you to control the temperature of the different rooms in your home.</p>

        <p>You could adjust the temperature in your bedroom to read higher than the one in your living room. At <em>AIRplus Heating &amp; Cooling</em>, we have skilled experts who can install an effective mini-split system in your home.</p>

        <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-3">We are Connecticut's experts in:</h2>
        <ul>
          <li>Mini-splits installations and replacements</li>
          <li>Mini-splits maintenance and service</li>
          <li>Mini-splits repairs and diagnostics</li>
        </ul>

        <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-3">Components of a mini-split system</h2>
        <p>A mini-split system is composed of the following:</p>
        <ul>
          <li>Outdoor compressor – it is responsible for heat distribution</li>
          <li>Indoor evaporator - it cools the air</li>
        </ul>
        <p>The two components are connected by a line tubing that carries the cold refrigerant inside and the hot refrigerant outside the house.</p>

        <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-3">Benefits of mini-split systems</h2>

        <h3>They are efficient</h3>
        <p>Mini-split systems allow you to adjust the temperature of various rooms separately. Consider a situation where people in your household prefer different levels of temperature. With a mini-split system, everyone will adjust the temperature to suit their needs.</p>

        <h3>Saves energy</h3>
        <p>Unlike other HVAC systems, mini-splits don't have ducts. Therefore, they conserve energy often lost through ducts. Did you know that heat lost in the duct is responsible for more than 30% of energy consumption for air conditioning? At <em>AIRplus Heating &amp; Cooling</em>, we install a system that helps you save energy while performing optimally.</p>

        <h3>Easy to install</h3>
        <p>Although you still need an expert to do the setup, mini-split systems do not require a complex installation process. The connection between the outdoor and indoor unit only requires a simple procedure. It does not take an expert long time to install the system for your home, ensuring that you enjoy the best climate controls for your home.</p>

        <h3>Budget-friendly</h3>
        <p>Mini-splits are affordable and easy to maintain. If you are looking to install a pocket-friendly system in your house, get in touch with us today, and we will deliver.</p>

        <p>When it comes to installations or repair for mini-splits systems, we recommend hiring an expert. Usually, look for licenses, permits, and trade certifications from the company you want to hire. Mini-split systems are crucial when it comes to saving energy costs. Additionally, they are small in size and don't require a lot of space.</p>

        <p>If you are looking to install a mini-split system in your Bridgeport, CT residence, talk to us. We are not just trade experts in HVAC systems. We have specialized training in mini-splits, installations, repairs, and diagnostics. More importantly, we are a licensed, insured, and bonded company. Call us today.</p>

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

      <div className="flex justify-start max-w-4xl mx-auto px-4 pb-8">
        <Link to="/home/installation" className="inline-flex items-center gap-1 font-bold" style={{ color: colors.primaryHex }}>
          ← Installation
        </Link>
      </div>
    </div>
  );
}
