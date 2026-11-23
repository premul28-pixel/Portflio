import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-web',
    title: 'Modern Web Applications & Portfolios',
    subtitle: 'Lightning-fast, accessible, and editorial web experiences built with modern tooling.',
    deliverables: [
      'Single Page Apps & full-stack dashboards using React, TypeScript, and Vite',
      'Pixel-perfect responsive styling with Tailwind CSS and custom typography',
      'Accessible WCAG-compliant design with dark mode, animations, and clean routing',
      'SEO optimization, social metadata, and high Google Lighthouse performance scores'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'],
    idealFor: 'Founders, students, and businesses wanting a distinctive, fast digital presence without heavyweight CMS bloat.'
  },
  {
    id: 'mobile-dev',
    title: 'Offline-First Mobile Apps (Flutter & SQLite)',
    subtitle: 'Cross-platform mobile applications that remain responsive, reliable, and functional without active internet.',
    deliverables: [
      'Multi-screen Android applications built with Flutter and Dart',
      'Embedded SQLite database modeling, ACID local transactions, and zero-latency caching',
      'Intuitive Material 3 UI design, custom charts, and smooth animations',
      'Zero-network fallback modes for extreme privacy and battery efficiency'
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'Local Storage', 'Material 3'],
    idealFor: 'Utility apps, inventory trackers, finance tools, and offline field collection apps.'
  },
  {
    id: 'dsa-mentorship',
    title: 'Java & Data Structures Placement Prep',
    subtitle: 'Practical code reviews, algorithmic guidance, and placement syllabus walkthroughs.',
    deliverables: [
      'Monotonic stack, two-pointer, sliding window, and graph pattern walkthroughs',
      'Clean Java object-oriented design and memory management reviews',
      'Curated problem sheets mapping directly to top technical interview rounds'
    ],
    techStack: ['Java', 'C++', 'DSA', 'OOPs', 'LeetCode'],
    idealFor: 'Engineering students and peers seeking structured preparation for placement tests.'
  },
  {
    id: 'ai-automation',
    title: 'AI Tooling & Automation Workflows',
    subtitle: 'Custom Python scripts and prompt-engineered workflows to eliminate manual busywork.',
    deliverables: [
      'Desktop automation scripts for repetitive tasks and file parsing',
      'Speech recognition prototypes and voice-activated command routing',
      'Structured LLM prompt integrations for summarizing documents and extraction'
    ],
    techStack: ['Python', 'SpeechRecognition', 'LLM Prompting', 'REST APIs'],
    idealFor: 'Developers and creators looking to automate repetitive data or workstation workflows.'
  }
];
