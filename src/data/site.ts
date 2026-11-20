export const SITE = {
  brand: '.ias',
  name: 'Josias Seymour Morales',
  shortName: 'Josias Morales',
  location: 'Taguig / Manila, PH',
  currentRole: 'Service Improvement Analyst — IT Service Management',
  currentCompany: 'Sun Life Global Solutions',
  currentParent: 'Sun Life of Canada Philippines',
  description:
    'Personal portfolio of Josias Seymour Morales — Service Improvement Analyst at Sun Life Global Solutions (Sun Life of Canada Philippines), builder of SunScore, and formerly Service Integration & Management at CGI Philippines.',
  bio: 'Currently driving IT Service Management and continual service improvement at Sun Life Global Solutions (Taguig, PH), where I am building SunScore—a Service Reliability Index and Application Risk platform. Previously at CGI Philippines (2024–2026), progressing from Service Desk Specialist and Knowledge Manager into Service Integration & Management.',
  email: 'josiasseymourmorales@gmail.com',
  links: [
    {
      label: 'Email',
      handle: 'josiasseymourmorales@gmail.com',
      href: 'mailto:josiasseymourmorales@gmail.com',
      external: false,
    },
    {
      label: 'GitHub',
      handle: 'github.com/jseymourm',
      href: 'https://github.com/jseymourm',
      external: true,
    },
    {
      label: 'LinkedIn',
      handle: 'in/josiasseymourmorales',
      href: 'https://www.linkedin.com/in/josiasseymourmorales/',
      external: true,
    },
  ],
  navigation: [
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Education', href: '/#education' },
    { label: 'Contact', href: '/#contact' },
  ],
} as const;

export interface CapabilityGroup {
  index: string;
  title: string;
  items: string[];
}

export const CAPABILITIES: CapabilityGroup[] = [
  {
    index: 'A',
    title: 'IT Service Management',
    items: [
      'Service Reliability Index & KPI Scoring',
      'Continual Service Improvement (CSI)',
      'Service Integration & Management (SIAM)',
      'Problem & Knowledge Management',
      'ServiceNow Data Normalization',
      'Application Risk & Tech Debt Tracking',
    ],
  },
  {
    index: 'B',
    title: 'Engineering & Web',
    items: [
      'React & TypeScript',
      'Python (Scoring & Data Engines)',
      'PostgreSQL',
      'Astro & Tailwind CSS',
      'AWS EC2 & Firebase Hosting',
      'HTML5, CSS & C++ Foundations',
    ],
  },
  {
    index: 'C',
    title: 'Enterprise Systems & Identity',
    items: [
      'Microsoft Entra & Active Directory',
      'Azure & Privileged Identity Management (PIM)',
      'Microsoft Intune & SCCM',
      'Endpoint & Device Management',
      'Microsoft 365 Administration',
      'Access Control & Workflow Optimization',
    ],
  },
];

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    institution: 'Pamantasan ng Lungsod ng Maynila',
    degree: 'B.S. in Computer Engineering',
    period: '2020 — 2024',
    location: 'Manila, PH',
    highlights: [
      'Focused on computer networks and security, software design, data structures and algorithms, and systems architecture.',
      'Built hands-on foundations in routing, packet tracing, server configuration, and object-oriented programming.',
    ],
  },
  {
    institution: 'Paco Catholic School',
    degree: 'STEM — Science, Technology, Engineering & Mathematics',
    period: '2015 — 2020',
    location: 'Manila, PH',
    highlights: [
      'Completed senior high school in the STEM track, establishing the analytical and engineering foundation for Computer Engineering.',
    ],
  },
];
