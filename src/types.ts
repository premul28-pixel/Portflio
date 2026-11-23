export type ProjectStatus = 'Completed' | 'In Development' | 'Prototype' | 'Concept' | 'Hackathon';

export type ProjectCategory = 'Mobile' | 'Full-Stack' | 'AI & Systems' | 'Concepts & Hackathons' | 'Freelance';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  role: string;
  problem: string;
  implementation: string;
  technologies: string[];
  keyHighlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  artworkType: 'wallet' | 'notebook' | 'waveform' | 'generic';
  roadmap?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Intermediate' | 'Familiar';
    context: string;
  }[];
}

export interface JourneyItem {
  id: string;
  period: string;
  year: string;
  title: string;
  organization: string;
  location: string;
  type: 'hackathon' | 'education' | 'milestone';
  description: string;
  highlights: string[];
  badge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  isOnlineTraining?: boolean;
  skills: string[];
  description: string;
  credentialUrl?: string;
}

export interface CodingProfile {
  name: string;
  handle: string;
  url: string;
  focus: string;
  color: string;
  badge: string;
}

export interface EngineeringNote {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  keyTakeaways: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  deliverables: string[];
  techStack: string[];
  idealFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'internship' | 'skills' | 'services' | 'general';
}
