/**
 * ============================================================================
 * CENTRALIZED SITE CONTENT & TEXT CONFIGURATION
 * ============================================================================
 * All important headings, logo name, navigation labels, campus details,
 * subjects, faculty, gallery captions, contact form copy, footer text,
 * system page messages (404/error), and SEO metadata live in this single file
 * so future updates and maintenance require editing only one place.
 * ============================================================================
 */

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface HighlightItem {
  icon: 'award' | 'cpu' | 'compass';
  title: string;
  summary: string;
}

export type WingFilter = 'all' | 'primary' | 'middle' | 'senior';

export type SubjectIconKey =
  | 'calculator'
  | 'atom'
  | 'code'
  | 'book'
  | 'languages'
  | 'trending'
  | 'dna'
  | 'music';

export interface SubjectItem {
  title: string;
  wing: WingFilter[];
  stream: string;
  summary: string;
  icon: SubjectIconKey;
}

export interface FacultyMember {
  name: string;
  initials: string;
  role: string;
  subject: string;
  credential: string;
  accentBg: string;
  accentText: string;
}

export interface GalleryItem {
  src: string;
  thumbSrc: string;
  blurDataURL: string;
  title: string;
  caption: string;
  featured?: boolean;
}

export interface SocialLinkItem {
  name: string;
  handle: string;
  href: string;
  icon: 'instagram' | 'youtube' | 'linkedin' | 'facebook' | 'globe';
}

/* -------------------------------------------------------------------------- */
/* 1. BRANDING & LOGO IDENTITY                                                */
/* -------------------------------------------------------------------------- */
export const BRAND_INFO = {
  logoName: 'Pragnaloka Vidyakunj',
  logoShortName: 'Pragnaloka',
  city: 'Bengaluru, Karnataka',
  country: 'India',
  foundingYear: '1994',
  campusBadge: '25-Acre Green Campus',
  establishedBadge: 'Est. 1994',
  affiliationLine: 'Affiliated to CBSE & IB Continuum · Est. 1994 · Karnataka, India',
  affiliationFooterRight: 'CBSE Affiliation No. 830492 · IB World School',
  copyrightText: '© 2026 Pragnaloka Vidyakunj, Bengaluru. All rights reserved.',
} as const;

/* -------------------------------------------------------------------------- */
/* 2. SEO & SOCIAL METADATA                                                   */
/* -------------------------------------------------------------------------- */
export const SITE_META = {
  fallbackBaseUrl: 'https://pragnalokavidyakunj.edu.in',
  title: 'Pragnaloka Vidyakunj | CBSE & IB School in Bengaluru',
  titleTemplate: '%s | Pragnaloka Vidyakunj Bengaluru',
  description:
    'Discover Pragnaloka Vidyakunj, Bengaluru. A K–12 CBSE & IB Continuum school blending Indian values with STEM labs, classical arts, and athletics. Enquire today.',
  keywords: [
    'Pragnaloka Vidyakunj',
    'CBSE School Bengaluru',
    'IB Continuum School India',
    'Best K-12 School Bengaluru',
    'Whitefield Indiranagar School',
    'STEM Robotics School India',
    'Admissions 2026-27 Bengaluru',
  ],
  locale: 'en_IN',
  ogImage: '/images/indian_school_campus_hero_1794634411222.webp',
  ogImageAlt: 'Pragnaloka Vidyakunj 25-acre campus courtyard in Bengaluru, India',
  themeColor: '#2C1E16',
  backgroundColor: '#FFFBF4',
} as const;

/* -------------------------------------------------------------------------- */
/* 3. CONTACT & CAMPUS LOCATION                                               */
/* -------------------------------------------------------------------------- */
export const SCHOOL_CONTACT = {
  name: BRAND_INFO.logoName,
  city: BRAND_INFO.city,
  streetAddress: '404 Innovation Parkway, Whitefield – Indiranagar Corridor',
  locality: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560038',
  address:
    '404 Innovation Parkway, Whitefield – Indiranagar Corridor, Bengaluru, Karnataka 560038, India',
  shortAddress: 'Indiranagar · Whitefield Corridor, Bengaluru 560038',
  hours: 'Mon – Sat · 8:30 AM to 4:00 PM IST',
  phoneDisplay: '+91 80 4123 8900',
  phoneHref: 'tel:+918041238900',
  whatsappHref: 'https://wa.me/919845012345',
  email: 'admissions@pragnalokavidyakunj.edu.in',
  mapsHref: 'https://maps.google.com/?q=Bengaluru,Karnataka,India',
} as const;

/* -------------------------------------------------------------------------- */
/* 4. NAVIGATION BAR & FOOTER LINKS                                           */
/* -------------------------------------------------------------------------- */
export const NAV_LINKS: NavLinkItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const NAV_TEXT = {
  primaryCtaLabel: 'Enquire Now',
  callCtaLabel: 'Call Us',
  whatsappCtaLabel: 'WhatsApp',
  openMenuAria: 'Open navigation',
  closeMenuAria: 'Close navigation',
} as const;

/* -------------------------------------------------------------------------- */
/* 5. HERO SECTION                                                            */
/* -------------------------------------------------------------------------- */
export const HERO_CONTENT = {
  highlights: ['Bengaluru, India', 'CBSE & IB Continuum', 'Admissions 2026–27'],
  heading: 'Future-Ready Learning. Rooted in Values.',
  subheading:
    'K–12 education combining Indian academic excellence with global STEM labs, creative arts, and athletics.',
  primaryCta: 'Admissions Enquiry',
  callCta: 'Call Us',
  whatsappCta: 'WhatsApp',
  imageSrc: '/images/indian_school_campus_hero_1794634411222.webp',
  imageBlurDataURL:
    'data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAgCdASoQAAoAA4BaJZgCdAC9u5J9kpYAAP7ib8mFW8gm+r5Iiu7WuGHnKD7rvydkFHtouhlOndfK1ykPWPll1f8oMr1IOssDZKHlMsWkXWr3tUTm3FIZ1f/MKj0wAAA=',
  imageAlt: 'Pragnaloka Vidyakunj Campus in Bengaluru',
  campusTag: BRAND_INFO.campusBadge,
  campusLocation: BRAND_INFO.city,
  establishedLabel: BRAND_INFO.establishedBadge,
} as const;

/* -------------------------------------------------------------------------- */
/* 6. ABOUT SECTION                                                           */
/* -------------------------------------------------------------------------- */
export const ABOUT_CONTENT = {
  eyebrow: 'About The School',
  heading: 'A culture of curiosity, discipline, and care.',
  description:
    'Pragnaloka Vidyakunj blends rigorous Indian academics with modern inquiry-based learning in a serene 25-acre campus.',
  metrics: [
    { value: '1994', label: 'Founded in Bengaluru' },
    { value: '1,250+', label: 'K–12 Scholars' },
    { value: '14 : 1', label: 'Student-Faculty Ratio' },
    { value: '100%', label: 'CBSE & IB Pass Rate' },
  ] as MetricItem[],
  highlights: [
    {
      icon: 'award',
      title: 'CBSE & IB Continuum',
      summary:
        'Structured academic pathways recognized across Indian and global universities.',
    },
    {
      icon: 'cpu',
      title: 'STEM & Innovation Labs',
      summary:
        'Dedicated robotics, coding, and biotechnology laboratories for hands-on discovery.',
    },
    {
      icon: 'compass',
      title: 'Indian Ethos, Global Outlook',
      summary:
        'Grounded in Sanskrit heritage, classical arts, and international leadership.',
    },
  ] as HighlightItem[],
};

/* -------------------------------------------------------------------------- */
/* 7. SUBJECTS COVERED SECTION                                                */
/* -------------------------------------------------------------------------- */
export const SUBJECTS_CONTENT = {
  eyebrow: 'Subjects Covered',
  heading: 'Balanced breadth across every stage.',
  wingTabs: [
    { id: 'all', label: 'All Wings' },
    { id: 'primary', label: 'Primary (I–V)' },
    { id: 'middle', label: 'Middle (VI–VIII)' },
    { id: 'senior', label: 'Senior (IX–XII)' },
  ] as { id: WingFilter; label: string }[],
  subjects: [
    {
      title: 'Mathematics',
      wing: ['primary', 'middle', 'senior'],
      stream: 'Core · Grades I–XII',
      summary: 'Foundational numeracy to Calculus, Vectors & Olympiad problem solving.',
      icon: 'calculator',
    },
    {
      title: 'Physics & Chemistry',
      wing: ['middle', 'senior'],
      stream: 'Sciences · Grades VI–XII',
      summary: 'Experimental mechanics, optics, thermodynamics, and organic chemistry.',
      icon: 'atom',
    },
    {
      title: 'Computer Science & AI',
      wing: ['primary', 'middle', 'senior'],
      stream: 'Technology · Grades I–XII',
      summary: 'Python, robotics, data structures, and applied machine learning.',
      icon: 'code',
    },
    {
      title: 'English & Literature',
      wing: ['primary', 'middle', 'senior'],
      stream: 'Humanities · Grades I–XII',
      summary: 'Critical reading, persuasive rhetoric, and contemporary world literature.',
      icon: 'book',
    },
    {
      title: 'Hindi, Sanskrit & Kannada',
      wing: ['primary', 'middle', 'senior'],
      stream: 'Languages · Grades I–X',
      summary: 'Multilingual fluency celebrating Indian literary and classical roots.',
      icon: 'languages',
    },
    {
      title: 'Economics & Commerce',
      wing: ['senior'],
      stream: 'Senior · Grades XI–XII',
      summary: 'Macroeconomics, financial accounting, and entrepreneurship.',
      icon: 'trending',
    },
    {
      title: 'Biology & Biotechnology',
      wing: ['middle', 'senior'],
      stream: 'Life Sciences · Grades VI–XII',
      summary: 'Genetics, human physiology, ecology, and wet-lab research.',
      icon: 'dna',
    },
    {
      title: 'Fine Arts & Classical Music',
      wing: ['primary', 'middle', 'senior'],
      stream: 'Conservatory · Grades I–XII',
      summary: 'Hindustani & Carnatic vocals, studio painting, theatre, and rhythm.',
      icon: 'music',
    },
  ] as SubjectItem[],
};

/* -------------------------------------------------------------------------- */
/* 8. FACULTY SECTION                                                         */
/* -------------------------------------------------------------------------- */
export const FACULTY_CONTENT = {
  eyebrow: 'Faculty',
  heading: 'Mentors from India’s finest institutions.',
  members: [
    {
      name: 'Dr. Ananya Deshmukh',
      initials: 'AD',
      role: 'Principal & Head of Academics',
      subject: 'Educational Leadership',
      credential: 'Ph.D., IISc Bengaluru · 18 yrs',
      accentBg: 'bg-[#2C1E16]',
      accentText: 'text-[#FFFBF4]',
    },
    {
      name: 'Prof. Vikramaditya Nair',
      initials: 'VN',
      role: 'Dean of Physical Sciences',
      subject: 'Physics & Applied Mathematics',
      credential: 'M.Tech, IIT Madras · 15 yrs',
      accentBg: 'bg-[#16110E]',
      accentText: 'text-[#FFFBF4]',
    },
    {
      name: 'Meera Krishnan',
      initials: 'MK',
      role: 'Chair of Humanities',
      subject: 'English & World Literature',
      credential: 'M.A., St. Stephen’s, Delhi · 12 yrs',
      accentBg: 'bg-[#3B2D23]',
      accentText: 'text-[#FFFBF4]',
    },
    {
      name: 'Rohan Kulkarni',
      initials: 'RK',
      role: 'Lead Mentor, STEM Lab',
      subject: 'Computer Science & Robotics',
      credential: 'B.Tech, NIT Surathkal · 10 yrs',
      accentBg: 'bg-[#16110E]',
      accentText: 'text-[#FFFBF4]',
    },
    {
      name: 'Kavita Subramanian',
      initials: 'KS',
      role: 'Director of Conservatory',
      subject: 'Classical Music & Fine Arts',
      credential: 'Kalakshetra Foundation · 14 yrs',
      accentBg: 'bg-[#2C1E16]',
      accentText: 'text-[#FFFBF4]',
    },
    {
      name: 'Arjun Singhania',
      initials: 'AS',
      role: 'Director of Athletics',
      subject: 'Track, Football & Fitness',
      credential: 'NIS Patiala Certified · 11 yrs',
      accentBg: 'bg-[#3B2D23]',
      accentText: 'text-[#FFFBF4]',
    },
  ] as FacultyMember[],
};

/* -------------------------------------------------------------------------- */
/* 9. PHOTO GALLERY SECTION (WebP ASSETS)                                     */
/* -------------------------------------------------------------------------- */
export const GALLERY_CONTENT = {
  eyebrow: 'Photo Gallery',
  heading: 'Life across campus.',
  items: [
    {
      src: '/images/indian_school_campus_hero_1794634411222.webp',
      thumbSrc: '/images/indian_school_campus_hero_1794634411222_thumb.webp',
      blurDataURL:
        'data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAgCdASoQAAoAA4BaJZgCdAC9u5J9kpYAAP7ib8mFW8gm+r5Iiu7WuGHnKD7rvydkFHtouhlOndfK1ykPWPll1f8oMr1IOssDZKHlMsWkXWr3tUTm3FIZ1f/MKj0wAAA=',
      title: 'Main Academic Quadrangle',
      caption: 'Bengaluru Campus · Morning Courtyard',
      featured: true,
    },
    {
      src: '/images/indian_school_library_lab_1794634410569.webp',
      thumbSrc: '/images/indian_school_library_lab_1794634410569_thumb.webp',
      blurDataURL:
        'data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoQAAoAA4BaJYgCdAYtBqm0oLEggADN6+dajw5RYammNa7+7FaJ1uO9Ri8wxM6O/uBl9wN0rJnooDZ6pulO/6YKRzZQJ4sWtMLM1LZlc5VCjJEp8OFpMRXtfPkg+ZE2AAA=',
      title: 'The Learning Commons',
      caption: 'Library & Digital Research Wing',
    },
    {
      src: '/images/school_stem_robotics_1791800690410.webp',
      thumbSrc: '/images/school_stem_robotics_1791800690410_thumb.webp',
      blurDataURL:
        'data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAAAwAgCdASoQAAoAA4BaJZgCdAYuRqZeDchcIAD+67h8Zfca7QDU4ZT1c4tyARoi1hkdFOEVUxXil9Vnk+74VRbT/WFjUdlQd07oSZNvc8ScG6bWdX72TIZgcqf+ohPUJKBbKDTeS3vACIxaQgA=',
      title: 'Robotics & AI Studio',
      caption: 'Senior Maker Lab',
    },
    {
      src: '/images/school_arts_creative_1791800706712.webp',
      thumbSrc: '/images/school_arts_creative_1791800706712_thumb.webp',
      blurDataURL:
        'data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwAQCdASoQAAoAA4BaJZACdAC1SS9WJwAA/pwzTmde8/As7GX1ztmLUsozA7X735JMOgE/vYuApudKN2GlfngeKXqDSH/GcidJ8waVlvUBrwNniWLluiYEpyG5i1FSqekWviKgAAA=',
      title: 'Fine Arts Atelier',
      caption: 'Painting & Ceramics Loft',
    },
    {
      src: '/images/school_athletics_field_1791800722453.webp',
      thumbSrc: '/images/school_athletics_field_1791800722453_thumb.webp',
      blurDataURL:
        'data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoQAAoAA4BaJbACdAEPTCa4zwogAP6XnM6TxBCdmzEHCyuU5SXS+XkJBeW2kcmaxZPcBV+HOPwUCe/S+eOeRAAA',
      title: 'Athletics Complex',
      caption: '400m Track & Football Arena',
    },
  ] as GalleryItem[],
};

/* -------------------------------------------------------------------------- */
/* 10. CONTACT, ENQUIRY FORM & SOCIAL LINKS                                   */
/* -------------------------------------------------------------------------- */
export const CONTACT_CONTENT = {
  eyebrow: 'Admissions Enquiry & Contact',
  heading: 'Connect with our admissions desk.',
  formTitle: 'Send an Enquiry',
  formSubtitle: 'Our admissions counsellor will respond within 24 hours.',
  fields: {
    parentNameLabel: 'Parent Name *',
    parentNamePlaceholder: 'e.g. Siddharth Verma',
    phoneLabel: 'Phone Number (+91) *',
    phonePlaceholder: '+91 98450 12345',
    emailLabel: 'Email Address *',
    emailPlaceholder: 'parent@example.in',
    gradeLabel: 'Grade Applying For',
    messageLabel: 'Message or Questions (Optional)',
    messagePlaceholder: 'Share any questions regarding admissions, transport, or curriculum...',
  },
  gradeOptions: [
    'Nursery – KG (Early Years)',
    'Grade I – V (Primary)',
    'Grade VI – VIII (Middle)',
    'Grade IX – X (CBSE / IGCSE)',
    'Grade XI – XII (CBSE / IBDP)',
  ],
  submitButton: 'Submit Enquiry',
  savingButton: 'Saving Enquiry...',
  submitError: 'Unable to save your enquiry right now. Please try again or call us directly.',
  callShortButton: 'Call',
  whatsappButton: 'WhatsApp',
  emailButton: 'Email',
  successTitle: 'Enquiry Received',
  successResetButton: 'Send Another Enquiry',
  locationEyebrow: 'Campus Location',
  locationTitle: `${BRAND_INFO.logoName}, Bengaluru`,
  openMapsLabel: 'Open Maps',
  socialEyebrow: 'Social Channels',
  socialHeading: 'Follow campus updates',
  socialLinks: [
    { name: 'Instagram', handle: '@pragnaloka.bengaluru', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'YouTube', handle: 'Pragnaloka Campus TV', href: 'https://youtube.com', icon: 'youtube' },
    { name: 'LinkedIn', handle: 'Pragnaloka Vidyakunj India', href: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Facebook', handle: 'Pragnaloka Community', href: 'https://facebook.com', icon: 'facebook' },
    { name: 'Official Portal', handle: 'pragnalokavidyakunj.edu.in', href: '#', icon: 'globe' },
  ] as SocialLinkItem[],
};

/* -------------------------------------------------------------------------- */
/* 11. SYSTEM PAGES (NOT FOUND, ERROR, LOADING)                               */
/* -------------------------------------------------------------------------- */
export const SYSTEM_PAGES_CONTENT = {
  notFound: {
    code: '404',
    eyebrow: 'Page Not Found',
    title: 'This campus path could not be found.',
    description:
      'The page you are looking for may have moved or is no longer available. Return to the main campus homepage or reach our admissions desk.',
    homeButton: 'Back to Home',
    contactButton: 'Admissions Enquiry',
  },
  error: {
    eyebrow: 'Something Went Wrong',
    title: 'Unable to load this page right now.',
    description:
      'An unexpected error occurred while rendering this view. Please try refreshing the page or return to the homepage.',
    retryButton: 'Try Again',
    homeButton: 'Back to Home',
  },
  loadingLabel: 'Loading Pragnaloka Vidyakunj...',
} as const;
