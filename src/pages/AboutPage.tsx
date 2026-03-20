import { motion } from 'motion/react';
import { Phone, CheckCircle, Award, Users, Heart, Zap, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';

const ABOUT_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1639794547275-KCGI3KZF109158LXR3JL/Boiler+Replacement.jpg';
const VANS_IMG = 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/950388d1-ebcd-43b0-ac15-c67621092de3/IMG_2314.jpg';

const VALUES = [
  { icon: Award, title: '20+ Years of Experience', desc: 'Jeton Krasniqi has been in the HVAC industry since 2006, working with top commercial and industrial contractors across Connecticut.' },
  { icon: CheckCircle, title: 'Licensed & Insured', desc: 'Fully licensed and insured CT HVAC contractor. Every job is done right, on time, and on budget — no exceptions.' },
  { icon: Users, title: 'Community First', desc: 'A family man and community member, Jeton built AIRplus on trust. Our customers call us back because we earned it.' },
  { icon: Heart, title: 'Work Done With Pride', desc: "We won't rest until you're satisfied. Fair pricing, honest recommendations, and exceptional workmanship every single time." },
];

export default function AboutPage() {
  const { phone, phoneFormatted, colors, facebookUrl, instagramUrl } = useSiteConfig() as any;

  return (
    <div className="pt-20">

      {/* ── Page Banner ── */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={VANS_IMG} alt="AIRplus Heating & Cooling — About Us" className="absolute inset-0 w-full h-full object-cover object-center" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/40" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end max-w-7xl mx-auto px-6 sm:px-8 pb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>Our Story</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Built on Trust.<br />Backed by Experience.</h1>
          <p className="text-white/70 mt-3 text-base max-w-lg">AIRplus Heating &amp; Cooling — Bridgeport, CT — Licensed HVAC for Fairfield &amp; New Haven County.</p>
        </div>
      </div>

      {/* ── Story Section ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>About AIRplus</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Growing From Shelton to Bridgeport — Serving All of CT</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We are a growing HVAC business specializing in both commercial and residential fields. Founded in Shelton, CT, our shop is now located in Bridgeport — giving us easy access to provide fast service across Fairfield &amp; New Haven County.
                </p>
                <p>
                  Our mission is to deliver high-quality service on every job. We take pride in our workmanship and won't rest until you're fully satisfied. Every job is done right the first time — on time and on budget.
                </p>
                <p>
                  We take customer loyalty seriously. Fair and transparent pricing, stellar communication, and an exceptional work ethic are the foundation of everything we do.
                </p>
              </div>
              <div className="mt-8 flex gap-3 flex-wrap">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white rounded-2xl shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: colors.primaryHex }}
                >
                  <Phone className="w-4 h-4" /> {phoneFormatted}
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-2xl border-2 transition hover:-translate-y-0.5"
                  style={{ borderColor: colors.primaryHex, color: colors.primaryHex }}
                >
                  <Zap className="w-4 h-4" />
                  Emergency Service
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src={ABOUT_IMG}
                alt="AIRplus HVAC technician at work"
                className="rounded-3xl shadow-2xl w-full object-cover h-[440px]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>Founder & Owner</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Meet Jeton Krasniqi</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <blockquote className="text-lg text-slate-600 leading-relaxed italic mb-6">
              "AIRplus Heating &amp; Cooling was my dream since my HVAC career began. Providing a service with pride and honor was something I knew I could do. Through impact and success, starting my own company became a reality."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-xl text-white flex-shrink-0" style={{ backgroundColor: colors.primaryHex }}>
                JK
              </div>
              <div>
                <p className="font-bold text-slate-900">Jeton Krasniqi</p>
                <p className="text-sm text-slate-500">Founder &amp; Owner — AIRplus Heating &amp; Cooling</p>
                <p className="text-xs text-slate-400 mt-0.5">In the HVAC industry since 2006 · Bridgeport, CT</p>
              </div>
            </div>
          </div>
          <div className="mt-6 max-w-3xl mx-auto text-slate-600 leading-relaxed text-center text-sm">
            A consummate family man, Jeton understands the needs of his community and continues to be a trusted voice in Connecticut. He and his team offer reliable, professional, and honest service — making AIRplus your go-to call for all HVAC needs.
          </div>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>What We Stand For</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${colors.primaryHex}15` }}>
                  <v.icon className="w-6 h-6" style={{ color: colors.primaryHex }} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social + CTA ── */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold mb-3">Follow Along &amp; Get in Touch</h2>
          <p className="text-slate-400 mb-8 text-sm">See our latest projects on social media or reach out directly — we'd love to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl font-bold text-white shadow-lg transition hover:-translate-y-0.5" style={{ backgroundColor: colors.primaryHex }}>
              <Phone className="w-4 h-4" /> {phoneFormatted}
            </a>
            {facebookUrl && (
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl font-bold border border-white/20 text-white hover:bg-white/10 transition">
                <Facebook className="w-4 h-4" /> Facebook
              </a>
            )}
            {instagramUrl && (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl font-bold border border-white/20 text-white hover:bg-white/10 transition">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
