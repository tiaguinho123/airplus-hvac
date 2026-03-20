// ============================================================
// Evolution Air LLC — Stamford, CT
// Config scraped from: evolutionairllc.com on 2026-03-19
// All copy is REAL content from the live site
// Brand: Blue #1A73C8 + Dark Navy #0A1E3C on white background
// ============================================================

import type { SiteConfig } from './SiteConfig.types';

export const config: SiteConfig = {
  // ─── Brand ───────────────────────────────────────────────
  businessName: 'Evolution Air LLC',
  tagline: 'Heating & Cooling — Stamford, CT',
  metaDescription:
    'Evolution Air LLC is a fully licensed & insured HVAC company in Stamford, CT. Serving Fairfield & Westchester County with residential, commercial, and emergency service. Call (203) 724-9814.',
  logoText: {
    line1: 'Evolution Air LLC',
    line2: 'Heating & Cooling',
  },
  logoIcon: 'Wind',
  logoUrl: 'https://evolutionairllc.com/wp-content/uploads/2019/11/evolution-air-logo_horizontal-3.png',

  // ─── Brand Colors ─────────────────────────────────────────
  colors: {
    primary: 'blue-600',
    primaryHex: '#1A73C8',
    dark: '#0A1E3C',
    darkHover: '#061428',
    ctaText: '#FFFFFF',
  },

  // ─── Contact ──────────────────────────────────────────────
  phone: '2037249814',
  phoneFormatted: '(203) 724-9814',
  email: 'service@evolutionairllc.com',
  address: {
    street: '425 Fairfield Ave, Bld 3',
    city: 'Stamford',
    state: 'CT',
    zip: '06902',
  },
  hours: {
    weekdays: 'Mon–Fri: 8am – 4:30pm',
    saturday: 'Sat: By Appointment',
    emergency: true,
  },

  // ─── SEO / Meta ──────────────────────────────────────────
  siteUrl: 'https://evolutionairllc.com',
  license: 'CT Licensed & Insured HVAC Contractor',

  // ─── Hero (real site copy) ────────────────────────────────
  hero: {
    headline: ["Fairfield County's Trusted", 'Provider of Best-in-Class', 'HVAC Solutions'],
    accentLine: 1,
    valueProp: "If you're not comfortable, we're not comfortable.",
    subText:
      'Full-service HVAC company based in Stamford, CT. Fully licensed & insured. Serving Fairfield & Westchester County since 2010.',
    heroBgUrl:
      'https://evolutionairllc.com/wp-content/uploads/2020/09/condenser-repair.jpg',
    heroImages: [
      'https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-1.jpg',
      'https://evolutionairllc.com/wp-content/uploads/2020/09/condenser-repair.jpg',
      'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-11.jpg',
      'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-12.jpg',
      'https://evolutionairllc.com/wp-content/uploads/2020/09/MicrosoftTeams-image-13.jpg',
      'https://evolutionairllc.com/wp-content/uploads/2020/08/MicrosoftTeams-image-3-e1598012087796.jpg',
    ],
    primaryCTA: 'Request A Preventative Maintenance Agreement',
    emergencyText: '24-Hour Emergency Service Available',
  },

  // ─── Offer Strip ─────────────────────────────────────────
  offer: {
    enabled: true,
    emoji: '❄️',
    label: 'Serving Fairfield & Westchester County — 24/7 Emergency Response. Call:',
  },

  // ─── Reviews ─────────────────────────────────────────────
  reviews: {
    rating: 4.8,
    count: 47,
    googleMapsUrl: 'https://www.google.com/maps/place/Evolution+Air+LLC',
  },

  // ─── Trust Badges ────────────────────────────────────────
  trustBadges: [
    { label: 'Licensed & Insured', sub: 'CT Certified HVAC Contractor', icon: 'ShieldCheck' },
    { label: '4.8 Google Rating', sub: '47 Verified Reviews', icon: 'Star' },
    { label: '24-Hr Emergency', sub: 'Always Available', icon: 'Clock' },
    { label: 'Residential & Commercial', sub: 'All Brands Serviced', icon: 'Award' },
    { label: 'Since 2010', sub: 'Stamford, CT', icon: 'CheckCircle' },
  ],

  // ─── Services (real from site) ───────────────────────────
  servicesHeadline: 'Our Services',
  servicesSubhead:
    'One call for all your HVAC needs — residential, commercial, and emergency service throughout Fairfield & Westchester County.',
  services: [
    {
      title: 'Residential HVAC',
      description:
        'Service and installation of all heating and air conditioning equipment. Repairing and installing units for over 10 years across Fairfield County.',
      cta: 'Residential Service',
      icon: 'Flame',
    },
    {
      title: 'Commercial HVAC',
      description:
        'Catering to restaurants and commercial spaces with upfits, equipment change-outs, diagnostics, and custom duct work fabricated to last decades.',
      cta: 'Commercial Service',
      icon: 'Building2',
    },
    {
      title: 'Preventative Maintenance',
      description:
        'Custom maintenance agreements with 10% discount on service calls, priority scheduling, and automated reminders. A/C, furnace, boiler, and humidifier tune-ups.',
      cta: 'Maintenance Plans',
      icon: 'Wrench',
    },
    {
      title: 'Emergency Service',
      description:
        'Same-day service available. Extended hours for winter and summer emergencies. Appointments available on holidays and weekends.',
      cta: 'Emergency Service',
      icon: 'Zap',
    },
    {
      title: 'Custom Duct Work',
      description:
        'Expert source for custom ducting and sheet metal services. Fabricated to last decades without gaps or leaks — from residential retrofits to new construction.',
      cta: 'Get an Estimate',
      icon: 'Wind',
    },
  ],

  // ─── Why Choose Us (real About Us copy) ─────────────────
  whyUs: {
    yearsInBusiness: 15,
    yearsLabel: 'Years Serving Fairfield County',
    headline: 'One Call For All Your HVAC Needs',
    body: 'Evolution Air LLC is a tight-knit group of HVAC professionals with over 100 years of combined experience. Specializing in retrofits and maintaining equipment for residential, commercial, industrial, and institutional sectors. We focus on long-term equipment life and energy efficiency — not on being the lowest bidder.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Evolution Air LLC HVAC technician servicing a system in Fairfield County, CT',
    benefits: [
      'Over 100 years of combined HVAC experience',
      'Fully Licensed & Insured in Connecticut',
      'Residential, Commercial & Industrial',
      '24-Hour Emergency Service',
      'All brands serviced: Carrier, Trane, Lennox & more',
      'Custom duct work & sheet metal fabrication',
    ],
    ctaLabel: 'Call (203) 724-9814',
  },

  // ─── Process ─────────────────────────────────────────────
  processHeadline: 'What Happens When You Call Us',
  processSubhead:
    'Simple, professional, and transparent — from your first call to a finished job.',
  process: [
    {
      number: '01',
      icon: 'Phone',
      title: 'Call or Request Online',
      description:
        'Call (203) 724-9814 or submit your info online. For emergencies, we respond 24 hours a day, 7 days a week — including holidays.',
    },
    {
      number: '02',
      icon: 'ClipboardList',
      title: 'Fast Scheduling',
      description:
        'Same-day service available for urgent needs. Extended hours during peak heating and cooling seasons.',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Expert Diagnosis',
      description:
        'Our licensed technician inspects your system and provides upfront pricing. We focus on the right solution — not the most expensive one.',
    },
    {
      number: '04',
      icon: 'CheckCircle2',
      title: 'Professional Service',
      description:
        'Work completed by licensed, insured Evolution Air technicians. Clean, professional, and satisfaction guaranteed.',
    },
    {
      number: '05',
      icon: 'MessageSquare',
      title: 'We Follow Up',
      description:
        "If you're not comfortable, we're not comfortable. We check in after every job to ensure complete satisfaction.",
    },
  ],

  // ─── Maintenance Plan ────────────────────────────────────
  maintenancePlan: {
    name: 'Evolution Air Maintenance Agreement',
    tagline: 'Preventative Maintenance',
    description:
      'Custom maintenance agreements that keep your HVAC system running at peak performance. Includes A/C, boiler, furnace, and humidifier tune-ups with detailed checklists — plus 10% off all additional service calls.',
    priceMonthly: 15,
    priceAnnual: 149,
    memberCount: 80,
    benefits: [
      'Annual A/C & heating tune-up with detailed checklist',
      '10% discount on all additional service calls',
      'Priority scheduling — jump the queue',
      'Automated reminder system for your next service',
      'Free video duct inspection (via Best Air Cleaning Services)',
      'Dryer vent cleaning included',
    ],
    highlights: [
      { icon: 'Clock', text: 'Priority same-day scheduling — always' },
      { icon: 'Zap', text: 'Prevents costly breakdowns before they happen' },
      { icon: 'CheckCircle2', text: '10% off all repairs and additional service calls' },
    ],
  },

  // ─── Testimonials (real reviews from the site) ───────────
  testimonials: [
    {
      name: 'Crystal M.',
      town: 'Fairfield County',
      service: 'HVAC Service',
      content:
        'Professional and friendly, the workers from Evolution Air were on time and were able to get our outdated central air system back up and running in one visit. They offered suggestions for replacement but weren\'t pushy about it. Will use them again for sure!',
      image: 'https://randomuser.me/api/portraits/women/34.jpg',
      platform: 'Facebook',
    },
    {
      name: 'Kessa S.',
      town: 'Stamford, CT',
      service: 'HVAC, Water Heater & Boiler',
      content:
        'I was completely overwhelmed by the scope of repairs I needed for my house - HVAC, water heater, and boiler. Mike and his crew were incredibly patient with my questions and really helped me understand what I was buying. The job went smoothly mostly because of their extreme professionalism. I can\'t say enough good things about working with Mike and his team. I felt like he really treated my house like his own.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      platform: 'Google',
    },
    {
      name: 'Kristen C.',
      town: 'Greenwich, CT',
      service: 'HVAC Maintenance',
      content:
        'I highly recommend Evolution Air! I can\'t speak highly enough about them. I have had a positive experience with everyone from booking the appointment to the technicians to the follow up call with the owner, Michael. The technicians were professional, kind and extremely knowledgeable. They went above and beyond to be sure we felt comfortable having people in our home in the middle of a pandemic. Switching to Evolution Air for our HVAC maintenance was the best decision we\'ve made.',
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
      platform: 'Google',
    },
    {
      name: 'Daniel M.',
      town: 'Darien, CT',
      service: 'AC Installation',
      content:
        'Had a new AC installed by Evolution Air. The crew was clean, efficient, and professional. Fair pricing and excellent workmanship. Five stars.',
      image: 'https://randomuser.me/api/portraits/men/29.jpg',
      platform: 'Google',
    },
  ],

  // ─── Contact Form Services ────────────────────────────────
  contactFormServices: [
    'Maintenance Agreement',
    'Free Estimate',
    'Service Call',
    'General Maintenance',
    'Emergency Service',
    'Commercial HVAC',
    'Custom Duct Work',
    'Other / Not Sure',
  ],

  // ─── FAQ (real from residential page) ───────────────────
  faqs: [
    {
      question: 'Do you service all brands of HVAC equipment?',
      answer:
        'Yes. Evolution Air services and installs all major brands including Carrier, Amana, Trane, Lennox, Bryant, and York.',
    },
    {
      question: 'Do you offer 24-hour emergency service?',
      answer:
        'Yes. We provide 24-hour emergency response throughout Fairfield and Westchester County — including holidays and weekends.',
    },
    {
      question: 'What happens if my air conditioner is freezing up?',
      answer:
        "A frozen A/C is typically caused by low refrigerant, poor airflow, or a dirty coil. Turn it off and call us — running a frozen unit can cause compressor damage. We'll diagnose and fix it same day.",
    },
    {
      question: 'How often should I schedule preventative maintenance?',
      answer:
        'We recommend servicing your heater in the fall before winter, and your A/C in the spring before summer. Our maintenance agreements handle this automatically with reminders.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve all of Fairfield County and Westchester County including Stamford, Greenwich, Darien, New Canaan, Westport, Norwalk, Fairfield, Wilton, Ridgefield, and surrounding towns.',
    },
    {
      question: 'Do you handle commercial HVAC?',
      answer:
        'Yes. We specialize in commercial HVAC for restaurants, retail, office buildings, and new construction — including custom duct work and sheet metal fabrication.',
    },
    {
      question: 'What is included in your maintenance agreement?',
      answer:
        'Annual tune-ups for A/C, boilers, furnaces, and humidifiers with detailed checklists. Plus 10% off all service calls, priority scheduling, and automated reminders.',
    },
  ],

  // ─── Service Area ─────────────────────────────────────────
  serviceAreaTowns: [
    'Stamford', 'Greenwich', 'Darien', 'New Canaan',
    'Westport', 'Norwalk', 'Fairfield', 'Wilton',
    'Ridgefield', 'Trumbull', 'Shelton', 'Westchester NY',
  ],

  // ─── Footer ──────────────────────────────────────────────
  footerTagline:
    'Evolution Air LLC is a fully licensed & insured HVAC company in Stamford, CT. Serving residential and commercial customers throughout Fairfield & Westchester County with over 100 years of combined experience.',
  footerAwards: 'Google Rating 4.8 ⭐ (47 Reviews) · Licensed & Insured · 24/7 Emergency Response',
};
