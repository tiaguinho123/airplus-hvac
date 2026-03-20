import { MapPin, Phone, Mail } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const { phone, phoneFormatted, email, address, colors } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative pt-20 h-56 md:h-72 overflow-hidden bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Get in touch with HVAC professionals.</h1>
            <p className="text-white/80 text-lg">We're confident we'll provide exceptional service at pricing within your means.</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Contact us using this form or give us a call and we'll be happy to discuss your needs.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primaryHex + '1A' }}>
                  <MapPin className="w-5 h-5" style={{ color: colors.primaryHex }} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Address</p>
                  <p className="text-slate-600">{address.street}<br />{address.city}, {address.state}<br />{address.zip}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primaryHex + '1A' }}>
                  <Phone className="w-5 h-5" style={{ color: colors.primaryHex }} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone</p>
                  <a href={`tel:${phone}`} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                    {phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primaryHex + '1A' }}>
                  <Mail className="w-5 h-5" style={{ color: colors.primaryHex }} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email</p>
                  <a href={`mailto:${email}`} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="mt-10 p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="font-bold text-slate-900 mb-2">Service Area</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We service Fairfield County, Westport, Weston, Easton, Norwalk, Stamford, Greenwich, Darien, Trumbull, Shelton in Connecticut.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
