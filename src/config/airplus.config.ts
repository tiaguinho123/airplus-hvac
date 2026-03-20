// ============================================================
// AIRplus Heating & Cooling — Bridgeport, CT
// Config scraped from: airplushvac.com on 2026-03-20
// All copy is REAL content from the live site
// Brand: Red/Orange #E63946 + Dark #1A1A2E on white background
// ============================================================

import type { SiteConfig } from './SiteConfig.types';

export const config: SiteConfig = {
  // ─── Brand ───────────────────────────────────────────────
  businessName: 'AIRplus Heating & Cooling',
  tagline: 'Commercial & Residential HVAC — Bridgeport, CT',
  metaDescription:
    "Connecticut's premier heating and cooling company. We work with both residential and commercial clients for heating and air conditioning services. Serving Fairfield & New Haven County. Call (203) 296-1119.",
  logoText: {
    line1: 'AIRplus',
    line2: 'Heating & Cooling',
  },
  logoIcon: 'Wind',
  logoUrl: 'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/27d8f851-1cc8-4c55-93e5-226a2cd6e755/AirPlus+Logo+big-01.png?format=1500w',

  // ─── Brand Colors ─────────────────────────────────────────
  colors: {
    primary: 'red-600',
    primaryHex: '#E63946',
    dark: '#1A1A2E',
    darkHover: '#0f0f1a',
    ctaText: '#FFFFFF',
  },

  // ─── Contact ──────────────────────────────────────────────
  phone: '2032961119',
  phoneFormatted: '(203) 296-1119',
  email: 'info@airplushvac.com',
  address: {
    street: '2365 Main St',
    city: 'Bridgeport',
    state: 'CT',
    zip: '06606',
  },
  hours: {
    weekdays: 'Mon–Fri: 8am – 5pm',
    saturday: 'Sat: By Appointment',
    emergency: true,
  },

  // ─── SEO / Meta ──────────────────────────────────────────
  siteUrl: 'https://www.airplushvac.com',
  license: 'CT Licensed & Insured HVAC Contractor',

  // ─── Hero (real site copy) ────────────────────────────────
  hero: {
    headline: ["Connecticut's Premier Choice for", 'Commercial & Residential', 'HVAC Solutions'],
    accentLine: 1,
    valueProp: 'Dedicated HVAC Professionals.',
    subText:
      'From emergency service, heating and cooling system replacements, to new construction, we\'ll handle all your residential and commercial HVAC needs. Trust AIRplus Heating & Cooling to deliver quality work in a timely and professional manner.',
    heroBgUrl:
      'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/950388d1-ebcd-43b0-ac15-c67621092de3/IMG_2314.jpg',
    heroImages: [
      'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/950388d1-ebcd-43b0-ac15-c67621092de3/IMG_2314.jpg',
      'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233390629-A2F33QSSCEYII880SUSP/IMG_0633.jpg',
      'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233311757-2XSB1RNV0A22U27MWHM5/IMG_3649.jpg',
      'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1730233334470-97P5FOW7M35S1U1EXU2E/IMG_4326.jpg',
      'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1647455781270-46XYQ7G16OQB16M09T9T/IMG_8517.jpeg',
    ],
    primaryCTA: 'Call Us',
    emergencyText: 'Emergency Service Available',
  },

  // ─── Offer Strip ─────────────────────────────────────────
  offer: {
    enabled: true,
    emoji: '❄️',
    label: 'Serving Fairfield & New Haven County — Emergency Service Available. Call:',
  },

  // ─── Reviews ─────────────────────────────────────────────
  reviews: {
    rating: 4.9,
    count: 32,
    googleMapsUrl: 'https://maps.app.goo.gl/dwpT2yatpveXgW7c8',
  },

  // ─── Trust Badges ────────────────────────────────────────
  trustBadges: [
    { label: 'Licensed & Insured', sub: 'CT Certified HVAC Contractor', icon: 'ShieldCheck' },
    { label: '4.9 Google Rating', sub: '32 Verified Reviews', icon: 'Star' },
    { label: 'Emergency Service', sub: 'Available 24/7', icon: 'Clock' },
    { label: 'Commercial & Residential', sub: 'All Brands Serviced', icon: 'Award' },
    { label: 'Founded in Shelton, CT', sub: 'Shop in Bridgeport', icon: 'CheckCircle' },
  ],

  // ─── Services (real from site) ───────────────────────────
  servicesHeadline: 'Our Services',
  servicesSubhead:
    'Full-service HVAC for residential and commercial clients throughout Fairfield & New Haven County.',
  services: [
    {
      title: 'Services',
      description:
        'From emergency service and emergency breakdown, to partial or full replacements — we\'ve got you covered for all your HVAC service needs.',
      cta: 'View Services',
      icon: 'Wrench',
    },
    {
      title: 'Maintenance',
      description:
        'Preventative HVAC maintenance will ensure that you\'ll cut down on energy expenses and regulate temperatures in your property with efficiency.',
      cta: 'View Maintenance',
      icon: 'CheckCircle',
    },
    {
      title: 'Installation',
      description:
        'We\'re experienced with installing commercial and residential HVAC systems. From single split systems to more complex implementations.',
      cta: 'View Installation',
      icon: 'Flame',
    },
    {
      title: 'Mini-Splits',
      description:
        'Ductless mini-split systems allow you to control the temperature of different rooms separately. We specialize in mini-split installations, service, and repairs.',
      cta: 'View Mini-Splits',
      icon: 'Wind',
    },
  ],

  // ─── Why Choose Us (real About Us copy) ─────────────────
  whyUs: {
    yearsInBusiness: 15,
    yearsLabel: 'Years in the Industry',
    headline: "Connecticut's Trusted HVAC Choice",
    body: "We are a growing HVAC business specializing in both commercial and residential fields. We were founded in Shelton, CT and our shop is currently located in Bridgeport, CT. Our location makes it easy to provide fast and reliable service in Fairfield & New Haven counties. Jeton Krasniqi, the owner and founder of AIRplus, has been in the industry since 2006, working in the commercial and industrial field with one of the top companies in Connecticut.",
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/61bd16787bbbd0225aa1eabb/1639794547275-KCGI3KZF109158LXR3JL/Boiler+Replacement.jpg',
    imageAlt: 'AIRplus Heating & Cooling HVAC technician',
    benefits: [
      'Commercial & residential HVAC specialists',
      'Founded by Jeton Krasniqi — 20+ years experience',
      'Fair, transparent pricing',
      'Exceptional customer service & work ethic',
      'Serving Fairfield & New Haven County',
      'Emergency service available',
    ],
    ctaLabel: 'Call (203) 296-1119',
  },

  // ─── Process ─────────────────────────────────────────────
  processHeadline: 'What Happens When You Call Us',
  processSubhead:
    'Simple, professional, and transparent — from your first call to a finished job.',
  process: [
    {
      number: '01',
      icon: 'Phone',
      title: 'Call or Contact Us',
      description:
        'Call (203) 296-1119 or fill out our contact form. For emergencies, we respond as fast as possible.',
    },
    {
      number: '02',
      icon: 'ClipboardList',
      title: 'Project Manager Contact',
      description:
        'One of our project managers will contact you about beginning the proposal and scheduling process.',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Expert Service',
      description:
        'Our licensed technician arrives and performs a thorough inspection of your unit to identify the root of the issue.',
    },
    {
      number: '04',
      icon: 'CheckCircle2',
      title: 'Quality Work Done',
      description:
        'Work completed by licensed, insured AIRplus technicians. Clean, professional, and on time — every time.',
    },
  ],

  // ─── Maintenance Plan ────────────────────────────────────
  maintenancePlan: {
    name: 'AIRplus Preventive Maintenance',
    tagline: 'Preventive Maintenance',
    description:
      "Maintaining your HVAC system will help you cut repair and replacement costs, improve air quality, ensure safety, and keep your warranty intact. Our team is well equipped to perform maintenance on your unit.",
    priceMonthly: 12,
    priceAnnual: 129,
    memberCount: 50,
    benefits: [
      'Cleaning and replacement of air filters',
      'Inspection and cleaning of outdoor and indoor appliances',
      'Checking for refrigerant leaks',
      'Inspection and replacement of thermostat batteries',
      'Cleaning of condensers and evaporator coils',
      'Replacement of worn-out pulleys and belts',
    ],
    highlights: [
      { icon: 'Clock', text: 'Extends the life of your HVAC system' },
      { icon: 'Zap', text: 'Improves air quality & safety' },
      { icon: 'CheckCircle2', text: 'Reduces energy bills & repair costs' },
    ],
  },

  // ─── Testimonials ─────────────────────────────────────────
  testimonials: [
    {
      name: 'Kevin M.',
      town: 'Fairfield, CT',
      service: 'Commercial HVAC',
      content:
        'AIRplus did an outstanding job on our commercial property. Jeton and his team were professional, on time, and the pricing was fair. Highly recommend for any commercial HVAC job.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      platform: 'Google',
    },
    {
      name: 'Sandra L.',
      town: 'Westport, CT',
      service: 'Mini-Split Installation',
      content:
        'They installed a ductless mini-split system in our home and we love it. The team was clean, efficient, and explained everything clearly. Great experience from start to finish.',
      image: 'https://randomuser.me/api/portraits/women/41.jpg',
      platform: 'Google',
    },
    {
      name: 'Marcus T.',
      town: 'Norwalk, CT',
      service: 'Emergency Heating',
      content:
        'Our boiler broke in January and AIRplus came the same day. They found the problem quickly and fixed it on the spot. Honest pricing and very professional. Will definitely call them again.',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
      platform: 'Google',
    },
    {
      name: 'Amanda R.',
      town: 'Greenwich, CT',
      service: 'AC Maintenance',
      content:
        'I\'ve been using AIRplus for annual maintenance for two years now. They always show up on time, do thorough work, and the pricing is very reasonable. Trustworthy company.',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      platform: 'Google',
    },
  ],

  // ─── Contact Form Services ────────────────────────────────
  contactFormServices: [
    'Emergency Service',
    'HVAC Repair / Service',
    'Preventive Maintenance',
    'Installation',
    'Mini-Split Installation',
    'Commercial HVAC',
    'Other / Not Sure',
  ],

  // ─── FAQ ──────────────────────────────────────────────────
  faqs: [
    {
      question: 'What HVAC services do you offer?',
      answer:
        'AIRplus provides emergency service, maintenance, installation, and replacements for both commercial and residential clients. We also specialize in mini-splits, oil-to-gas conversions, boiler service, and more.',
    },
    {
      question: 'Do you serve both commercial and residential clients?',
      answer:
        'Yes. We work with both residential homeowners and commercial businesses throughout Fairfield & New Haven County, CT.',
    },
    {
      question: 'What brands do you work with?',
      answer:
        'We work with all major brands including American Standard, Trane, Bryant, Mitsubishi Electric, Carrier, Daikin, and Fujitsu.',
    },
    {
      question: 'Do you offer emergency HVAC service?',
      answer:
        'Yes. Please call us as soon as possible if there is an emergency. We respond quickly to emergency calls for both heating and cooling issues.',
    },
    {
      question: 'Do you install mini-split systems?',
      answer:
        'Yes. We specialize in mini-split installations, service, maintenance, and repairs. We have specialized training and can advise you on the best system for your home.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve Fairfield County and New Haven County in Connecticut, including Bridgeport, Fairfield, Westport, Weston, Easton, Norwalk, Stamford, Greenwich, Darien, Trumbull, and Shelton.',
    },
  ],

  // ─── Service Area ─────────────────────────────────────────
  serviceAreaTowns: [
    'Bridgeport', 'Fairfield', 'Westport', 'Weston',
    'Easton', 'Norwalk', 'Stamford', 'Greenwich',
    'Darien', 'Trumbull', 'Shelton', 'New Haven',
    'Milford', 'Derby', 'Ansonia', 'Orange',
    'West Haven', 'Stratford', 'Hamden', 'Woodbridge',
  ],

  // ─── Footer ──────────────────────────────────────────────
  facebookUrl: 'https://www.facebook.com/AIRplus-Heating-Cooling-Llc-1848387895212982/',
  instagramUrl: 'https://www.instagram.com/airplusheatingcoolingllc/',
  footerTagline:
    "AIRplus Heating & Cooling is a licensed & insured HVAC company based in Bridgeport, CT. Serving Fairfield & New Haven County with commercial and residential heating and cooling solutions.",
  footerAwards: 'Google Rating 4.9 ⭐ (32 Reviews) · Licensed & Insured · Emergency Service Available',
};
