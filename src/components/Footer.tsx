import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-ink-200/80 dark:border-ink-800/80 bg-white dark:bg-ink-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Rights */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-serif text-base font-bold text-ink-950 dark:text-white">
              Prem Kumar M
            </span>
            <span className="text-ink-400">•</span>
            <span className="text-xs text-ink-500 font-mono">B.E. CSE @ KAHE Coimbatore</span>
          </div>
          <p className="text-xs text-ink-500 dark:text-ink-400">
            Crafted with React, TypeScript, Vite & Three.js. Built in Villupuram & Coimbatore, Tamil Nadu.
          </p>
        </div>

        {/* Quick Links & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-ink-600 dark:text-ink-300">
          <a
            href="https://github.com/premul28-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prem-kumar-m-31796a377"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:premul28@gmail.com"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Email
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Résumé PDF
          </button>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1 p-2 rounded-xl bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200 hover:bg-ink-200 dark:hover:bg-ink-700 transition-colors ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px]">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
