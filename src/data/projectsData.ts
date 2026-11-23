import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'paisa',
    title: 'Paisa',
    tagline: 'Offline-first personal finance and multi-wallet budget manager',
    category: 'Mobile',
    status: 'Completed',
    role: 'Sole Architect & Flutter Developer',
    problem: 'Mainstream expense trackers mandate cloud accounts, leak sensitive financial records to third parties, and completely fail when you lack reliable internet connectivity or travel through weak cellular coverage.',
    implementation: 'Independently learned Flutter and Dart from documentation and built an offline-first architecture powered by an embedded SQLite database. Designed an atomic double-entry transaction engine supporting distinct wallets for Cash, Bank accounts, and UPI. Added local monthly cashflow analytics, custom category budgets, and zero network telemetry for 100% data privacy.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Local Storage', 'Material 3', 'State Management'],
    keyHighlights: [
      'Zero external network requests — all user financial data remains encrypted on-device in local SQLite',
      'Multi-wallet tracking across Cash, Bank, and UPI accounts with real-time balance reconciliation',
      'Dynamic monthly expense vs. income analytics with interactive visual breakdowns',
      'Learned Dart and Flutter completely independently to deliver the product end-to-end'
    ],
    repoUrl: 'https://github.com/premul28-pixel/Paisa',
    artworkType: 'wallet',
    roadmap: [
      'Encrypted JSON backup and local restore feature',
      'Configurable monthly budget cap alerts and recurring bills',
      'Biometric fingerprint/face unlock for local database access'
    ]
  },
  {
    id: 'studyhub-pro',
    title: 'StudyHub Pro',
    tagline: 'Comprehensive student productivity hub and Java/DSA placement prep suite',
    category: 'Full-Stack',
    status: 'In Development',
    role: 'Lead Frontend & Firebase Architect',
    problem: 'Engineering undergraduates face scattered study materials: coding roadmaps reside on one site, lecture notes on another, and placement checklists on local files, resulting in fragmented progress and lost momentum.',
    implementation: 'Engineered a modern single-page platform using React, TypeScript, and Firebase. Structured curated modules for Java Object-Oriented Programming, Data Structures, Algorithms, and interview patterns. Implemented Firebase Auth and Firestore for user session persistence and modular curriculum navigation.',
    technologies: ['React', 'TypeScript', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS', 'Vite'],
    keyHighlights: [
      'Curated Java and Data Structures placement roadmaps with topic-wise checklists',
      'Clean editorial UI with focus modes and distraction-free documentation reading',
      'Modular architecture ready for real-time progress syncing across devices',
      'Designed specifically for college peers preparing for software engineering placement drives'
    ],
    repoUrl: 'https://github.com/premul28-pixel/StudyHub-Pro',
    artworkType: 'notebook',
    roadmap: [
      'Real-time progress synchronization across multiple devices via Firestore listeners',
      'Automated practice recommendations based on quiz accuracy and coding topic mastery',
      'Platform-wide problem count aggregators for LeetCode and competitive programming profiles'
    ]
  },
  {
    id: 'sitha-ai',
    title: 'Sitha AI',
    tagline: 'Voice-first desktop personal assistant for everyday workstation operations',
    category: 'AI & Systems',
    status: 'Prototype',
    role: 'Creator & AI Systems Prototyper',
    problem: 'Switching contexts to perform mundane desktop routines — launching specific workflows, querying notes, opening nested directories, or dictating thoughts — creates friction throughout the coding day.',
    implementation: 'Developed a voice-driven assistant prototype that operates directly on the laptop workstation. Built an audio capture pipeline with speech recognition, structured command parsing, and local desktop execution hooks. Designed the initial memory scratchpad to hold task contexts and quick notes.',
    technologies: ['Python', 'Speech Recognition', 'Audio Engine', 'OS Automation', 'LLM Prompting'],
    keyHighlights: [
      'Voice-activated hands-free query handling and quick desktop action dispatch',
      'Audio waveform visualization providing immediate feedback during speech capture',
      'Contextual scratchpad prototype for quick developer reminders and thoughts',
      'Lightweight local execution with low idle background resource footprint'
    ],
    artworkType: 'waveform',
    roadmap: [
      'Persistent personal memory graph across daily sessions',
      'Deep integration with local LLM models (e.g. Ollama) and Gemini API',
      'Broader desktop automation for terminal scripts, browser tabs, and file organization'
    ]
  },
  {
    id: 'gobuddy',
    title: 'GoBuddy',
    tagline: 'Campus & retail smart commerce platform with dual customer/seller roles',
    category: 'Full-Stack',
    status: 'In Development',
    role: 'Full-Stack Developer',
    problem: 'Local campus stores and small vendor stalls face long checkout queues and lack lightweight, accessible point-of-sale systems with transparent billing and sales insights.',
    implementation: 'Building a responsive commerce application providing segregated user experiences for buyers and merchant sellers. Implemented instant QR code generation for digital bills, dynamic cart management, and daily merchant sales summaries. Integrating cloud backend state.',
    technologies: ['Flutter', 'React', 'Firebase', 'QR Code Engine', 'SQLite'],
    keyHighlights: [
      'Dual role architecture separating buyer checkout from seller inventory and reports',
      'Instant QR-based digital receipt verification and bill sharing',
      'Daily merchant ledger and sales volume analytics'
    ],
    repoUrl: 'https://github.com/premul28-pixel',
    artworkType: 'generic',
    roadmap: [
      'Native UPI payment gateway integration for frictionless transactions',
      'Offline-capable queue billing with background synchronization',
      'Low-stock alerts and customer loyalty points'
    ]
  },
  {
    id: 'dayflow',
    title: 'Dayflow',
    tagline: 'HRMS and employee workflow portal developed at Odoo × NMIT Hackathon',
    category: 'Concepts & Hackathons',
    status: 'Hackathon',
    role: 'Hackathon Developer',
    problem: 'Enterprise workforce systems are notoriously bloated, difficult to navigate for staff on mobile, and slow to reflect leave approvals and shift swaps.',
    implementation: 'Collaborated in an intensive hackathon environment at NMIT Bangalore on an Odoo-backed HRMS suite. Configured employee shift scheduling, attendance telemetry, automated leave request routing, and internal announcements.',
    technologies: ['Python', 'Odoo Framework', 'PostgreSQL', 'JavaScript', 'XML'],
    keyHighlights: [
      'Rapid prototype delivered within hackathon sprint constraints',
      'Interactive employee dashboard for attendance and leave balancing',
      'Configured role-based access control for HR managers and team members'
    ],
    repoUrl: 'https://github.com/premul28-pixel',
    artworkType: 'generic'
  },
  {
    id: 'safedrive-ai',
    title: 'SafeDrive AI',
    tagline: 'Driver-safety telemetry and alertness monitoring simulation',
    category: 'AI & Systems',
    status: 'Prototype',
    role: 'Developer & Simulator Engineer',
    problem: 'Driver fatigue and unmonitored highway driving cause preventable road accidents worldwide; early warning indicators need to run with low latency.',
    implementation: 'Engineered a telemetry and simulated facial cue tracking pipeline to detect drowsiness patterns and erratic speed fluctuations. Prototyped alert thresholds and simulated warning chime events.',
    technologies: ['Python', 'Computer Vision Cues', 'Telemetry Engine', 'Data Analytics'],
    keyHighlights: [
      'Real-time simulation of speed telemetry anomalies and driver eye-closure metrics',
      'Tiered alert system for visual and audio warnings',
      'Lightweight edge processing architecture suitable for vehicle dashboards'
    ],
    repoUrl: 'https://github.com/premul28-pixel',
    artworkType: 'generic'
  },
  {
    id: 'agriverse-ai',
    title: 'AgriVerse AI',
    tagline: 'Agricultural intelligence proposal for regional crop diagnostics',
    category: 'Concepts & Hackathons',
    status: 'Concept',
    role: 'Hackathon Ideator & Technical Researcher',
    problem: 'Smallholder farmers in Tamil Nadu face crop loss from unaddressed leaf diseases and unpredictable weather changes, lacking immediate expert advice in their native language.',
    implementation: 'Drafted a comprehensive hackathon architecture proposal combining regional computer vision disease identification with Tamil and English voice interfaces, weather-informed sowing guidance, and local market price feeds.',
    technologies: ['Computer Vision (Proposal)', 'Regional NLP', 'Tamil Voice Interface', 'Weather API'],
    keyHighlights: [
      'Dual Tamil and English conversational interface for accessibility across literacy levels',
      'Early leaf disease visual classification pipeline architecture',
      'Context-aware fertilizer and irrigation scheduling algorithm'
    ],
    artworkType: 'generic'
  },
  {
    id: 'placementpro-ai',
    title: 'PlacementProAI',
    tagline: 'Curated technical interview repository and problem-solving patterns',
    category: 'Full-Stack',
    status: 'In Development',
    role: 'Maintainer & Author',
    problem: 'Preparing for technical engineering interviews requires structured revision across core CS subjects (OOP, DBMS, OS, Networks) alongside high-frequency DSA patterns.',
    implementation: 'Assembled a comprehensive open-source revision repository covering essential algorithms, Java interview questions, monotonic stack patterns, and DBMS query optimizations.',
    technologies: ['Java', 'C++', 'Data Structures', 'Algorithms', 'Markdown'],
    keyHighlights: [
      'Categorized LeetCode problem patterns with optimal space-time complexities',
      'Core CS subject summary cheat sheets for campus placements',
      'Directly utilized by college peers in mock placement preparation'
    ],
    repoUrl: 'https://github.com/premul28-pixel/PlacementProAI',
    artworkType: 'generic'
  },
  {
    id: 'premtech',
    title: 'PremTech',
    tagline: 'Freelance software solutions, modern web apps, and custom development',
    category: 'Freelance',
    status: 'Completed',
    role: 'Independent Engineering Consultant',
    problem: 'Small businesses, student teams, and creators need high-performance web applications, custom Flutter mobile tools, and automated scripts without corporate bloat.',
    implementation: 'Offering freelance technical services spanning responsive React/TypeScript websites, Flutter mobile apps, Java backend utilities, and workflow automation. Emphasizing clean architecture, transparent communication, and rapid turnaround.',
    technologies: ['React', 'TypeScript', 'Flutter', 'Java', 'Tailwind CSS', 'Vite', 'Firebase'],
    keyHighlights: [
      'End-to-end delivery from wireframing to production deployment',
      'Direct developer-to-client collaboration with transparent Git versioning',
      'Production-ready codebases with clean documentation and responsive design'
    ],
    repoUrl: 'https://github.com/premul28-pixel',
    artworkType: 'generic'
  }
];
