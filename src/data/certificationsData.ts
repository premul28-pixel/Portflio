import { Certification } from '../types';

export const certificationsData: Certification[] = [
  {
    id: 'power-bi',
    title: 'Data Visualization with Power BI',
    issuer: 'Great Learning (KAHE Internship I Online Training)',
    date: '2026',
    isOnlineTraining: true,
    skills: ['Power BI', 'Data Analytics', 'Interactive Dashboards', 'DAX Queries', 'Business Intelligence'],
    description: 'Completed structured online training covering enterprise data modeling, dynamic dashboard composition, KPIs, and visual analytics reports as documented in the official KAHE Internship I training report.'
  },
  {
    id: 'java-dsa',
    title: 'Java: Data Structures',
    issuer: 'LinkedIn Learning',
    date: 'August 2026',
    skills: ['Java Collections', 'Stacks & Queues', 'Trees & Graphs', 'Time & Space Complexity', 'Algorithms'],
    description: 'Comprehensive certification covering linear and non-linear data structures in Java, memory allocation, asymptotic complexity analysis, and recursive problem solving.'
  },
  {
    id: 'master-networking',
    title: 'Master Computer Networking',
    issuer: 'Scaler Topics',
    date: '2026',
    skills: ['TCP/IP Model', 'OSI Layers', 'Subnetting & Routing', 'DNS & DHCP', 'Socket Architecture'],
    description: 'Deep-dive technical training into networking fundamentals, packet transmission flows, network layer protocols, routing algorithms, and client-server socket communication.'
  },
  {
    id: 'intro-networking',
    title: 'Introduction to Computer Networking',
    issuer: 'Scaler Topics',
    date: 'November 2026',
    skills: ['Network Fundamentals', 'Protocol Hierarchies', 'Bandwidth & Latency', 'LAN/WAN'],
    description: 'Foundational certification covering network topologies, switching methodologies, physical media, and Internet architecture principles.'
  },
  {
    id: 'nptel-esd',
    title: 'Education for Sustainable Development',
    issuer: 'NPTEL',
    date: 'January — April 2026',
    skills: ['Sustainable Engineering', 'Environmental Policy', 'Resource Optimization', 'Systems Thinking'],
    description: '12-week multi-disciplinary government-certified course exploring sustainable frameworks, technological impacts on ecology, and engineering solutions for global sustainability goals.'
  }
];
