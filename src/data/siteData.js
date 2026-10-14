// ─────────────────────────────────────────────────────────────
//  DERMOLYXA™ – Single Source of Truth for All Site Content
// ─────────────────────────────────────────────────────────────

// ── Brand ────────────────────────────────────────────────────
export const brand = {
  name: 'DERMOLYXA™',
  logoSub: 'SKIN • HAIR • AESTHETIC',
  tagline: 'Where Science Meets Aesthetic Excellence',
  sub: 'Professional education, advanced clinical care and science-driven skin & hair solutions under one premium brand.',
  philosophy: 'Premium in appearance. Responsible in substance.',
  whatsapp: 'https://wa.me/917709739330',
  instagram: 'https://instagram.com/dermolyxa',
  instagramHandle: '@dermolyxa',
};

// ── SEO defaults ─────────────────────────────────────────────
// Replace `siteUrl` with the live domain before launch.
export const seo = {
  siteUrl: 'https://www.dermolyxa.com',
  defaultTitle: 'DERMOLYXA™ | Skin, Hair & Aesthetic Institute, Clinic & Products',
  defaultDescription:
    'DERMOLYXA™ brings professional education, advanced clinical care and science-driven skin & hair solutions together under one premium skin, hair and aesthetic brand.',
  defaultImage: '/og-image.png',
};

// ── Contact ──────────────────────────────────────────────────
export const contact = {
  phones: ['7709739330', '7709729330'],
  email: 'dermolyxa@gmail.com',
  whatsapp: 'https://wa.me/917709739330',
  instagram: 'https://instagram.com/dermolyxa',
  instagramHandle: '@dermolyxa',
};

// ── Navigation ───────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',      path: '/' },
  { label: 'About',     path: '/about' },
  {
    label: 'Institute',
    path: '/institute',
    children: [
      { label: 'Institute Overview', path: '/institute' },
      { label: 'Courses & Programs', path: '/courses' },
      { label: 'Admissions',         path: '/admissions' },
      { label: 'Faculty',            path: '/faculty' },
    ],
  },
  { label: 'Clinic',    path: '/clinic' },
  { label: 'Products',  path: '/products' },
  { label: 'Blog',      path: '/blog' },
  { label: 'Contact',   path: '/contact' },
];

export const navCTA = {
  primary: { label: 'Enquire Now', path: '/contact' },
  whatsapp: { label: 'WhatsApp Us', url: 'https://wa.me/917709739330' },
};

// ── Stats ────────────────────────────────────────────────────
export const stats = [
  { value: '12',  label: 'Proposed Institute Programs' },
  { value: '3',   label: 'Distinct Brand Divisions' },
  { value: '1',   label: 'Unified DERMOLYXA Identity' },
];

// ── Divisions ────────────────────────────────────────────────
export const divisions = [
  {
    id: 'institute',
    name: 'DERMOLYXA INSTITUTE™',
    short: 'Institute',
    subtitle: 'Professional Education & Skill Development',
    path: '/institute',
    homeLink: '/courses',
    homeLinkLabel: 'View courses',
    icon: 'GraduationCap',
    color: 'teal',
    description:
      'A dedicated platform for aspiring and practising aesthetic professionals seeking structured, skill-based education in skin care, hair science, and aesthetic therapies.',
    offerings: [
      'Certificate Courses',
      'Diploma Programs',
      'Advanced Programs',
      'Professional Fellowship Programs',
      'Workshops & Masterclasses',
    ],
  },
  {
    id: 'clinic',
    name: 'DERMOLYXA CLINIC™',
    short: 'Clinic',
    subtitle: 'Skin • Hair • Aesthetic Care',
    path: '/clinic',
    homeLink: '/clinic',
    homeLinkLabel: 'Visit clinic',
    icon: 'Stethoscope',
    color: 'gold',
    description:
      'A professional clinical environment designed to deliver evidence-based skin, hair and aesthetic care, guided by qualified practitioners.',
    offerings: [
      'Hair Care & Transplant',
      'Hair Regeneration',
      'Skin Treatments',
      'Aesthetic Care',
      'Regenerative Aesthetic Services',
    ],
  },
  {
    id: 'products',
    name: 'DERMOLYXA PRODUCTS™',
    short: 'Products',
    subtitle: 'Science-Driven Skin & Hair Solutions',
    path: '/products',
    homeLink: '/products',
    homeLinkLabel: 'Discover products',
    icon: 'FlaskConical',
    color: 'teal',
    description:
      'New-generation skin and hair solutions are currently under development, formulated with a commitment to science, safety, and efficacy.',
    offerings: [],
    comingSoon: true,
    comingSoonText:
      'Coming Soon – New-generation skin and hair solutions are under development.',
  },
];

// ── Institute Programs (categories) ─────────────────────────
export const institutePrograms = [
  {
    category: 'Certificate Courses',
    icon: 'Award',
    description:
      'Focused, short-duration programs providing practical competency in specific areas of skin, hair, or aesthetic therapy.',
    highlights: [
      'Foundational skin, hair and aesthetic concepts',
      'Practical, focused skill development',
      'A clear starting point on the level pathway',
    ],
    note: 'Detailed course listings will be published upon finalisation.',
  },
  {
    category: 'Diploma Programs',
    icon: 'BookOpen',
    description:
      'Comprehensive structured programs for a deeper understanding of aesthetic science and clinical applications.',
    highlights: [
      'Broader curriculum across theory and application',
      'Structured, multi-module learning',
      'Builds on foundational knowledge',
    ],
    note: 'Detailed course listings will be published upon finalisation.',
  },
  {
    category: 'Advanced Programs',
    icon: 'Layers',
    description:
      'Designed for professionals seeking specialisation and advanced skill development beyond foundational learning.',
    highlights: [
      'Specialisation in a chosen area',
      'Advanced techniques and deeper theory',
      'Intended for practising professionals',
    ],
    note: 'Detailed course listings will be published upon finalisation.',
  },
  {
    category: 'Professional Fellowship Programs',
    icon: 'Users',
    description:
      'In-depth mentorship-based programs for practitioners seeking a structured pathway to professional excellence.',
    highlights: [
      'Mentorship-based, in-depth learning',
      'Structured pathway to professional excellence',
      'Extended, senior-level focus',
    ],
    note: 'Detailed course listings will be published upon finalisation.',
  },
  {
    category: 'Workshops & Masterclasses',
    icon: 'Zap',
    description:
      'Intensive, hands-on learning experiences led by experienced practitioners on focused topics.',
    highlights: [
      'Intensive, hands-on format',
      'Focused single-topic sessions',
      'Practical demonstration and practice',
    ],
    note: 'Workshop schedule will be announced periodically.',
  },
];

// ── Footer ───────────────────────────────────────────────────
export const footer = {
  blurb: 'Science. Education. Responsible care.',
  columns: [
    {
      id: 'explore',
      title: 'Explore',
      links: [
        { label: 'Institute',  path: '/institute' },
        { label: 'Courses',    path: '/courses' },
        { label: 'Admissions', path: '/admissions' },
        { label: 'Faculty',    path: '/faculty' },
        { label: 'Clinic',     path: '/clinic' },
        { label: 'Products',   path: '/products' },
        { label: 'Blog',       path: '/blog' },
        { label: 'FAQ',        path: '/faq' },
      ],
    },
    {
      id: 'legal',
      title: 'Legal',
      links: [
        { label: 'Privacy Policy',      path: '/privacy-policy' },
        { label: 'Terms & Conditions',  path: '/terms' },
        { label: 'Refund Policy',       path: '/refund-policy' },
        { label: 'Disclaimer',          path: '/disclaimer' },
      ],
    },
  ],
  // Keys into the `disclaimers` map shown in the bottom note bar.
  noteDisclaimers: ['regulatory', 'noMedicalLicence'],
};

// ── Floating actions (mobile bottom bar + desktop WhatsApp) ──
export const floatingActions = {
  call:     { label: 'Call Now', icon: 'Phone' },
  whatsapp: { label: 'WhatsApp', url: 'https://wa.me/917709739330' },
  enquire:  { label: 'Enquire',  path: '/contact' },
};

// ── Disclaimers ──────────────────────────────────────────────
export const disclaimers = {
  regulatory:
    'Approval / affiliation subject to applicable regulatory requirements.',
  noMedicalLicence:
    'Training does not by itself confer a medical licence or authorization to practise any regulated healthcare profession.',
  illustrativeImagery:
    'Illustrative imagery; not actual DERMOLYXA patients, facilities or products.',
  educationalOnly:
    'Educational illustration only. Not a diagnostic tool or medical advice.',
};

// ── Imagery ──────────────────────────────────────────────────
// Free Unsplash placeholder imagery. Not actual DERMOLYXA photography.
export const images = {
  hero: {
    primary:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80&auto=format&fit=crop',
    secondary:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&auto=format&fit=crop',
    tertiary:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop',
  },
  explorer: {
    skin: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000&q=80&auto=format&fit=crop',
    hair: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&q=80&auto=format&fit=crop',
    science:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1000&q=80&auto=format&fit=crop',
  },
  divisions: {
    institute:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=80&auto=format&fit=crop',
    clinic:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=80&auto=format&fit=crop',
    products:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1000&q=80&auto=format&fit=crop',
  },
};

// ── Home: marquee strip ──────────────────────────────────────
export const marqueeItems = [
  'Skin Science',
  'Hair Science',
  'Aesthetic Science',
  'Education',
  'Clinical Care',
];

// ── Home: interactive science explorer ───────────────────────
export const scienceExplorer = {
  tabs: [
    {
      id: 'skin',
      label: 'Skin Mode',
      icon: 'Sparkles',
      image: images.explorer.skin,
      title: 'Skin Science',
      text: 'Aesthetic skin science studies the structure of the skin and the evidence-based care that supports its health and appearance. Structured education builds the knowledge required to understand skin concerns responsibly.',
    },
    {
      id: 'hair',
      label: 'Hair Mode',
      icon: 'Wind',
      image: images.explorer.hair,
      title: 'Hair Science',
      text: 'Hair science explores the structure and growth cycle of hair and the scalp. This understanding informs professional approaches to hair care and regeneration within a clinical setting.',
    },
    {
      id: 'science',
      label: 'Science Mode',
      icon: 'FlaskConical',
      image: images.explorer.science,
      title: 'Aesthetic Science',
      text: 'Aesthetic science applies principles of biology, chemistry and technology to support safe, professional clinical and educational practice across skin, hair and aesthetic therapies.',
    },
  ],
};

// ── Home: closing CTA ────────────────────────────────────────
export const homeCTA = {
  title: 'Ready to begin?',
  text: 'Speak with the DERMOLYXA team about programs, clinical services and upcoming products.',
};

// ── About page ───────────────────────────────────────────────
export const about = {
  eyebrow: 'About',
  title: 'About DERMOLYXA™',
  description: brand.sub,
  story: {
    eyebrow: 'Our story',
    title: 'One premium identity across education, care and science',
    image: images.divisions.institute,
    paragraphs: [
      'DERMOLYXA™ is a proposed skin, hair and aesthetic brand that brings professional education, advanced clinical care and science-driven product development together under a single premium identity.',
      'The brand is structured into three focused divisions — Institute, Clinic and Products — so that each can pursue its own purpose while sharing one standard of responsibility, clarity and care.',
      'This website presents DERMOLYXA™ as it is being developed. Program details, clinical services and product ranges are described as proposed and remain subject to finalisation.',
    ],
  },
  missionVisionValues: [
    {
      icon: 'Target',
      title: 'Mission',
      text: 'To support responsible, science-led education and care across skin, hair and aesthetics through structured learning and professional practice.',
    },
    {
      icon: 'Eye',
      title: 'Vision',
      text: 'To develop a trusted, clearly presented brand that connects education, clinical care and product science under one responsible standard.',
    },
    {
      icon: 'BadgeCheck',
      title: 'Values',
      text: 'Integrity, transparency and responsibility — reflected in how we describe our programs, services and products, and the expectations we set.',
    },
  ],
  disclaimers: [
    disclaimers.regulatory,
    disclaimers.noMedicalLicence,
    disclaimers.illustrativeImagery,
    disclaimers.educationalOnly,
  ],
};

// ── Institute page ───────────────────────────────────────────
export const institute = {
  eyebrow: 'Institute',
  title: 'DERMOLYXA INSTITUTE™',
  description: 'Professional Education & Skill Development',
  intro: {
    eyebrow: 'Institute overview',
    title: 'Structured education for skin, hair and aesthetic professionals',
    image: images.divisions.institute,
    paragraphs: [
      'DERMOLYXA INSTITUTE™ is the education division of the brand — a dedicated platform for aspiring and practising professionals who want structured, skill-based learning in skin care, hair science and aesthetic therapies.',
      'Programs are organised across five levels, from focused certificate courses through to in-depth professional fellowships and hands-on workshops. Every level is designed to build practical competency at a clear depth.',
      'All programs listed on this site are proposed. Curriculum, duration, eligibility and schedules will be published as each program is finalised.',
    ],
  },
  learningApproach: [
    {
      icon: 'BookOpen',
      title: 'Structured curriculum',
      text: 'Each level follows a clear, logical progression so learners build understanding step by step.',
    },
    {
      icon: 'Layers',
      title: 'Skill-based learning',
      text: 'Emphasis on practical competency relevant to professional skin, hair and aesthetic practice.',
    },
    {
      icon: 'Users',
      title: 'Mentorship',
      text: 'Guidance and feedback from experienced practitioners as programs are developed.',
    },
    {
      icon: 'Zap',
      title: 'Applied focus',
      text: 'Learning framed around real professional scenarios, standards and client care.',
    },
  ],
  whoItsFor: [
    'Aspiring professionals beginning a career in skin, hair or aesthetics',
    'Practising aesthetic professionals seeking structured upskilling',
    'Clinic and salon teams looking to strengthen shared standards',
    'Learners who want a clear, level-based pathway to follow',
  ],
  disclaimers: [disclaimers.noMedicalLicence, disclaimers.regulatory],
};

// ── Admissions page ──────────────────────────────────────────
export const admissions = {
  eyebrow: 'Institute',
  title: 'Admissions',
  description: 'A simple, transparent pathway from your first enquiry to enrolment.',
  steps: [
    {
      step: '01',
      icon: 'MessageSquare',
      title: 'Enquire',
      text: 'Share your interest using the enquiry form or contact us directly. Let us know which program level you are considering.',
    },
    {
      step: '02',
      icon: 'PhoneCall',
      title: 'Counselling',
      text: 'Speak with the DERMOLYXA team about the right program, format and next steps for your goals.',
    },
    {
      step: '03',
      icon: 'FileText',
      title: 'Documentation',
      text: 'Complete the required documentation. Specific requirements will be confirmed along with finalised program details.',
    },
    {
      step: '04',
      icon: 'CheckCircle2',
      title: 'Enrolment',
      text: 'Once requirements are confirmed, complete your enrolment and receive your program details.',
    },
  ],
  eligibilityNote:
    'Eligibility criteria, fees and schedules are to be confirmed. These will be published together with each finalised program listing.',
  disclaimers: [disclaimers.regulatory, disclaimers.noMedicalLicence],
};

// ── Clinic page ──────────────────────────────────────────────
export const clinicPage = {
  eyebrow: 'Clinic',
  title: 'DERMOLYXA CLINIC™',
  description: 'Skin • Hair • Aesthetic Care',
  intro: {
    eyebrow: 'Clinical care',
    title: 'Evidence-based care across skin, hair and aesthetics',
    image: images.divisions.clinic,
    paragraphs: [
      'DERMOLYXA CLINIC™ is the clinical division of the brand — a professional environment designed to deliver evidence-based skin, hair and aesthetic care, guided by qualified practitioners.',
      'Each service area below is described for general educational understanding only. Suitability, approach and outcomes are always assessed individually during a professional consultation.',
    ],
  },
  services: [
    {
      id: 'hair-care-transplant',
      category: 'Hair Care & Transplant',
      icon: 'Wind',
      image: images.explorer.hair,
      description:
        'Comprehensive hair restoration and transplant care tailored to individual hair-loss patterns and goals, based on professional assessment.',
    },
    {
      id: 'hair-regeneration',
      category: 'Hair Regeneration',
      icon: 'RefreshCw',
      image: images.divisions.clinic,
      description:
        'Regenerative approaches intended to support hair growth and scalp health, delivered within a professional clinical setting.',
    },
    {
      id: 'skin-treatments',
      category: 'Skin Treatments',
      icon: 'Sparkles',
      image: images.explorer.skin,
      description:
        'Evidence-based skin care addressing a range of dermatological concerns, following individual professional assessment.',
    },
    {
      id: 'aesthetic-care',
      category: 'Aesthetic Care',
      icon: 'Star',
      image: images.hero.primary,
      description:
        'Professional aesthetic procedures performed by qualified practitioners in a clinical environment, guided by individual consultation.',
    },
    {
      id: 'regenerative-aesthetics',
      category: 'Regenerative Aesthetic Services',
      icon: 'Activity',
      image: images.explorer.science,
      description:
        'Regenerative therapies at the intersection of science and aesthetics, approached with a focus on safety and responsible practice.',
    },
  ],
  journey: [
    {
      step: '01',
      icon: 'MessageSquare',
      title: 'Book consultation',
      text: 'Request an appointment by phone, WhatsApp or through the enquiry form.',
    },
    {
      step: '02',
      icon: 'Stethoscope',
      title: 'Assessment',
      text: 'A qualified practitioner reviews your concerns, history and goals.',
    },
    {
      step: '03',
      icon: 'ClipboardList',
      title: 'Personalised plan',
      text: 'Suitable options are discussed openly, along with alternatives and expectations.',
    },
    {
      step: '04',
      icon: 'Calendar',
      title: 'Care & follow-up',
      text: 'Agreed care is delivered with guidance and follow-up as appropriate.',
    },
  ],
  responsibleNote:
    'All clinic services are provided following individual professional assessment. No outcome, result or benefit is guaranteed, and no service replaces independent medical advice. Imagery on this page is illustrative.',
  disclaimers: [
    disclaimers.illustrativeImagery,
    disclaimers.educationalOnly,
    disclaimers.regulatory,
  ],
};

// ── Products page ────────────────────────────────────────────
export const productsPage = {
  eyebrow: 'Products',
  title: 'DERMOLYXA PRODUCTS™',
  description: 'Science-Driven Skin & Hair Solutions',
  intro: {
    eyebrow: 'Coming soon',
    title: 'New-generation skin and hair solutions in development',
    image: images.divisions.products,
    paragraphs: [
      'DERMOLYXA PRODUCTS™ is the product division of the brand. New-generation skin and hair solutions are currently under development, formulated with a commitment to science, safety and efficacy.',
      'This page presents the range as it is being developed. Product details, pricing and availability will be shared when they are finalised — no products are available for purchase at this time.',
    ],
  },
  categories: [
    {
      id: 'skin-solutions',
      title: 'Skin Solutions',
      icon: 'Droplets',
      image: images.divisions.products,
      status: 'Under development',
      text: 'New-generation skin care concepts formulated with a commitment to science, safety and efficacy.',
    },
    {
      id: 'hair-solutions',
      title: 'Hair Solutions',
      icon: 'Wind',
      image: images.explorer.hair,
      status: 'Under development',
      text: 'Hair and scalp care concepts in development, guided by a science-first approach.',
    },
  ],
  roadmap: [
    {
      step: '01',
      title: 'Research',
      text: 'Exploring ingredients, formats and scientific rationale for skin and hair solutions.',
    },
    {
      step: '02',
      title: 'Formulation',
      text: 'Developing formulations with a focus on science, safety and stability.',
    },
    {
      step: '03',
      title: 'Testing',
      text: 'Evaluating consistency and quality before any range is shared publicly.',
    },
    {
      step: '04',
      title: 'Launch',
      text: 'Preparing the range for a future, responsible release.',
    },
  ],
  disclaimers: [disclaimers.illustrativeImagery, disclaimers.educationalOnly],
};

// ── Faculty page ─────────────────────────────────────────────
export const facultyPage = {
  eyebrow: 'Institute',
  title: 'Faculty',
  description:
    'Programs designed to be delivered by experienced practitioners and subject-matter experts across skin, hair and aesthetic science.',
  notice:
    'Faculty profiles will be announced soon. No instructor details are shown until they are confirmed.',
  focusAreas: [
    'Skin Science',
    'Hair Science',
    'Aesthetic Therapies',
    'Clinical Practice',
    'Professional Standards',
  ],
  placeholders: [
    { id: 'faculty-1', role: 'Faculty Member', focus: 'To Be Announced' },
    { id: 'faculty-2', role: 'Faculty Member', focus: 'To Be Announced' },
    { id: 'faculty-3', role: 'Faculty Member', focus: 'To Be Announced' },
  ],
  collaborationTypes: [
    'Faculty / mentorship',
    'Guest lecture',
    'Curriculum collaboration',
    'Other collaboration',
  ],
  cta: {
    eyebrow: 'Join our faculty',
    title: 'Join our faculty or collaborate',
    text: 'We welcome expressions of interest from experienced practitioners and subject-matter experts. Share your details and area of interest, and the team will follow up.',
  },
  disclaimers: [disclaimers.illustrativeImagery, disclaimers.regulatory],
};
