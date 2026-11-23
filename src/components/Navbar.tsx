import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects', badge: '8' },
    { name: 'On Code', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Notes', href: '#notes' },
    { name: 'PremTech', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-ink-950/85 backdrop-blur-md shadow-xs border-b border-ink-200/80 dark:border-ink-800/80 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-hidden"
          aria-label="Prem Kumar M Portfolio Home"
        >
          <div className="w-9 h-9 rounded-xl bg-ink-900 dark:bg-violet-600 text-white flex items-center justify-center font-serif text-lg font-bold shadow-xs group-hover:scale-105 transition-transform">
            P
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-base font-bold text-ink-900 dark:text-white tracking-tight">
                Prem Kumar M
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Internship 2026
              </span>
            </div>
            <p className="hidden sm:block text-[11px] text-ink-500 dark:text-ink-400">
              Software Engineer • KAHE Coimbatore
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3 py-1.5 rounded-lg text-xs font-semibold text-ink-600 hover:text-ink-950 dark:text-ink-300 dark:hover:text-white hover:bg-ink-100/60 dark:hover:bg-ink-800/60 transition-colors"
            >
              {link.name}
              {link.badge && (
                <span className="ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full bg-violet-500/15 text-violet-700 dark:text-violet-300 font-mono">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-xl text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 border border-ink-200 dark:border-ink-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-ink-700" />}
          </button>

          {/* Download Résumé CTA */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-ink-900 text-white dark:bg-ink-100 dark:text-ink-950 hover:bg-violet-700 dark:hover:bg-violet-200 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Résumé</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-xl text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 border border-ink-200 dark:border-ink-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white/95 dark:bg-ink-950/95 backdrop-blur-xl border-b border-ink-200 dark:border-ink-800 shadow-xl p-5 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-ink-100 dark:border-ink-800">
            <span className="text-xs font-semibold text-ink-400 uppercase tracking-wider">
              Navigation
            </span>
            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Available for Internships
            </span>
          </div>

          <nav className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
              >
                <span>{link.name}</span>
                {link.badge ? (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-500/15 text-violet-600 dark:text-violet-300 font-mono">
                    {link.badge}
                  </span>
                ) : (
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-400" />
                )}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              Download Official Résumé (PDF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
