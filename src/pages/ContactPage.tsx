import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Zap } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function ContactPage() {
  const { phone, phoneFormatted, email, address, colors, businessName, contactFormServices, serviceArea } = useSiteConfig() as any;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative pt-16 h-52 overflow-hidden" style={{ backgroundColor: colors.dark }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Contact Us</h1>
            <p className="text-white/80 text-lg">We're here to help with all your HVAC needs.</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── Contact Info ── */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Contact us using this form or give us a call and we'll be happy to discuss your needs.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${colors.primaryHex}1A` }}>
                    <Phone className="w-5 h-5" style={{ color: colors.primaryHex }} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Call or Text</p>
                    <a href={`tel:${phone}`} className="text-xl font-bold hover:opacity-80 transition-opacity" style={{ color: colors.primaryHex }}>
                      {phoneFormatted}
                    </a>
                    <p className="text-slate-500 text-sm mt-0.5">Mon–Fri 8am–5pm · Emergency Service Available</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${colors.primaryHex}1A` }}>
                    <Mail className="w-5 h-5" style={{ color: colors.primaryHex }} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Email Us</p>
                    <a href={`mailto:${email}`} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      {email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${colors.primaryHex}1A` }}>
                    <MapPin className="w-5 h-5" style={{ color: colors.primaryHex }} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Address</p>
                    <p className="text-slate-600">{address.street}<br />{address.city}, {address.state} {address.zip}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${colors.primaryHex}1A` }}>
                    <Clock className="w-5 h-5" style={{ color: colors.primaryHex }} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Hours</p>
                    <p className="text-slate-600">Mon–Fri: 8am–5pm</p>
                    <p className="text-sm font-semibold mt-1" style={{ color: colors.primaryHex }}>Emergency Service Available</p>
                  </div>
                </div>
              </div>

              {/* Emergency box */}
              <div className="mt-8 p-5 rounded-2xl border"
                style={{ borderColor: `${colors.primaryHex}33`, backgroundColor: `${colors.primaryHex}0D` }}>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4" style={{ color: colors.primaryHex }} />
                  <p className="font-semibold text-sm uppercase tracking-wider" style={{ color: colors.primaryHex }}>Emergency Service</p>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Heating or cooling emergency? Call us immediately at{' '}
                  <a href={`tel:${phone}`} className="font-bold" style={{ color: colors.primaryHex }}>{phoneFormatted}</a>.
                </p>
              </div>

              {/* Service area */}
              {serviceArea && serviceArea.length > 0 && (
                <div className="mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="font-bold text-slate-900 mb-2">Service Area</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {Array.isArray(serviceArea) ? serviceArea.join(', ') : serviceArea}
                  </p>
                </div>
              )}
            </div>

            {/* ── Form ── */}
            <div className="rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm bg-white">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: colors.primaryHex }}>
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-600">We'll get back to you within 1 business hour. For urgent needs, call <a href={`tel:${phone}`} className="font-bold" style={{ color: colors.primaryHex }}>{phoneFormatted}</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* First Name */}
                  <div>
                    <label htmlFor="cp-first" className="block text-sm font-medium text-slate-700 mb-1.5">
                      First Name <span style={{ color: colors.primaryHex }}>*</span>
                    </label>
                    <input id="cp-first" type="text" required autoComplete="given-name" placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition"
                      style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties} />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label htmlFor="cp-last" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Last Name <span style={{ color: colors.primaryHex }}>*</span>
                    </label>
                    <input id="cp-last" type="text" required autoComplete="family-name" placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition"
                      style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties} />
                  </div>
                  {/* Phone */}
                  <div>
                    <label htmlFor="cp-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number <span style={{ color: colors.primaryHex }}>*</span>
                    </label>
                    <input id="cp-phone" type="tel" required autoComplete="tel" placeholder="(555) 555-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition"
                      style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties} />
                  </div>
                  {/* City */}
                  <div>
                    <label htmlFor="cp-city" className="block text-sm font-medium text-slate-700 mb-1.5">Your City</label>
                    <input id="cp-city" type="text" autoComplete="address-level2" placeholder={`${address.city}, ${address.state}`}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition"
                      style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties} />
                  </div>
                  {/* Service */}
                  <div>
                    <label htmlFor="cp-service" className="block text-sm font-medium text-slate-700 mb-1.5">Service Needed</label>
                    <select id="cp-service"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:border-transparent transition"
                      style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties}>
                      <option value="">Select a service...</option>
                      {contactFormServices?.map((s: string) => (
                        <option key={s} value={s.toLowerCase().replace(/\s/g, '-')}>{s}</option>
                      ))}
                    </select>
                  </div>
                  {/* Message */}
                  <div>
                    <label htmlFor="cp-message" className="block text-sm font-medium text-slate-700 mb-1.5">Message (optional)</label>
                    <textarea id="cp-message" rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition resize-none"
                      style={{ '--tw-ring-color': colors.primaryHex } as React.CSSProperties}
                      placeholder="Describe your situation or ask a question..." />
                  </div>
                  <button type="submit"
                    className="w-full py-4 px-8 font-bold text-lg rounded-xl text-white transition-all hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.primaryHex }}>
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                  <p className="text-center text-xs text-slate-400">No spam. We'll only contact you about your request.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
