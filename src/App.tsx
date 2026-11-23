import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { SkillsSection } from './components/SkillsSection';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { NotesSection } from './components/NotesSection';
import { ServicesSection } from './components/ServicesSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#fafafc] dark:bg-[#090d16] text-ink-900 dark:text-ink-50 selection:bg-violet-500/20 selection:text-violet-900 dark:selection:text-violet-200 transition-colors duration-300">
      {/* Sticky / Floating Editorial Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        {/* Hero: Portrait-led opening, confident type, 3D chess knight, CTAs */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About: Prem Kumar M, KAHE B.E. CSE, Paisa journey, strengths */}
        <About />

        {/* Featured Work: Paisa, StudyHub Pro, Sitha AI, GoBuddy, Dayflow, etc. */}
        <Projects />

        {/* On Code and Skills: grouped by use, practical examples, code snippets */}
        <SkillsSection />

        {/* Journey: SIMATS 3rd place, SIH 2026 SPIDY HACKERS, KAHE education */}
        <Journey />

        {/* Certifications: Power BI online training, Java DSA, Scaler Networking */}
        <Certifications />

        {/* Coding Profiles: LeetCode, Codeforces, CodeChef, AtCoder, CSES */}
        <CodingProfiles />

        {/* Engineering Notes: Monotonic stacks, offline SQLite wallets, prefix sums */}
        <NotesSection />

        {/* Freelance Services: PremTech */}
        <ServicesSection />

        {/* FAQs: Internship interests, relocation, learning process, services */}
        <FAQSection />

        {/* Contact: Form with "Open email draft", verified links, resume */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Public Résumé Modal Preview & Direct Download */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
