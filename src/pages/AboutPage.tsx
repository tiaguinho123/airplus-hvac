import { Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

const ABOUT_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1639794547275-KCGI3KZF109158LXR3JL/Boiler+Replacement.jpg';

export default function AboutPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative pt-20 h-56 md:h-72 overflow-hidden">
        <img src={ABOUT_IMG} alt="AIRplus Heating & Cooling — About Us" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">About Us</h1>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none prose-lg">
            <p>We are a growing HVAC business specializing in both commercial and residential fields. We were founded in Shelton, CT and our shop is currently located in Bridgeport, CT. Our location makes it easy to provide fast and reliable service in Fairfield &amp; New Haven counties.</p>

            <p>Our mission is to deliver high-quality service. We take pride in our workmanship and we make sure that we won't rest until you are satisfied with our work. We ensure that each job is done right the first time and that we are always on time and on budget.</p>

            <p>We take our customer loyalty seriously and ensure satisfaction by our fair, transparent pricing, our stellar customer service and our exceptional work ethic.</p>

            <p>Jeton Krasniqi, the owner and founder of <em>AIRplus</em>, has been in the industry since 2006, working in the commercial and industrial field, with one of the top companies in Connecticut. His work gained recognition and he began to build trust and a customer base. <em>AIRplus Heating &amp; Cooling</em> was his dream since his HVAC career began and providing a service with pride and honor was something he knew he could do. Through his impact and success, the idea of branching out and starting his own company was realized.</p>

            <p>A consummate family man himself, Jeton understands the needs of his community and continues to be a trusted voice in Connecticut. Jeton and his employees offer reliable, professional and honest service. His top priority is making <em>AIRplus</em> your go-to call for all your HVAC needs and making <em>AIRplus</em> one of the top companies in Fairfield County.</p>

            <p>Making our customers happy is what we strive to do. Hearing and reading their positive feedback and pleasant phone calls makes us proud and we're honored that our customers continue to trust in us and in our work. Take a look at some of our feedback and reviews on our site, and on our{' '}
              <a href="https://www.facebook.com/AIRplus-Heating-Cooling-Llc-1848387895212982/" target="_blank" rel="noopener noreferrer">Facebook</a>{' '}
              and{' '}
              <a href="https://www.instagram.com/airplusheatingcoolingllc/" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Let's Work Together</h2>
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
      </section>
    </div>
  );
}
